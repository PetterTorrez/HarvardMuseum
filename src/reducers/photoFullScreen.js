import { PHOTO_VISIBILITY_CHANGED } from '../actions/types';

const initialState = {
  isShowingPhoto: false,
  gallery: null,
};

function photoFullScreen(state = initialState, action) {
  switch (action.type) {
    case PHOTO_VISIBILITY_CHANGED:
      return { ...state, isShowingPhoto: action.visibility, gallery: action.gallery };

    default:
      return state;
  }
}

export default photoFullScreen;
