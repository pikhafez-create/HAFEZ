-- STRICT ORDER SECURITY
alter table orders enable row level security;

create policy "admin full access" on orders
for all using (auth.role() = 'authenticated');

create policy "driver read assigned orders" on orders
for select using (driver_id = auth.uid());

create policy "customer read own orders" on orders
for select using (customer_id = auth.uid());
