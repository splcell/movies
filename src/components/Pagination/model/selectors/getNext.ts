import { StoreSchema } from "../../../../providers/StoreProvider/config/storeSchema";

export const getNext = (state: StoreSchema) => {
  return state.pagination.next
}