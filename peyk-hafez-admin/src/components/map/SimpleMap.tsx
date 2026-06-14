import { View, Text } from 'react-native';

export default function SimpleMap({ drivers }: any) {
  return (
    <View style={{ flex:1, backgroundColor:'#eef', padding:12 }}>
      <Text>Map View</Text>
      {drivers.map((d: any) => (
        <View key={d.id} style={{ marginTop:8, padding:8, backgroundColor:'#fff' }}>
          <Text>ID: {d.id}</Text>
          <Text>Lat: {d.lat}</Text>
          <Text>Lng: {d.lng}</Text>
        </View>
      ))}
    </View>
  );
}
