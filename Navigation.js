
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import Splash from './screens/splash';
import Signin from './screens/signin';
import Signup from './screens/signup';
import KaKaoLogin from './screens/kakaoLogin';
import Home from './screens/home';


const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="KaKaoLogin" component={KaKaoLogin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}

export default Navigation;  