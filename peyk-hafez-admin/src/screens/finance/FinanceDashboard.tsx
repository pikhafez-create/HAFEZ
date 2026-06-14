import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function FinanceDashboard({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>داشبورد مالی</Text>

      <TouchableOpacity style={styles.card} onPress={() => alert('درآمد امروز')}>
        <Text style={styles.text}>درآمد امروز</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => alert('درآمد ماه')}>
        <Text style={styles.text}>درآمد ماه</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => alert('گزارش سفارشات')}>
        <Text style={styles.text}>گزارش سفارشات</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => alert('تسویه حساب')}>
        <Text style={styles.text}>تسویه حساب رانندگان</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F6FA', padding: 16 },
  title: { fontSize: 28, fontWeight: '800', textAlign: 'right', marginVertical: 20 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 14, marginBottom: 12 },
  text: { fontSize: 16, fontWeight: '600', textAlign: 'right' }
});
