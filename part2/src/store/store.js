import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesReducer';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
