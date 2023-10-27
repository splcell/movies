import { createSlice } from "@reduxjs/toolkit"
import { SelectSchema } from "../types/selectSchema";

const initialState: SelectSchema = {
  type: ''
}

const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    changeType: (state, action) => {
      state.type = action.payload
    }
  }
})

export const { actions: SelectActions } = selectSlice;
export const { reducer: SelectReducer } = selectSlice;