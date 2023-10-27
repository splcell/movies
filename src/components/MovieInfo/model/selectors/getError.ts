import { StoreSchema } from "../../../../providers/StoreProvider/config/storeSchema";

export const getMovieInfoError = (state: StoreSchema) => {
  return state.movieInfo.error
}