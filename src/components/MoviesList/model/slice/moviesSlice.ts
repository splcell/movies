import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../types/movieListSchema";

export interface MoviesListSliceSchema {
  movies: Movie[];
  isLoading: boolean;
  totalResults: string;
  error: string | undefined;
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
      const response = await fetch(`https://www.omdbapi.com/?apikey=20d32d33&s=${query}&type=${type}&page=${page}&plot=full`)

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
  totalResults: "",
  isLoading: false,
  error: undefined,
};

const moviesListSlice = createSlice({
  name: 'moviesList',
  initialState,
  reducers: {
    changeMovies: (state, action) => {
      state.movies = action.payload
    },

    getTotalResults: (state, action) => {
      state.totalResults = action.payload;
    },

    cleanMovies: (state) => {
      state.movies = []
    },

    testChangeIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        (state.isLoading = true), (state.error = undefined);
      })

      .addCase(getAllMovies.fulfilled, (state) => {
        state.isLoading = false;
        state.error = undefined;
      })

      .addCase(getAllMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
})



export const { actions: MoviesListActions } = moviesListSlice;
export const { reducer: MovieListReducer } = moviesListSlice;
