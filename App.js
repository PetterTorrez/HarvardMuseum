import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './src/AppRouter';
import type { Node } from 'react';
import configureStore from './src/store';
import PhotoFullScreen from './src/screens/PhotoFullScreen';

const App: () => Node = () => {
  return (
    <Provider store={configureStore}>
      <AppRouter />
      <PhotoFullScreen />
    </Provider>
  );
};

export default App;
