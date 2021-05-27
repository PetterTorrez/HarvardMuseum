import {
  GALLERIES_CLEANED,
  GALLERIES_LOADED,
} from '../actions/types';

const initialState = {
  galleryData: [],
};

function gallery(state = initialState, action) {
  switch (action.type) {
    case GALLERIES_LOADED:
      return { ...state, galleryData: [...state.galleryData, ...action.data] };

    case GALLERIES_CLEANED:
      return { ...state, galleryData: [] };

    default: {
      return state;
    }
  }
}

export default gallery;
