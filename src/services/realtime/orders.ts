import { supabase } from '../../shared-supabase';

export const subscribeOrders = (callback: (o:any)=>void) => {
  return supabase
    .channel('orders-channel')
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'orders'
    }, (payload:any) => {
      callback(payload.new);
    })
    .subscribe();
};
