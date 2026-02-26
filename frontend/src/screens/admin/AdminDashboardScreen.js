import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function AdminDashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <Text>- Manage users/providers</Text>
      <Text>- Manage categories/services</Text>
      <Text>- Monitor bookings & revenue</Text>
      <Text>- Analytics & reports</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 8 },
  title: { fontSize: 24, fontWeight: '700' }
});
