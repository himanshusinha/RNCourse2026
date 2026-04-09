import React, { useEffect, useState } from 'react';
import {
  Text,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

// Type definitions for user
type User = {
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
  address: {
    street: string;
    city: string;
  };
};

const UserDetails: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then((data: User) => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
    );
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  if (!user) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>User Details</Text>
      <Text style={styles.label}>
        Name: <Text style={styles.value}>{user.name}</Text>
      </Text>
      <Text style={styles.label}>
        Email: <Text style={styles.value}>{user.email}</Text>
      </Text>
      <Text style={styles.label}>
        Phone: <Text style={styles.value}>{user.phone}</Text>
      </Text>
      <Text style={styles.label}>
        Company: <Text style={styles.value}>{user.company.name}</Text>
      </Text>
      <Text style={styles.label}>
        Address:{' '}
        <Text style={styles.value}>
          {user.address.street}, {user.address.city}
        </Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  value: { fontWeight: 'normal' },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { color: 'red', fontSize: 16, textAlign: 'center', marginTop: 20 },
});

export default UserDetails;
