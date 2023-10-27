import { createSelector } from "@reduxjs/toolkit";
import { StoreSchema } from "../../../../providers/StoreProvider/config/storeSchema";

const getMovieInfo = (state: StoreSchema) => state.movieInfo.movieInfo

export const memoizedMovieInfo = createSelector(getMovieInfo, (movieInfo) => movieInfo)