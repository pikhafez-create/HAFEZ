import { supabase } from '../lib/supabase';

export const assignOrderToDriver = async (orderId: string, driverId: string) => {
  const { data, error } = await supabase.from('orders').update({ status: 'assigned', driver_id: driverId }).eq('id', orderId).select().single();
  return { data, error };
};
