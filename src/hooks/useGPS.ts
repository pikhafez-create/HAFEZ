import { useEffect } from 'react';
import { startGPS, stopGPS } from '../services/gps';

export const useGPS = (driverId: string) => {
  useEffect(() => {
    startGPS(driverId);
    return () => stopGPS();
  }, [driverId]);
};
