import { StoreSchema } from "../../../../providers/StoreProvider/config/storeSchema";

export const getError = (state: StoreSchema) => {
  return state.moviesList.error
}