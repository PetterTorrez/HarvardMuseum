import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from './screens/GalleryScreen';

const Stack = createStackNavigator();

const AppRouter = () => (
  <NavigationContainer>
    <StatusBar backgroundColor="transparent" barStyle="light-content" />

    <Stack.Navigator
      initialRouteName={'Gallery'}>
      <Stack.Screen
        component={GalleryScreen} header
        name="Gallery"
        options={{ headerTitle: 'Harvard Museum' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppRouter;
