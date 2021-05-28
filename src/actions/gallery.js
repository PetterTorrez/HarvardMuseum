import { apiCall } from '../requests/request';
import {
  GALLERIES_CLEANED,
  GALLERIES_LOADED,
} from './types';

export function getGallery(page) {
  return async () => {
    let response = [];
    const payload = await apiCall({
      resource: 'image',
      params: {
        page,
        size: 30,
        sort: 'id',
        sortorder: 'asc',
      },
    });

    if (payload.info && payload.records) {
      response = payload.records;
    }

    return response;
  };
}

export function setGalleries(galleries) {
  return { data: galleries, type: GALLERIES_LOADED };
}

export function clearGalleries() {
  return { type: GALLERIES_CLEANED };
}
