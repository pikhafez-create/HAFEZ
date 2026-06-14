import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { subscribeDriverLocations } from '../../services/driverTracking';

export default function LiveDriversPanel() {
  const [drivers, setDrivers] = useState<any[]>([]);

  useEffect(() => {
    const channel = subscribeDriverLocations((d) => {
      setDrivers(prev => {
        const filtered = prev.filter(x => x.id !== d.id);
        return [...filtered, d];
      });
    });

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex:1, padding:12 }}>
      <Text>Live Drivers</Text>
      {drivers.map(d => (
        <Text key={d.id}>{d.id} | {d.lat} | {d.lng}</Text>
      ))}
    </View>
  );
}
