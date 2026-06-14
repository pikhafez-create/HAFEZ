import { supabase } from '../lib/supabase';

export const getAssignedOrders = async (driverId: string) => {
  const { data } = await supabase
    .from('orders')
    .select('*')
    .eq('driver_id', driverId);

  return data || [];
};
