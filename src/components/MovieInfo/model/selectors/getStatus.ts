import { StoreSchema } from "../../../../providers/StoreProvider/config/storeSchema";

export const getStatus = (state: StoreSchema) => {
  return state.movieInfo.status
}