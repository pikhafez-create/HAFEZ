-- USERS TABLE
create table users (
  id uuid primary key default gen_random_uuid(),
  name text,
  phone text unique,
  role text check (role in ('admin','driver','customer')),
  created_at timestamp default now()
);

-- DRIVERS TABLE
create table drivers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  online boolean default false,
  lat double precision,
  lng double precision,
  updated_at timestamp default now()
);

-- ORDERS TABLE
create table orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references users(id),
  driver_id uuid references drivers(id),
  status text check (status in ('pending','assigned','picked','delivered')),
  created_at timestamp default now()
);

-- ENABLE REALTIME
alter table drivers replica identity full;
alter table orders replica identity full;
