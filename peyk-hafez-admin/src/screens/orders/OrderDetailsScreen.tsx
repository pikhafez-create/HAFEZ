import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OrderDetailsScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← بازگشت</Text>
      </TouchableOpacity>

      <Text style={styles.title}>جزئیات سفارش</Text>

      <View style={styles.card}>
        <Text style={styles.label}>شماره سفارش</Text>
        <Text style={styles.value}>#1001</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>مشتری</Text>
        <Text style={styles.value}>محمد رضایی</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>شماره تماس</Text>
        <Text style={styles.value}>09123456789</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>آدرس مبدا</Text>
        <Text style={styles.value}>خیابان حافظ</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>آدرس مقصد</Text>
        <Text style={styles.value}>میدان آزادی</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>وضعیت سفارش</Text>
        <Text style={styles.status}>در انتظار تخصیص راننده</Text>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>تخصیص راننده</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.buttonText}>شروع ماموریت</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.successButton}>
        <Text style={styles.buttonText}>تحویل سفارش</Text>
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
    color: '#111827',
  },
  status: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '700',
    color: '#F59E0B',
  },
  primaryButton: {
    backgroundColor: '#0F6CBD',
    borderRadius: 14,
    padding: 16,
    marginTop: 12,
  },
  secondaryButton: {
    backgroundColor: '#6B7280',
    borderRadius: 14,
    padding: 16,
    marginTop: 12,
  },
  successButton: {
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
    fontSize: 16,
  },
});
