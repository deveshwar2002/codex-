import React from 'react';
import { View, Text, TextInput, FlatList, Pressable, StyleSheet } from 'react-native';

const categories = ['Cleaning', 'Repairs', 'Beauty', 'Plumbing', 'Appliance Service'];

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Nearby Professionals</Text>
      <TextInput style={styles.input} placeholder="Search services..." />
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Pressable style={styles.card} onPress={() => navigation.navigate('Booking')}>
            <Text>{item}</Text>
          </Pressable>
        )}
      />
      {/* TODO: integrate map + geolocation permissions + filters (distance, price, rating). */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  sectionTitle: { marginVertical: 10, fontWeight: '600' },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12 },
  card: { backgroundColor: '#fff', padding: 14, borderRadius: 10, marginBottom: 10 }
});
