import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CustomerDashboard from '../screens/CustomerDashboard';
import LiveTracking from '../screens/map/LiveTracking';

const Stack = createNativeStackNavigator();

export default function CustomerNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Dashboard' component={CustomerDashboard} />
        <Stack.Screen name='Tracking' component={LiveTracking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
