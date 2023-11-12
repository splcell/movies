import { StoreSchema } from "../../../../providers/StoreProvider/config/storeSchema";

export const getAdaptivePrev = (state: StoreSchema) => {
  return state.pagination.adaptivePrev
}