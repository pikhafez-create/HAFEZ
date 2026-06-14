import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CustomersScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>مدیریت مشتریان</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="جستجوی مشتری..."
        textAlign="right"
      />

      <View style={styles.customerCard}>
        <Text style={styles.customerName}>محمد رضایی</Text>
        <Text style={styles.info}>تلفن: 09123456789</Text>
        <Text style={styles.info}>تعداد سفارشات: 24</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CustomerDetails')}
        >
          <Text style={styles.buttonText}>مشاهده جزئیات</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.customerCard}>
        <Text style={styles.customerName}>علی کریمی</Text>
        <Text style={styles.info}>تلفن: 09129876543</Text>
        <Text style={styles.info}>تعداد سفارشات: 11</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CustomerDetails')}
        >
          <Text style={styles.buttonText}>مشاهده جزئیات</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'right',
    marginTop: 20,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    height: 54,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  customerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
  },
  customerName: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'right',
    marginBottom: 10,
  },
  info: {
    textAlign: 'right',
    marginBottom: 6,
  },
  button: {
    marginTop: 12,
    backgroundColor: '#0F6CBD',
    borderRadius: 12,
    padding: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
  },
});
