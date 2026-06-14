import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AdminDashboardScreen from '../screens/dashboard/AdminDashboardScreen';
import OrdersScreen from '../screens/orders/OrdersScreen';
import DriversScreen from '../screens/drivers/DriversScreen';
import CustomersScreen from '../screens/customers/CustomersScreen';
import FinanceDashboard from '../screens/finance/FinanceDashboard';

const Tab = createBottomTabNavigator();

export default function AdminTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={AdminDashboardScreen}
        options={{ title: 'داشبورد' }}
      />

      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{ title: 'سفارشات' }}
      />

      <Tab.Screen
        name="Drivers"
        component={DriversScreen}
        options={{ title: 'رانندگان' }}
      />

      <Tab.Screen
        name="Customers"
        component={CustomersScreen}
        options={{ title: 'مشتریان' }}
      />

      <Tab.Screen
        name="Finance"
        component={FinanceDashboard}
        options={{ title: 'مالی' }}
      />
    </Tab.Navigator>
  );
}
