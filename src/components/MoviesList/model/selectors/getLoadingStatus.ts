import { StoreSchema } from "../../../../providers/StoreProvider/config/storeSchema";

export const getLoadingStatus = (state: StoreSchema) => {
  return state.moviesList.isLoading
}