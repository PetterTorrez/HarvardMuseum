import { PHOTO_VISIBILITY_CHANGED } from './types';

export function showPhoto({ visibility, gallery }) {
  return { type: PHOTO_VISIBILITY_CHANGED, visibility, gallery };
}

export function hidePhoto(visibility) {
  return { type: PHOTO_VISIBILITY_CHANGED, visibility };
}
