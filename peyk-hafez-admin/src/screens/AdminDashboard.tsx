import { View, ScrollView, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import AdminStats from '../components/dashboard/AdminStats';
import RealMap from '../components/map/RealMap';

export default function AdminDashboard() {
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
      .channel('admin-dashboard')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, fetchData)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'drivers' }, fetchData)
      .subscribe();

    return () => {
      supabase.removeChannel(ch);
    };
  }, []);

  return (
    <ScrollView style={{ flex:1 }}>
      <AdminStats orders={orders} drivers={drivers} />
      <RealMap drivers={drivers} />
    </ScrollView>
  );
}
