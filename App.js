import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import AppRouter from './src/AppRouter';
import type { Node } from 'react';
import configureStore from './src/store';

const App: () => Node = () => {
  return (
    <Provider store={configureStore}>
      <StatusBar backgroundColor="#ffffffff" barStyle="light-content" />
      <AppRouter />
    </Provider>
  );
};

export default App;
