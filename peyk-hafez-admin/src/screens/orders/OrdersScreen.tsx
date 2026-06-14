import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchOrders } from '../../services/orders';

export default function OrdersScreen() {
  const navigation = useNavigation<any>();
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const data = await fetchOrders();
      setOrders(data || []);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>مدیریت سفارشات</Text>

      {orders.map((order) => (
        <View key={order.id} style={styles.orderCard}>
          <Text style={styles.orderTitle}>سفارش #{order.id}</Text>
          <Text style={styles.orderInfo}>مشتری: {order.customer_name}</Text>
          <Text style={styles.orderInfo}>مبدا: {order.origin}</Text>
          <Text style={styles.orderInfo}>مقصد: {order.destination}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('OrderDetails', { id: order.id })}
          >
            <Text style={styles.buttonText}>جزئیات</Text>
          </TouchableOpacity>
        </View>
      ))}
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
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  orderTitle: {
    fontWeight: '800',
    marginBottom: 8,
    textAlign: 'right',
  },
  orderInfo: {
    textAlign: 'right',
    marginBottom: 4,
  },
  button: {
    marginTop: 12,
    backgroundColor: '#0F6CBD',
    padding: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
  },
});
