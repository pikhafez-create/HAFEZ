import { supabase } from '../lib/supabase';

export const subscribeDriverLocations = (callback: (d:any)=>void) => {
  return supabase
    .channel('driver-locations')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'drivers' }, (payload:any) => {
      callback(payload.new);
    })
    .subscribe();
};
