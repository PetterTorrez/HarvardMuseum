import {
  FAVORITE_UPDATED,
} from '../actions/types';

const initialState = {
  favorites: [],
};

function favorite(state = initialState, action) {
  switch (action.type) {
    case FAVORITE_UPDATED: {
      console.log(action);
      const favoriteFound = state.favorites.some((item) => item.id === action.data.id);
      if (favoriteFound) {
        return {
          ...state,
          favorites: state.favorites.filter((item) => item.id !== action.data.id),
        };
      }

      return { ...state, favorites: [...state.favorites, action.data] };
    }

    default: {
      return state;
    }
  }
}

export default favorite;
