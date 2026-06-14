import { View, Text, TouchableOpacity } from 'react-native';

export default function DriverCard({ driver, onSelect }: any) {
  return (
    <TouchableOpacity onPress={() => onSelect(driver.id)}>
      <View style={{ padding:12, backgroundColor:'#fff', marginVertical:6, borderRadius:10 }}>
        <Text>Driver: {driver.id}</Text>
        <Text>Status: {driver.status || 'online'}</Text>
      </View>
    </TouchableOpacity>
  );
}
