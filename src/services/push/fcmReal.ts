import * as Notifications from 'expo-notifications';

export const registerFCM = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') return;

  const token = await Notifications.getExpoPushTokenAsync();
  return token;
};
