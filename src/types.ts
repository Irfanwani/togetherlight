import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type NativeStackProps = {
  login: undefined;
  posts: undefined;
  postdetails: {item: PostType};
};

export type PostsProps = NativeStackScreenProps<NativeStackProps, 'posts'>;

export type PostDetailsProps = NativeStackScreenProps<
  NativeStackProps,
  'postdetails'
>;

export type CardProps = {
  title: string;
  body: string;
};

export type PostType = {
  body: string;
  id: number;
  title: string;
  userId: number;
};
