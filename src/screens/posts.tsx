import {FC, memo, useEffect, useState} from 'react';
import Loader from '../components/loader';
import {Alert, FlatList, Pressable, Text} from 'react-native';
import {Card, ListEmpty} from '../components/listcomponents';
import {PostType, PostsProps} from '../types';
import styles from '../styles';

const Posts: FC<PostsProps> = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  const [posts, setPosts] = useState([]);

  const fetchdata = async () => {
    try {
      setLoading(true);
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let finalresult = await response.json();
      setPosts(finalresult);
    } catch (err) {
      Alert.alert('Error!', 'There is some error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text onPress={fetchdata} style={styles.reload}>
          🔄
        </Text>
      ),
    });
    fetchdata();
  }, []);

  const renderItem = ({item}: {item: PostType}) => {
    const gotopd = () => {
      navigation.navigate('postdetails', {item});
    };
    return (
      <Pressable onPress={gotopd}>
        <Card title={item.title} body={item.body} />
      </Pressable>
    );
  };

  if (loading) return <Loader />;
  return (
    <FlatList
      refreshing={loading}
      onRefresh={fetchdata}
      data={posts}
      ListEmptyComponent={ListEmpty}
      renderItem={renderItem}
    />
  );
};

export default memo(Posts);
