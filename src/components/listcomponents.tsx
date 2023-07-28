import {FC} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import {CardProps} from '../types';

export const ListEmpty: FC = () => {
  return <Text style={styles.empty}>Nothing to show!</Text>;
};

export const Card: FC<CardProps> = ({title, body}) => {
  return (
    <View style={styles.cardview}>
      <Text style={styles.cardtitle}>{title}</Text>
      <Text style={styles.cardbody}>{body}</Text>
    </View>
  );
};
