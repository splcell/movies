import { createSlice } from "@reduxjs/toolkit";
import { PaginationSchema } from "../types/paginationSchema";

const initialState: PaginationSchema = {
  page: 1,
  prev: 0,
  next: 10,
  adaptivePrev: 0,
  adaptiveNext: 5,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
    removePage: (state) => {
      state.page = 1;
    },

    incrementNext: (state) => {
      state.next += 10;
    },

    incrementAdaptiveNext: (state) => {
      state.adaptiveNext += 5;
    },

    incrementPrev: (state) => {
      state.prev += 10;
    },

    incrementAdaptivePrev: (state) => {
      state.adaptivePrev += 5;
    },

    decrementNext: (state) => {
      state.next -= 10;
      if (state.next <= 10) {
        state.next = 10;
      }
    },

    decrementAdaptiveNext: (state) => {
      state.adaptiveNext -= 5;
    },

    decrementPrev: (state) => {
      state.prev -= 10;
      if (state.prev <= 0) {
        state.prev = 0;
      }
    },

    decrementAdaptivePrev: (state) => {
      state.adaptivePrev -= 5;
    },

    startEndNext: (state, action) => {
      state.next = action.payload;
    },

    startEndAdaptiveNext: (state, action) => {
      state.adaptiveNext = action.payload;
    },

    startEndPrev: (state, action) => {
      state.prev = action.payload;
    },

    startEndAdaptivePrev: (state, action) => {
      state.adaptivePrev = action.payload;
    },
  },
});

export const { actions: PaginationActions } = paginationSlice;
export const { reducer: PaginationReducer } = paginationSlice;
