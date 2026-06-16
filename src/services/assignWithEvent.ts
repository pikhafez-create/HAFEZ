import { supabase } from '../../shared-supabase';
import { sendEvent } from './realtime/notifications';

export const assignDriverWithEvent = async (orderId:string, driverId:string) => {
  const res = await supabase
    .from('orders')
    .update({ status: 'assigned', driver_id: driverId })
    .eq('id', orderId);

  await sendEvent('order_assigned', {
    orderId,
    driverId
  });

  return res;
};
