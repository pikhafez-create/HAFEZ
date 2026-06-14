import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/auth/LoginScreen';
import AdminDashboardScreen from '../screens/dashboard/AdminDashboardScreen';

import OrdersScreen from '../screens/orders/OrdersScreen';
import OrderDetailsScreen from '../screens/orders/OrderDetailsScreen';

import DriversScreen from '../screens/drivers/DriversScreen';
import DriverDetailsScreen from '../screens/drivers/DriverDetailsScreen';
import DriversMapScreen from '../screens/map/DriversMapScreen';

import CustomersScreen from '../screens/customers/CustomersScreen';
import CustomerDetailsScreen from '../screens/customers/CustomerDetailsScreen';

import FinanceDashboard from '../screens/finance/FinanceDashboard';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Dashboard' component={AdminDashboardScreen} />

        <Stack.Screen name='Orders' component={OrdersScreen} />
        <Stack.Screen name='OrderDetails' component={OrderDetailsScreen} />

        <Stack.Screen name='Drivers' component={DriversScreen} />
        <Stack.Screen name='DriverDetails' component={DriverDetailsScreen} />
        <Stack.Screen name='DriversMap' component={DriversMapScreen} />

        <Stack.Screen name='Customers' component={CustomersScreen} />
        <Stack.Screen name='CustomerDetails' component={CustomerDetailsScreen} />

        <Stack.Screen name='Finance' component={FinanceDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
