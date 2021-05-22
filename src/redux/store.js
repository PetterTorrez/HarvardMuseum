import { createStore, combineReducers } from 'redux';
import photoFullScreenRedux from './photoFullScreenRedux';
import galleryRedux from './galleryRedux';

const rootReducer = combineReducers({
  photoFullScreenRedux,
  galleryRedux,
});

const store = createStore(rootReducer);

export default store;
