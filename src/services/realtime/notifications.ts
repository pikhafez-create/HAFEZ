import { supabase } from '../../shared-supabase';

export type NotificationEvent = 'order_assigned' | 'order_updated' | 'order_completed';

export const sendEvent = async (event: NotificationEvent, payload:any) => {
  return await supabase.from('notifications').insert({
    event,
    payload,
    created_at: new Date().toISOString()
  });
};

export const subscribeEvents = (callback:(e:any)=>void) => {
  return supabase
    .channel('notifications-channel')
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'notifications'
    }, (payload:any) => callback(payload.new))
    .subscribe();
};
