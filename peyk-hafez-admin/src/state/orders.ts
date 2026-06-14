import { supabase } from '../lib/supabase';
import { ORDER_STATUS } from '../constants/orderStatus';

export const getOrders = async () => {
  const { data } = await supabase.from('orders').select('*');
  return data || [];
};

export const assignDriverToOrder = async (orderId: string, driverId: string) => {
  return await supabase.from('orders')
    .update({ status: ORDER_STATUS.ASSIGNED, driver_id: driverId })
    .eq('id', orderId);
};

export const updateOrderStatus = async (orderId: string, status: string) => {
  return await supabase.from('orders')
    .update({ status })
    .eq('id', orderId);
};
