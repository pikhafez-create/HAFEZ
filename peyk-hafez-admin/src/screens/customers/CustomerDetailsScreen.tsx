import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CustomerDetailsScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← بازگشت</Text>
      </TouchableOpacity>

      <Text style={styles.title}>جزئیات مشتری</Text>

      <View style={styles.card}>
        <Text style={styles.label}>نام مشتری</Text>
        <Text style={styles.value}>محمد رضایی</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>شماره تماس</Text>
        <Text style={styles.value}>09123456789</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>آدرس</Text>
        <Text style={styles.value}>تهران - خیابان حافظ</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>تعداد سفارشات</Text>
        <Text style={styles.value}>24</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>آخرین سفارش</Text>
        <Text style={styles.value}>1405/03/20</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>وضعیت حساب</Text>
        <Text style={styles.active}>فعال</Text>
      </View>
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
  active: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '700',
    color: '#16A34A',
  },
});
