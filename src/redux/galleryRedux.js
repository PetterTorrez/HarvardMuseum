import { apiCall } from '../requests/request';

import { GALLERIES_LOADED } from './types';

export function getGallery(page) {
  return async () => {
    let response = [];
    const payload = await apiCall({ resource: 'image', params: { page, size: 20 } });

    if (payload.info && payload.records) {
      response = payload.records;
    }

    return response;
  };
}

const initialState = {
  galleryData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GALLERIES_LOADED: {
      return { ...state, galleryData: [...state.galleryData, ...action.data] };
    }

    default: {
      return state;
    }
  }
}
