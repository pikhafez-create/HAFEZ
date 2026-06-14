import { View, Text, TouchableOpacity } from 'react-native';

export default function OrderCard({ order, onAssign, drivers }: any) {
  return (
    <View style={{ padding:12, backgroundColor:'#f9f9f9', marginVertical:8, borderRadius:10 }}>
      <Text>Order: {order.id}</Text>
      <Text>Status: {order.status}</Text>

      {drivers.map((d: any) => (
        <TouchableOpacity key={d.id} onPress={() => onAssign(order.id, d.id)}>
          <Text style={{ color:'blue', marginTop:4 }}>Assign to {d.id}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
