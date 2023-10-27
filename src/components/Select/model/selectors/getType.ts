import { StoreSchema } from "../../../../providers/StoreProvider/config/storeSchema";

export const getType = (state: StoreSchema) => {
  return state.select.type
}