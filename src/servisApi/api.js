import axios from 'axios';
const BASE_URL = `https://api.themoviedb.org/3`;
const KEY_API = 'bcf494ba38cb83576e131fd3ae18b8ee';

axios.defaults.baseURL = BASE_URL;

export const dataMovies = async (time_window = 'day') => {
  try {
    const response = await axios.get(`/trending/movie/${time_window}`, {
      params: {
        api_key: KEY_API,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const dataSearch = async queryValue => {
  try {
    const response = await axios.get(`/search/movie`, {
      params: {
        api_key: KEY_API,
        query: queryValue,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const dataDetails = async movie_id => {
  try {
    const response = await axios.get(`/movie/${movie_id}`, {
      params: {
        api_key: KEY_API,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const dataCast = async movie_id => {
  try {
    const response = await axios.get(`/movie/${movie_id}/credits`, {
      params: {
        api_key: KEY_API,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const dataReviews = async movie_id => {
  try {
    const response = await axios.get(`/movie/${movie_id}/reviews`, {
      params: {
        api_key: KEY_API,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
