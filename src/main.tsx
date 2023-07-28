import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackProps} from './types';
import {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  memo,
  useState,
} from 'react';
import Login from './screens/login';
import PostDetails from './screens/postdetails';
import Posts from './screens/posts';

const Stack = createNativeStackNavigator<NativeStackProps>();

export const Context = createContext<{
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}>({loggedIn: false, setLoggedIn: () => {}});

const Main: FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Context.Provider value={{loggedIn, setLoggedIn}}>
      <NavigationContainer>
        <Stack.Navigator>
          {loggedIn ? (
            <Stack.Screen
              options={{headerShown: false}}
              name="login"
              component={Login}
            />
          ) : (
            <>
              <Stack.Screen
                options={{headerTitle: 'Posts'}}
                name="posts"
                component={Posts}
              />
              <Stack.Screen
                options={{headerTitle: 'Post Details'}}
                name="postdetails"
                component={PostDetails}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default memo(Main);
