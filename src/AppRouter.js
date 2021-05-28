import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
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
        component={GalleryScreen}
        name="Gallery"
        options={{
          headerTitle: 'Harvard Museum',
          headerStyle: styles.headerStyle,
          headerTintColor: 'white',
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#444',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});

export default AppRouter;
