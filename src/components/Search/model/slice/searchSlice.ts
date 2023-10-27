import { createSlice } from "@reduxjs/toolkit"
import { SearchSchema } from "../types/searchSchema";

const initialState: SearchSchema = {
  value: 'star_wars'
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { actions: SearchActions } = searchSlice;
export const { reducer: SearchReducer } = searchSlice;