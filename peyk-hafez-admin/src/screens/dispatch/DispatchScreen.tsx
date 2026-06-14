import { View, Text, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import OrderCard from '../../components/dispatch/OrderCard';

export default function DispatchScreen() {
  const [orders, setOrders] = useState<any[]>([]);
  const [drivers, setDrivers] = useState<any[]>([]);

  const fetchData = async () => {
    const o = await supabase.from('orders').select('*');
    const d = await supabase.from('drivers').select('*');
    setOrders(o.data || []);
    setDrivers(d.data || []);
  };

  useEffect(() => {
    fetchData();

    const ch = supabase
      .channel('dispatch')
      .on('postgres_changes',{event:'*',schema:'public',table:'orders'},fetchData)
      .subscribe();

    return () => { supabase.removeChannel(ch); };
  }, []);

  const assign = async (orderId: string, driverId: string) => {
    await supabase.from('orders')
      .update({ status:'assigned', driver_id: driverId })
      .eq('id', orderId);
    fetchData();
  };

  return (
    <View style={{ flex:1, padding:12 }}>
      <Text style={{ fontSize:18, fontWeight:'bold' }}>Dispatch Panel</Text>

      <ScrollView>
        {orders.map(o => (
          <OrderCard key={o.id} order={o} drivers={drivers} onAssign={assign} />
        ))}
      </ScrollView>
    </View>
  );
}
