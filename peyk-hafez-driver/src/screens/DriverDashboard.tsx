import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Card from '../components/Card';
import Loading from '../components/Loading';

export default function DriverDashboard() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    const { data } = await supabase.from('orders').select('*').eq('driver_id','driver_1');
    setOrders(data || []);
  };

  useEffect(() => {
    fetchOrders();

    const channel = supabase
      .channel('driver-orders')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, () => {
        fetchOrders();
      })
      .subscribe();

    setLoading(false);
    return () => { supabase.removeChannel(channel); };
  }, []);

  if (loading) return <Loading />;

  return (
    <View style={{ flex:1, padding:16 }}>
      <Text>Driver Dashboard</Text>
      {orders.map(o => <Card key={o.id}><Text>{o.id}</Text></Card>)}
    </View>
  );
}
