create table if not exists driver_locations (
  driver_id uuid primary key,
  lat double precision,
  lng double precision,
  updated_at timestamp default now()
);

alter table driver_locations enable row level security;

create policy "public read drivers" on driver_locations
for select using (true);

create policy "driver can update own location" on driver_locations
for insert with check (auth.uid() = driver_id);
