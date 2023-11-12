import { StoreSchema } from "../../../../providers/StoreProvider/config/storeSchema";

export const getAdaptiveNext = (state: StoreSchema) => {
  return state.pagination.adaptiveNext
}