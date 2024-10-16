import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

axios.defaults.headers['Authorization'] =
  'Client-ID OmCe1tSlZ_1mChUTz6j39H-12YCPUMQP2WlS5e8I3Bs';

export const getPhotosByName = async (name, page = 1) => {
  const response = await axios.get(`/search/photos?query=${name}&page=${page}`);
  return response.data;
};
