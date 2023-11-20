import { DeepPartial } from "@reduxjs/toolkit";
import { StoreSchema } from "providers/StoreProvider/config/storeSchema";
import { getMovies } from "./getMovies";
import { getTotalResults } from "./getTotalResults";
import { getLoadingStatus } from "./getLoadingStatus";
import { getError } from "./getError";

describe('MoviesList selectors test', () => {
  test('should return movies', () => {
    
    const state: DeepPartial<StoreSchema> = {
      moviesList: {
        movies: [{Title: 'Terminator'}]
      }
    };

    expect(getMovies(state as StoreSchema)).toEqual([{"Title": "Terminator"}]);
  });

  test('should return totalResults', () => {
    
    const state: DeepPartial<StoreSchema> = {
      moviesList: {
        totalResults: '153'
      }
    };

    expect(getTotalResults(state as StoreSchema)).toEqual('153');
  });

  test('should return loadingStatus', () => {
    
    const state: DeepPartial<StoreSchema> = {
      moviesList: {
        isLoading: true 
      }
    };

    expect(getLoadingStatus(state as StoreSchema)).toEqual(true);
  });

  test('should return error', () => {
    
    const state: DeepPartial<StoreSchema> = {
      moviesList: {
        error: 'error'
      }
    };

    expect(getError(state as StoreSchema)).toEqual('error');
  });
})