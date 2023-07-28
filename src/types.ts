import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type NativeStackProps = {
  login: undefined;
  posts: undefined;
  postdetails: undefined;
};

export type LoginProps = NativeStackScreenProps<NativeStackProps, 'login'>;
