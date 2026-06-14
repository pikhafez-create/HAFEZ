import { View } from 'react-native';

export default function Card({ children }: any) {
  return (
    <View style={{ backgroundColor:'#fff', padding:16, borderRadius:12, marginBottom:10 }}>
      {children}
    </View>
  );
}
