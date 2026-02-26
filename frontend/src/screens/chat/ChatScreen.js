import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Realtime Chat</Text>
      <Text>Socket.IO chat room UI placeholder.</Text>
      {/* TODO: implement message list, input, typing indicators, delivery status. */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 10 }
});
