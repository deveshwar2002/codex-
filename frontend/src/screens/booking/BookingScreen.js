import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from '../../components/PrimaryButton';

export function BookingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Service</Text>
      <Text>- Select provider</Text>
      <Text>- Select date/time slot</Text>
      <Text>- Apply promo code</Text>
      <Text>- Choose payment method (card/UPI/wallet)</Text>
      <PrimaryButton title="Confirm Booking" onPress={() => navigation.navigate('Chat')} />
      {/* TODO: load real availability and lock selected slot before payment. */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 10 },
  title: { fontSize: 24, fontWeight: '700' }
});
