import axios from 'axios';
import api from '../../api/api.js';

export const searchMovies = (query) => async (dispatch) => {
  try {
    const response = await api.get('', {
      params: {
        s: query,
      },
    });
    dispatch({ type: 'SEARCH_MOVIES_SUCCESS', payload: response.data.Search });
  } catch (error) {
    dispatch({ type: 'SEARCH_MOVIES_FAILURE', payload: error.message });
  }
};

export const getMovieDetails = (id) => async (dispatch) => {
  try {
    const response = await api.get('', {
      params: {
        i: id,
      },
    });
    dispatch({ type: 'GET_MOVIE_DETAILS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_MOVIE_DETAILS_FAILURE', payload: error.message });
  }
};


export const fetchAllMovies = () => async (dispatch) => {
  try {
    const response = await api.get('', {
      params: {
        s: '*', 
      },
    });
    dispatch({ type: 'FETCH_ALL_MOVIES_SUCCESS', payload: response.data.Search });
  } catch (error) {
    console.error('Erreur lors de la récupération de tous les films:', error);
    dispatch({ type: 'FETCH_ALL_MOVIES_FAILURE', payload: error.message });
  }
};

