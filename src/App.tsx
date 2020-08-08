import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainScreen from './screens/MainScreen';
import ChatScreen from './screens/ChatScreen';

declare const global: {HermesInternal: null | {}};

const MainStack = createStackNavigator<MainParamList>();

interface Props {}

const App: React.FC<Props> = () => {
  axios.defaults.timeout = 10000;
  axios.defaults.headers.common.Accept = '*/*';

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <MainStack.Navigator headerMode={'none'}>
          <MainStack.Screen name={'LoginScreen'} component={LoginScreen} />
          <MainStack.Screen
            name={'RegisterScreen'}
            component={RegisterScreen}
          />
          <MainStack.Screen name={'MainScreen'} component={MainScreen} />
          <MainStack.Screen name={'ChatScreen'} component={ChatScreen} />
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
