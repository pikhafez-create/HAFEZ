import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DriverHomeScreen from '../screens/DriverHomeScreen';
import OrdersScreen from '../screens/OrdersScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={DriverHomeScreen} />
        <Stack.Screen name='Orders' component={OrdersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
