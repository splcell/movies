import { DeepPartial } from "@reduxjs/toolkit";
import { MovieListReducer, MoviesListActions, MoviesListSliceSchema, getAllMovies } from "./moviesSlice";

describe("moviesSlice test", () => {
  const data = {
    Poster: '',
    Title: 'Terminator',
    Type: 'movie',
    Year: '1987',
    imdbID: '',
  };

  test('changeMovies reducer test', () => {
    const state: DeepPartial<MoviesListSliceSchema> = {
      movies: []
    }

    expect(MovieListReducer(state as MoviesListSliceSchema, MoviesListActions.changeMovies([{...data}]))).toEqual({movies: [{...data}]})
  })

  test('getTotalResults reducer test', () => {
    const state: DeepPartial<MoviesListSliceSchema> = {
      totalResults: ''
    }

    expect(MovieListReducer(state as MoviesListSliceSchema, MoviesListActions.getTotalResults('156'))).toEqual({totalResults: '156'})
  })

  test('cleanMovies reducer test', () => {
    const state: DeepPartial<MoviesListSliceSchema> = {
      movies: [{...data}]
    }

    expect(MovieListReducer(state as MoviesListSliceSchema, MoviesListActions.cleanMovies())).toEqual({movies: []})
  })

  test("test getAllMovies pending", () => {
    const state: DeepPartial<MoviesListSliceSchema> = {
      movies: [],
      isLoading: false,
      totalResults: '',
      error: undefined
    };
    expect(
      MovieListReducer(state as MoviesListSliceSchema, getAllMovies.pending)
    ).toEqual({isLoading: true, movies: [], error: undefined, totalResults: ''});
  });

  test("test getAllMovies fulfilled", () => {
    const state: DeepPartial<MoviesListSliceSchema> = {
      isLoading: false,
      movies: [],
      error: undefined,
      totalResults: '1'
    };
    expect(
      MovieListReducer(state as MoviesListSliceSchema, getAllMovies.fulfilled({ 
        movies: [], 
        isLoading: false, 
        totalResults: '1', 
        error: undefined 
      }, '', {page: '1', query: 'terminator', type: 'movie'}))
    ).toEqual({isLoading: false, movies: [], error: undefined, totalResults: '1'});
  });

  test("test getAllMovies rejected", () => {
    const state: DeepPartial<MoviesListSliceSchema> = {
      isLoading: false,
      movies: [],
      totalResults: '',
      error: undefined
    };
    expect(
      MovieListReducer(state as MoviesListSliceSchema, getAllMovies.rejected(new Error('error'), '', {page: '1', query: 'terminator', type: 'movie'}))
    ).toEqual({isLoading: false, movies: [], error: 'error', totalResults: ''});
  });
});
