import { PHOTO_VISIBILITY_CHANGED } from '../actions/types';

const initialState = {
  isShowingPhoto: false,
};

const photoFullScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case PHOTO_VISIBILITY_CHANGED:
      return { ...state, isShowingPhoto: action.visibility };

    default:
      return initialState;
  }
};

export default photoFullScreenReducer;
