import {FC, memo, useContext, useState} from 'react';
import {Alert, Pressable, ScrollView, Text, TextInput} from 'react-native';
import {Context} from '../main';
import styles from '../styles';
import {LoginProps} from '../types';

const Login: FC<LoginProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setLoggedIn} = useContext(Context);

  const [error, setError] = useState('');

  const submit = () => {
    setError('');
    if (!username || !password) {
      setError('Please enter a valid username and password');
      return;
    }
    if (username !== 'Secret Username' || password !== 'secretpassword') {
      Alert.alert('Login failed!', 'Invalid credentials');
      return;
    }

    setLoggedIn(true);
    Alert.alert('Login successful!', 'Logged in successfully.');
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      automaticallyAdjustContentInsets
      contentContainerStyle={styles.wrapper}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholderTextColor={'#555'}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter Username"
        style={styles.input}
      />
      <TextInput
        placeholderTextColor={'#555'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"
        style={styles.input}
      />

      <Text style={styles.error}>{error}</Text>

      <Pressable style={styles.button} onPress={submit}>
        <Text style={styles.buttontext}>Login</Text>
      </Pressable>
    </ScrollView>
  );
};

export default memo(Login);
