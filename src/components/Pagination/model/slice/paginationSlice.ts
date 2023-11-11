import { createSlice } from "@reduxjs/toolkit"
import { PaginationSchema } from "../types/paginationSchema";

const initialState: PaginationSchema = {
  page: 1,
  prev: 0,
  next: 10
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload
    },
    removePage: (state) => {
      state.page = 1
    },

    incrementNext: (state) => {
      state.next += 10
    },

    incrementPrev: (state) => {
      state.prev += 10
    },

    decrementNext: (state) => {
      state.next -= 10
    },
    
    decrementPrev: (state) => {
      state.prev -= 10
    },

    startEndNext: (state, action) => {
      state.next = action.payload
    },

    startEndPrev: (state, action) => {
      state.prev = action.payload
    }
  }
})

export const { actions: PaginationActions } = paginationSlice;
export const { reducer: PaginationReducer } = paginationSlice;