import {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from '../styles';

const Loader: FC = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color='#cf09d1' />
    </View>
  );
};

export default Loader;
