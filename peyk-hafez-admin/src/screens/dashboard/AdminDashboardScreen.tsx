import { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Stats = {
  pendingOrders: number;
  onlineDrivers: number;
  todayOrders: number;
  revenue: string;
};

const mockEngine = (): Stats => {
  return {
    pendingOrders: Math.floor(Math.random() * 20),
    onlineDrivers: Math.floor(Math.random() * 15),
    todayOrders: Math.floor(Math.random() * 60),
    revenue: (Math.floor(Math.random() * 10) + 1) + 'M'
  };
};

export default function AdminDashboardScreen({ navigation }: any) {

  const [stats, setStats] = useState<Stats>(mockEngine());
  const [loading, setLoading] = useState(false);
  const intervalRef = useRef<any>(null);

  const refresh = () => {
    setLoading(true);
    setTimeout(() => {
      setStats(mockEngine());
      setLoading(false);
    }, 250);
  };

  useEffect(() => {
    refresh();

    intervalRef.current = setInterval(() => {
      refresh();
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>پنل مدیریت پیک حافظ</Text>
        <Text style={styles.subtitle}>
          {loading ? 'Syncing live data...' : 'Live Engine Active'}
        </Text>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statCard}><Text style={styles.statNumber}>{stats.pendingOrders}</Text><Text style={styles.statLabel}>سفارشات در انتظار</Text></View>
        <View style={styles.statCard}><Text style={styles.statNumber}>{stats.onlineDrivers}</Text><Text style={styles.statLabel}>رانندگان آنلاین</Text></View>
        <View style={styles.statCard}><Text style={styles.statNumber}>{stats.todayOrders}</Text><Text style={styles.statLabel}>سفارشات امروز</Text></View>
        <View style={styles.statCard}><Text style={styles.statNumber}>{stats.revenue}</Text><Text style={styles.statLabel}>درآمد امروز</Text></View>
      </View>

      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Orders')}><Text style={styles.actionText}>مدیریت سفارشات</Text></TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Drivers')}><Text style={styles.actionText}>مدیریت رانندگان</Text></TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Customers')}><Text style={styles.actionText}>مدیریت مشتریان</Text></TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Finance')}><Text style={styles.actionText}>داشبورد مالی</Text></TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('DriversMap')}><Text style={styles.actionText}>نقشه رانندگان</Text></TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F6FA' },
  header: { backgroundColor: '#0F6CBD', padding: 24, paddingTop: 50, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  title: { color: '#FFFFFF', fontSize: 24, fontWeight: '800', textAlign: 'right' },
  subtitle: { marginTop: 8, textAlign: 'right' },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 16 },
  statCard: { width: '48%', backgroundColor: '#FFFFFF', borderRadius: 18, padding: 20, marginBottom: 14, alignItems: 'center' },
  statNumber: { fontSize: 28, fontWeight: '800', color: '#0F6CBD' },
  statLabel: { marginTop: 8, textAlign: 'center' },
  sectionTitle: { fontSize: 20, fontWeight: '700', textAlign: 'right', marginHorizontal: 16, marginBottom: 12 },
  actionButton: { backgroundColor: '#FFFFFF', marginHorizontal: 16, marginBottom: 12, borderRadius: 16, padding: 18 },
  actionText: { fontSize: 16, fontWeight: '600', textAlign: 'right' }
})
