import { StoreSchema } from "providers/StoreProvider/config/storeSchema";
import { memoizedMovieInfo } from "./getMovieInfo";
import { DeepPartial } from "@reduxjs/toolkit";

describe('memoizedMovieInfo selector', () => {
  test('should return the movieInfo from the state', () => {
    // Arrange
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
});