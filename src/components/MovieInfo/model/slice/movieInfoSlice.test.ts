import { DeepPartial } from "@reduxjs/toolkit"
import { MovieInfoReducer, MovieInfoSliceSchema, getMovieInfo } from "./movieInfoSlice";

describe('movieInfoSliceTest', () => {
  const data = {
  "Title": "Star Wars: Episode IV - A New Hope",
  "Year": "1977",
  "Rated": "PG",
  "Released": "25 May 1977",
  "Runtime": "121 min",
  "Genre": "Action, Adventure, Fantasy",
  "Director": "George Lucas",
  "Writer": "George Lucas",
  "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher",
  "Plot": "The Imperial Forces, under orders from cruel Darth Vader, hold Princess Leia hostage in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker and Han Solo, captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 and C-3PO to rescue the beautiful princess, help the Rebel Alliance and restore freedom and justice to the Galaxy.",
  "Language": "English",
  "Country": "United States",
  "Awards": "Won 6 Oscars. 65 wins & 31 nominations total",
  }


  test("test getMovieInfo pending", () => {
    const state: DeepPartial<MovieInfoSliceSchema> = {
      status: 'idle',
      error: undefined,
      movieInfo: {}
    };
    expect(
      MovieInfoReducer(state as MovieInfoSliceSchema, getMovieInfo.pending)
    ).toEqual({ status: 'loading', error: undefined, movieInfo: {} });
  });

  test("test getMovieInfo fulfilled", () => {
    const state: DeepPartial<MovieInfoSliceSchema> = {
      status: 'loading',
      error: undefined,
      movieInfo: {}
    };
    expect(
      MovieInfoReducer(state as MovieInfoSliceSchema, getMovieInfo.fulfilled(data, '1', ''))
    ).toEqual({status: 'sucess', movieInfo: {...data},  error: undefined });
  });

  test("test getMovieInfo rejected", () => {
    const state: DeepPartial<MovieInfoSliceSchema> = {
      status: 'idle',
      movieInfo: {},
      error: undefined
    };
    expect(
      MovieInfoReducer(state as MovieInfoSliceSchema, getMovieInfo.rejected(new Error('error'), '', ''))
    ).toEqual({status: 'failed', movieInfo: {}, error: 'error'});
  });
})