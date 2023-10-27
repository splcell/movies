import { StoreSchema } from "../../../../providers/StoreProvider/config/storeSchema";

export const getMovies = (state: StoreSchema) => {
  return state.moviesList.movies
}