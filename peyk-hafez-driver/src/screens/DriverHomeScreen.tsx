import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { startGPS } from '../services/gps';

export default function DriverHomeScreen({ navigation }: any) {
  useEffect(() => {
    startGPS('driver_1');
  }, []);

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: '800', textAlign: 'right' }}>
        پنل راننده
      </Text>

      <TouchableOpacity style={{ padding: 16, backgroundColor: '#fff', marginTop: 12, borderRadius: 12 }}
        onPress={() => navigation.navigate('Orders')}
      >
        <Text style={{ textAlign: 'right' }}>سفارش‌های من</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
