import { useEffect } from 'react';
import { supabase } from '../../shared-supabase';

export const useDriverNotifications = (driverId:string, onOrder:any) => {
  useEffect(() => {
    const ch = supabase
      .channel('driver-orders')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'notifications'
      }, (payload:any) => {
        if (payload.new?.event === 'order_assigned') {
          if (payload.new.payload.driverId === driverId) {
            onOrder(payload.new.payload);
          }
        }
      })
      .subscribe();

    return () => { supabase.removeChannel(ch); };
  }, []);
};
