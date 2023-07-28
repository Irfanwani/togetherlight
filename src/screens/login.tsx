import {FC, memo, useContext, useState} from 'react';
import {
  Alert,
  Platform,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../main';
import styles from '../styles';

const Login: FC = () => {
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
    if (Platform.OS == 'ios') {
      Alert.alert('Login successful!', 'Logged in successfully.');
    } else {
      ToastAndroid.show('Login Successful', 500);
    }
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

      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default memo(Login);
