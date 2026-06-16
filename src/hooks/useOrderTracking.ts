import { useEffect } from 'react';
import { supabase } from '../../shared-supabase';

export const useOrderTracking = (orderId:string, onUpdate:any) => {
  useEffect(() => {
    const ch = supabase
      .channel('customer-track')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'orders'
      }, (payload:any) => {
        if (payload.new.id === orderId) {
          onUpdate(payload.new);
        }
      })
      .subscribe();

    return () => { supabase.removeChannel(ch); };
  }, []);
};
