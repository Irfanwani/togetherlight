import {FC, memo} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import {PostDetailsProps, PostType} from '../types';

const PostDetails: FC<PostDetailsProps> = ({route}) => {
  let {item} = route.params;
  return (
    <View style={styles.postpage}>
      {Object.keys(item).map((i: string, index: number) => (
        <View key={index} style={styles.detailrow}>
          <Text style={styles.detailtitle}>{i}: </Text>
          <Text style={styles.detailvalue}>{item[i as keyof PostType]}</Text>
        </View>
      ))}
    </View>
  );
};

export default memo(PostDetails);
