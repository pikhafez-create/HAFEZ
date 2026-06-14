import { supabase } from '../lib/supabase';

export const getAssignedOrders = async (driverId: string) => {
  const { data } = await supabase
    .from('orders')
    .select('*')
    .eq('driver_id', driverId);
  return data || [];
};

export const updateOrderStatus = async (orderId: string, status: string) => {
  return await supabase
    .from('orders')
    .update({ status })
    .eq('id', orderId);
};
