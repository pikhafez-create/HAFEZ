import * as Location from 'expo-location';
import { supabase } from '../lib/supabase';

export const startGPS = async (driverId: string) => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') return;

  return Location.watchPositionAsync({
    accuracy: Location.Accuracy.High,
    timeInterval: 3000,
    distanceInterval: 5
  }, async (loc) => {
    const { latitude, longitude } = loc.coords;

    await supabase.from('drivers').update({
      lat: latitude,
      lng: longitude,
      updated_at: new Date().toISOString()
    }).eq('id', driverId);
  });
};
