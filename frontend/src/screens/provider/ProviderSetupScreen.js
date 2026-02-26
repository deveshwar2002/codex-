import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function ProviderSetupScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Provider Profile Setup</Text>
      <Text>- KYC details</Text>
      <Text>- Skills & categories</Text>
      <Text>- Experience and pricing</Text>
      <Text>- Service area radius and live availability</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 8 },
  title: { fontSize: 24, fontWeight: '700' }
});
