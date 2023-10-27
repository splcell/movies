import { StoreSchema } from "../../../../providers/StoreProvider/config/storeSchema";

export const getTotalResults = (state: StoreSchema) => {
  return state.moviesList.totalResults
}