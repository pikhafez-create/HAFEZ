import { View } from 'react-native';

export default function Card({ children }: any) {
  return (
    <View style={{ backgroundColor:'#fff', padding:16, borderRadius:14, marginBottom:12, shadowColor:'#000', shadowOpacity:0.05, shadowRadius:10, elevation:2 }}>
      {children}
    </View>
  );
}
