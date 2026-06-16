import { Platform } from 'react-native';

export const registerForPush = async () => {
  if (Platform.OS === 'android') {
    console.log('Register FCM Android');
  }

  if (Platform.OS === 'ios') {
    console.log('Register FCM iOS');
  }
};

export const sendLocalNotification = (title:string, body:string) => {
  console.log('NOTIFY:', title, body);
};
