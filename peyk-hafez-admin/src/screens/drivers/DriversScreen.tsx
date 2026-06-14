import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DriversScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>مدیریت رانندگان</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="جستجوی راننده..."
        textAlign="right"
      />

      <View style={styles.driverCard}>
        <View style={styles.statusRow}>
          <Text style={styles.online}>● آنلاین</Text>
          <Text style={styles.driverName}>علی احمدی</Text>
        </View>

        <Text style={styles.info}>وضعیت: آزاد</Text>
        <Text style={styles.info}>امتیاز: 4.9</Text>
        <Text style={styles.info}>ماموریت‌ها: 128</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DriverDetails')}
        >
          <Text style={styles.buttonText}>مشاهده جزئیات</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.driverCard}>
        <View style={styles.statusRow}>
          <Text style={styles.busy}>● مشغول</Text>
          <Text style={styles.driverName}>رضا کریمی</Text>
        </View>

        <Text style={styles.info}>وضعیت: در ماموریت</Text>
        <Text style={styles.info}>امتیاز: 4.8</Text>
        <Text style={styles.info}>ماموریت‌ها: 214</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DriverDetails')}
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
    paddingHorizontal: 16,
    height: 54,
    marginBottom: 16,
  },
  driverCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  driverName: {
    fontSize: 18,
    fontWeight: '700',
  },
  online: {
    color: '#16A34A',
    fontWeight: '700',
  },
  busy: {
    color: '#F59E0B',
    fontWeight: '700',
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
