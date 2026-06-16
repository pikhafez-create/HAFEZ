create table if not exists profiles (
  id uuid primary key,
  role text not null check (role in ('admin','driver','customer')),
  created_at timestamp default now()
);

-- Enable Row Level Security
alter table profiles enable row level security;

-- Basic policy (each user can read own profile)
create policy "read own profile" on profiles
for select using (auth.uid() = id);
