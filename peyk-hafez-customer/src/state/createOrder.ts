import { supabase } from '../lib/supabase';

export const createOrder = async (customerId: string, payload: any) => {
  const { data, error } = await supabase.from('orders').insert({ customer_id: customerId, status: 'pending', ...payload }).select().single();
  return { data, error };
};
