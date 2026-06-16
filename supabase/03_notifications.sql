create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  event text not null,
  payload jsonb,
  created_at timestamp default now()
);

alter table notifications enable row level security;

create policy "read notifications" on notifications
for select using (true);

create policy "insert notifications" on notifications
for insert with check (true);
