import { createStore, combineReducers } from 'redux';
import photoFullScreenReducer from '../reducers/photoFullScreenReducer';

const rootReducer = combineReducers({
  photoFullScreen: photoFullScreenReducer,
});

export default createStore(rootReducer);
