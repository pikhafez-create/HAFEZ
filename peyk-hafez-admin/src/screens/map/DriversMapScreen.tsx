import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { subscribeDriverLocations } from '../../services/driverTracking';
import RealMap from '../../components/map/RealMap';

export default function DriversMapScreen() {
  const [drivers, setDrivers] = useState<any[]>([]);

  useEffect(() => {
    const channel = subscribeDriverLocations((d) => {
      setDrivers(prev => {
        const filtered = prev.filter(x => x.id !== d.id);
        return [...filtered, d];
      });
    });

    return () => {
      channel?.unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex:1 }}>
      <RealMap drivers={drivers} />
    </View>
  );
}
