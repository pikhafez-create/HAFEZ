import { useEffect } from 'react';
import { startBackgroundGPS } from '../services/gps/background';
import { sendLocalNotification } from '../services/push/fcm';

export const useDriverProduction = (driverId:string) => {
  useEffect(() => {

    startBackgroundGPS(async (loc:any) => {
      console.log('GPS:', loc.coords.latitude, loc.coords.longitude);
    });

    sendLocalNotification('Driver Active','Tracking started');

  }, []);
};
