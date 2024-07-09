const initialState = {
    searchResults: [],
    movieDetails: {},
    allMovies: [], 
    error: null,
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_MOVIES_SUCCESS':
        return {
          ...state,
          searchResults: action.payload,
          error: null,
        };
      case 'SEARCH_MOVIES_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      case 'GET_MOVIE_DETAILS_SUCCESS':
        return {
          ...state,
          movieDetails: action.payload,
          error: null, 
        };
      case 'GET_MOVIE_DETAILS_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      case 'FETCH_ALL_MOVIES_SUCCESS':
        return {
          ...state,
          allMovies: action.payload,
          error: null, 
        };
      case 'FETCH_ALL_MOVIES_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  