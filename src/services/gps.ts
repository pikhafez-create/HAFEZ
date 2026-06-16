import * as Location from 'expo-location';
import { supabase } from '../../shared-supabase';

let watchId: Location.LocationSubscription | null = null;

export const startGPS = async (driverId: string) => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') return;

  watchId = await Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.High,
      timeInterval: 3000,
      distanceInterval: 5
    },
    async (loc) => {
      const { latitude, longitude } = loc.coords;

      await supabase.from('driver_locations').upsert({
        driver_id: driverId,
        lat: latitude,
        lng: longitude,
        updated_at: new Date().toISOString()
      });
    }
  );
};

export const stopGPS = async () => {
  if (watchId) watchId.remove();
  watchId = null;
};
