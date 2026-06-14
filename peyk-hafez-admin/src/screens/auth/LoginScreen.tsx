import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen({ navigation }: any) {

  const handleLogin = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../../../assets/logo/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>پیک حافظ</Text>
        <Text style={styles.subtitle}>سامانه مدیریت</Text>

        <TextInput
          style={styles.input}
          placeholder="نام کاربری"
          textAlign="right"
        />

        <TextInput
          style={styles.input}
          placeholder="رمز عبور"
          secureTextEntry
          textAlign="right"
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ورود به سامانه</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FA',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
  },
  logo: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginBottom: 12,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '800',
    color: '#111827',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6B7280',
    marginTop: 8,
    marginBottom: 28,
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 14,
    backgroundColor: '#FAFAFA',
  },
  button: {
    height: 56,
    borderRadius: 14,
    backgroundColor: '#0F6CBD',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
});
