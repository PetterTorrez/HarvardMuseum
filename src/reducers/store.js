import { createStore, combineReducers } from 'redux';
import photoFullScreen from './photoFullScreen';
import gallery from './gallery';

const rootReducer = combineReducers({
  photoFullScreen,
  gallery,
});

const store = createStore(rootReducer);

export default store;
