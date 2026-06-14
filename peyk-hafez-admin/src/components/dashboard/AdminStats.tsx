import { View, Text } from 'react-native';

export default function AdminStats({ orders, drivers }: any) {
  const pending = orders.filter((o: any) => o.status === 'pending').length;
  const assigned = orders.filter((o: any) => o.status === 'assigned').length;
  const completed = orders.filter((o: any) => o.status === 'completed').length;

  const onlineDrivers = drivers.length;

  return (
    <View style={{ padding:12, backgroundColor:'#fff' }}>
      <Text>Pending: {pending}</Text>
      <Text>Assigned: {assigned}</Text>
      <Text>Completed: {completed}</Text>
      <Text>Drivers Online: {onlineDrivers}</Text>
    </View>
  );
}
