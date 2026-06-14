import MapView, { Marker, Polyline } from 'react-native-maps';
import { View, Text } from 'react-native';
import { calculateDistance } from '../../utils/distance';

export default function RealMap({ drivers }: any) {
  const coords = drivers
    .filter((d: any) => d.lat && d.lng)
    .map((d: any) => ({ latitude: d.lat, longitude: d.lng }));

  const eta = coords.length > 1
    ? calculateDistance(
        coords[0].latitude,
        coords[0].longitude,
        coords[coords.length - 1].latitude,
        coords[coords.length - 1].longitude
      )
    : 0;

  return (
    <View style={{ flex:1 }}>
      <Text style={{ padding:8 }}>ETA: {eta.toFixed(2)} km</Text>
      <MapView
        style={{ flex:1 }}
        initialRegion={{
          latitude: 35.6892,
          longitude: 51.3890,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}
      >
        {drivers.map((d: any) => (
          <Marker
            key={d.id}
            coordinate={{ latitude: d.lat || 0, longitude: d.lng || 0 }}
          />
        ))}

        {coords.length > 1 && (
          <Polyline coordinates={coords} strokeWidth={4} />
        )}
      </MapView>
    </View>
  );
}
