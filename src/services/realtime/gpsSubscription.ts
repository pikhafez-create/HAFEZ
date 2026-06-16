import { supabase } from '../../shared-supabase';

export const subscribeDriverLocations = (callback: (data:any)=>void) => {
  return supabase
    .channel('driver_locations_channel')
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'driver_locations'
    }, (payload:any) => {
      callback(payload.new);
    })
    .subscribe();
};
