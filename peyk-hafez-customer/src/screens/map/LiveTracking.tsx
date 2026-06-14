import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function LiveTracking() {
  const [driver, setDriver] = useState<any>(null);

  const fetchDriver = async () => {
    const { data } = await supabase
      .from('drivers')
      .select('id, lat, lng')
      .eq('id', 'driver_1')
      .single();

    setDriver(data);
  };

  useEffect(() => {
    fetchDriver();

    const channel = supabase
      .channel('customer-track')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'drivers' }, () => {
        fetchDriver();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <View style={{ flex:1, padding:16 }}>
      <Text>Live Tracking</Text>
    </View>
  );
}
