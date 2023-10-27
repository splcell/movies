import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../types/movieListSchema";

export interface MoviesListSliceSchema {
  movies: Movie[];
  loadingMovies: Movie[];
  isLoading: boolean;
  totalResults: string;
  error: null;
}

export type Options = {
  page?: number | string;
  query?: string;
  type: string;
};

export const getAllMovies = createAsyncThunk<MoviesListSliceSchema, Options>(
  "moviesList/getAllMovies",
  async function({page=1, query, type}, thunkApi){
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=20d32d33&s=${query}&type=${type}&page=${page}&plot=full`)

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json()

      

      thunkApi.dispatch(
        MoviesListActions.changeMovies(data.Search)
      );
      
      thunkApi.dispatch(MoviesListActions.getTotalResults(data.totalResults));

      return data.Search


    } catch (error) {
      thunkApi.rejectWithValue(error)
    }
  }
);

const initialState: MoviesListSliceSchema = {
  movies: [],
  loadingMovies: [],
  totalResults: "",
  isLoading: false,
  error: null,
};

const moviesListSlice = createSlice({
  name: 'moviesList',
  initialState,
  reducers: {
    changeMovies: (state, action) => {
      const newMovies = action.payload.filter((movie: Movie) => {
        return !state.movies.find((m) => m.imdbID === movie.imdbID);
      });

      state.movies.push(...newMovies);
      // state.movies = action.payload
    },

    getTotalResults: (state, action) => {
      state.totalResults = action.payload;
    },

    cleanMovies: (state) => {
      state.movies = []
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        (state.isLoading = true), (state.error = null);
      })

      .addCase(getAllMovies.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })

      .addCase(getAllMovies.rejected, (state) => {
        state.isLoading = false;
        state.error = null;
      });
  },
})



export const { actions: MoviesListActions } = moviesListSlice;
export const { reducer: MovieListReducer } = moviesListSlice;
