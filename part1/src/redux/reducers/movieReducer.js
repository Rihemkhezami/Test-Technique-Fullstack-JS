const initialState = {
    searchResults: [],
    movieDetails: {},
    allMovies: [], // Ajout de allMovies dans l'état initial
    error: null,
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_MOVIES_SUCCESS':
        return {
          ...state,
          searchResults: action.payload,
          error: null, // Réinitialisation de l'erreur après une recherche réussie
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
          error: null, // Réinitialisation de l'erreur après avoir obtenu les détails avec succès
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
          error: null, // Réinitialisation de l'erreur après avoir récupéré tous les films avec succès
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
  