import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "22b07923";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (title) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`
    );
    return response.data.Search;
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (id) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
    );
    return response.data;
  }
);
