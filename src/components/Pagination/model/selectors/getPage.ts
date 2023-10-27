import { StoreSchema } from "../../../../providers/StoreProvider/config/storeSchema";

export const getPage = (state: StoreSchema) => {
  return state.pagination.page
}