import { StoreSchema } from "providers/StoreProvider/config/storeSchema";
import { memoizedMovieInfo } from "./getMovieInfo";
import { DeepPartial } from "@reduxjs/toolkit";
import { getStatus } from "./getStatus";
import { getMovieInfoError } from "./getError";


describe('MovieInfo selectors test', () => {
  test('should return data', () => {
    
    const state: DeepPartial<StoreSchema> = {
      movieInfo: {
        movieInfo: {},
        status: 'idle',
        error: undefined
      },
    };

    const result = memoizedMovieInfo(state as StoreSchema);

    expect(result).toEqual(state.movieInfo?.movieInfo);
  });

  test('should return loading', () => {
    
    const state: DeepPartial<StoreSchema> = {
      movieInfo: {
        movieInfo: {},
        status: 'loading',
        error: undefined
      },
    };

    expect(getStatus(state as StoreSchema)).toEqual('loading');
  });

  test('should return error', () => {
    
    const state: DeepPartial<StoreSchema> = {
      movieInfo: {
        movieInfo: {},
        status: 'idle',
        error: 'error'
      },
    };

    expect(getMovieInfoError(state as StoreSchema)).toEqual('error');
  });
});