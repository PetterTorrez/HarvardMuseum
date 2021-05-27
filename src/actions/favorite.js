import { FAVORITE_UPDATED } from './types';

export function updateFavoriteStatus(gallery) {
  return { data: gallery, type: FAVORITE_UPDATED };
}
