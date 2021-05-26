import { createStore, combineReducers } from 'redux';
import photoFullScreen from './photoFullScreen';
import gallery from './gallery';
import favorite from './favorite';

const rootReducer = combineReducers({
  favorite,
  gallery,
  photoFullScreen,
});

const store = createStore(rootReducer);

export default store;
