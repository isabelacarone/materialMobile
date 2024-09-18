import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const users = await AsyncStorage.getItem('users');
        if (users === null) {
          // Initialize with a default user if no users are stored
          const defaultUsers = JSON.stringify([{ username: 'admin', password: 'password' }]);
          await AsyncStorage.setItem('users', defaultUsers);
        }
      } catch (error) {
        console.error('Failed to load users', error);
      }
    };

    loadUsers();
  }, []);

  const handleLogin = async () => {
    try {
      const users = JSON.parse(await AsyncStorage.getItem('users'));
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        setMessage('Authentication Success. You\'re being redirected...');
        setUsername('');
        setPassword('');
      } else {
        setMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Failed to login', error);
    }
  };

  const handleAddUser = async () => {
    try {
      const users = JSON.parse(await AsyncStorage.getItem('users'));
      users.push({ username, password });
      await AsyncStorage.setItem('users', JSON.stringify(users));
      setMessage('User added successfully');
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Failed to add user', error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
        <Button title="Add User" onPress={handleAddUser} />
      </View>
      <View>
        {message !== '' ? (<Text>{message}</Text>) : (<Text></Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: 200,
  },
});
