import * as Location from 'expo-location';

let watcher:any = null;

export const startBackgroundGPS = async (cb:any) => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') return;

  watcher = await Location.watchPositionAsync({
    accuracy: Location.Accuracy.High,
    timeInterval: 4000,
    distanceInterval: 5
  }, cb);
};

export const stopBackgroundGPS = () => {
  if (watcher) watcher.remove();
  watcher = null;
};
