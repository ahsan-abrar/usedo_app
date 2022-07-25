import React from 'react';
import {Text} from 'react-native';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './Routes';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer initialRouteName={Routes.HOME}>
      <Stack.Navigator>
        <Stack.Screen name={Routes.HOME} component={HomeScreen} />
        <Stack.Screen name={Routes.DETAIL} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
