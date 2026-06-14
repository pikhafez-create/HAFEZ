import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://YOUR_PROJECT.supabase.co',
  'YOUR_ANON_KEY'
);

export const subscribeDrivers = (callback: any) => {
  return supabase
    .channel('drivers')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'drivers' }, payload => {
      callback(payload.new);
    })
    .subscribe();
};

export const subscribeOrders = (callback: any) => {
  return supabase
    .channel('orders')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, payload => {
      callback(payload.new);
    })
    .subscribe();
};
