import { DUMMY_TYPE } from '../actions/types';

const initialState = {
  dummyData: null,
};

const dummyReducer = (state = initialState, action) => {
  switch (action.type) {
    case DUMMY_TYPE:
      return { ...state, dummyData: [] };

    default:
      return initialState;
  }
};

export default dummyReducer;
