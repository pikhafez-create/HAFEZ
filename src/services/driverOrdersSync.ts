import { supabase } from '../../shared-supabase';

export const getDriverOrders = async (driverId: string) => {
  const { data } = await supabase
    .from('orders')
    .select('*')
    .eq('driver_id', driverId);

  return data || [];
};
