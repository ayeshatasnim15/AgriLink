import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const UsersListScreen = ({ navigation }) => {
  const [users, setUsers] = useState([
    { id: '1', name: 'Ayesha Tasnim', email: 'ayesha200315@gmail.com', role: 'Farmer' },
    { id: '2', name: 'Kripa Kumari Tharu', email: 'kripalolo@gmail.com', role: 'Virtual Gardener' },
    { id: '3', name: 'Anurag Kumar', email: 'iterboss@gmail.com', role: 'Farmer' },
    { id: '4', name: 'Aditi Kumari', email: 'aditiaditi@noobmail.com', role: 'Virtual Gardener'},
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.userCard}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.details}>📧 {item.email}</Text>
      <Text style={styles.details}>🧑‍🌾 Role: {item.role}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👥 Registered Users</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  userCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#66BB6A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  details: {
    fontSize: 15,
    color: '#444',
    marginTop: 4,
  },
  backButton: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: '#2E7D32',
  },
});

export default UsersListScreen;
