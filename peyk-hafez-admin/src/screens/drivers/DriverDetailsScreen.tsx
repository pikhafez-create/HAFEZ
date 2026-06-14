import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DriverDetailsScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← بازگشت</Text>
      </TouchableOpacity>

      <Text style={styles.title}>جزئیات راننده</Text>

      <View style={styles.card}>
        <Text style={styles.label}>نام راننده</Text>
        <Text style={styles.value}>علی احمدی</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>شماره تماس</Text>
        <Text style={styles.value}>09123456789</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>وضعیت</Text>
        <Text style={styles.online}>آنلاین و آماده ماموریت</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>امتیاز</Text>
        <Text style={styles.value}>4.9</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>تعداد ماموریت‌ها</Text>
        <Text style={styles.value}>128</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>موقعیت فعلی</Text>
        <Text style={styles.value}>نمایش روی نقشه (مرحله بعد)</Text>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>تخصیص به سفارش</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.buttonText}>مشاهده موقعیت زنده</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FA',
    padding: 16,
  },
  backButton: {
    marginTop: 16,
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'right',
    color: '#0F6CBD',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'right',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  label: {
    textAlign: 'right',
    color: '#6B7280',
    marginBottom: 6,
  },
  value: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '600',
  },
  online: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '700',
    color: '#16A34A',
  },
  primaryButton: {
    backgroundColor: '#0F6CBD',
    borderRadius: 14,
    padding: 16,
    marginTop: 12,
  },
  secondaryButton: {
    backgroundColor: '#16A34A',
    borderRadius: 14,
    padding: 16,
    marginTop: 12,
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
  },
});
