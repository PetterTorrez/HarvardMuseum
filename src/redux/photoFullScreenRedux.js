import { PHOTO_VISIBILITY_CHANGED } from './types';

const initialState = {
  isShowingPhoto: false,
};

function photoFullScreenRedux(state = initialState, action) {
  switch (action.type) {
    case PHOTO_VISIBILITY_CHANGED:
      return { ...state, isShowingPhoto: action.visibility };

    default:
      return state;
  }
}

export default photoFullScreenRedux;
