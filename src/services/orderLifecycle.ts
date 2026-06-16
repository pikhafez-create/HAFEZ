import { supabase } from '../../shared-supabase';
import { OrderStatus, isValidTransition } from '../../shared/orderState';

export const updateOrderStatus = async (
  orderId: string,
  from: OrderStatus,
  to: OrderStatus
) => {

    throw new Error('Invalid status transition');
  }

  return await supabase
    .from('orders')
    .update({ status: to })
    .eq('id', orderId);
};

export const assignDriverToOrder = async (
  orderId: string,
  driverId: string
) => {
  return await supabase
    .from('orders')
    .update({ status: 'assigned', driver_id: driverId })
    .eq('id', orderId);
};
