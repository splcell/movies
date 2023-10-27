import { createSlice } from "@reduxjs/toolkit"
import { PaginationSchema } from "../types/paginationSchema";

const initialState: PaginationSchema = {
  page: 1
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changePage: (state) => {
      state.page += 1
    },
    removePage: (state) => {
      state.page = 1
    }
  }
})

export const { actions: PaginationActions } = paginationSlice;
export const { reducer: PaginationReducer } = paginationSlice;