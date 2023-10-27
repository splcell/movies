import { StoreSchema } from "../../../../providers/StoreProvider/config/storeSchema";

export const getValue = (state: StoreSchema) => {
  return state.search.value
}