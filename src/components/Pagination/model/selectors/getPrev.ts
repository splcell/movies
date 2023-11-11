import { StoreSchema } from "../../../../providers/StoreProvider/config/storeSchema";

export const getPrev = (state: StoreSchema) => {
  return state.pagination.prev
}