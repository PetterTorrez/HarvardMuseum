const API_URL = 'https://api.harvardartmuseums.org/';
const API_KEY = '2034b742-2a58-4d95-a169-36e34a09e862';

const encodeGetParams = (parameter) => Object.entries(parameter)
  .map((value) => value.map(encodeURIComponent).join('=')).join('&');

export async function apiCall({ resource = '', params = {} }) {
  const pathEncoded = `${API_URL + resource}?${encodeGetParams({ ...params, apikey: API_KEY })}`;
  const response = await fetch(pathEncoded);
  return response.json();
}
