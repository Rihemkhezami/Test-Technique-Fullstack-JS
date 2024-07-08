import axios from "axios";

const API_KEY = '22b07923'; 
const BASE_URL = 'http://www.omdbapi.com/';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
});

export const getMovieDetails = async (id) => {
  try {
    const response = await api.get('', {
      params: {
        i: id,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch movie details:', error);
    throw error;
  }
};

export default api;
