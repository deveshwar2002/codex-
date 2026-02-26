import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile & Service History</Text>
      <Text>- Personal details</Text>
      <Text>- Saved addresses</Text>
      <Text>- Booking history</Text>
      <Text>- Payment history</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 8 },
  title: { fontSize: 24, fontWeight: '700' }
});
