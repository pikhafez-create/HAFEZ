import { View, Text } from 'react-native';
import { useEffect } from 'react';
import { startGPS } from '../services/gps';

export default function GPSBootstrap() {
  useEffect(() => {
    startGPS('driver_1');
  }, []);

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>GPS فعال است</Text>
    </View>
  );
}
