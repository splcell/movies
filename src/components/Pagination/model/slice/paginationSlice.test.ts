import { DeepPartial } from "@reduxjs/toolkit"
import { PaginationSchema } from "../types/paginationSchema"
import { PaginationActions, PaginationReducer } from "./paginationSlice"

describe('PaginationSlice test', () => {
  test('decrementNext reducer test', () => {
    const state: DeepPartial<PaginationSchema> = {
      next: 20
    }

    expect(PaginationReducer(state as PaginationSchema, PaginationActions.decrementNext)).toEqual({next: 10})
  })

  test('incrementNext reducer test', () => {
    const state: DeepPartial<PaginationSchema> = {
      next: 10
    }

    expect(PaginationReducer(state as PaginationSchema, PaginationActions.incrementNext)).toEqual({next: 20})
  })

  test('decrementPrev reducer test', () => {
    const state: DeepPartial<PaginationSchema> = {
      prev: 20
    }

    expect(PaginationReducer(state as PaginationSchema, PaginationActions.decrementPrev)).toEqual({prev: 10})
  })

  test('incrementAdaptiveNext reducer test', () => {
    const state: DeepPartial<PaginationSchema> = {
      adaptiveNext: 5
    }

    expect(PaginationReducer(state as PaginationSchema, PaginationActions.incrementAdaptiveNext)).toEqual({adaptiveNext: 10})
  })

  test('decrementAdaptiveNext reducer test', () => {
    const state: DeepPartial<PaginationSchema> = {
      adaptiveNext: 5
    }

    expect(PaginationReducer(state as PaginationSchema, PaginationActions.decrementAdaptiveNext)).toEqual({adaptiveNext: 0})
  })

  test('incrementPrev reducer test', () => {
    const state: DeepPartial<PaginationSchema> = {
      prev: 10
    }

    expect(PaginationReducer(state as PaginationSchema, PaginationActions.incrementPrev)).toEqual({prev: 20})
  })

  test('incrementAdaptivePrev reducer test', () => {
    const state: DeepPartial<PaginationSchema> = {
      adaptivePrev: 5
    }

    expect(PaginationReducer(state as PaginationSchema, PaginationActions.incrementAdaptivePrev)).toEqual({adaptivePrev: 10})
  })

  test('decrementAdaptivePrev reducer test', () => {
    const state: DeepPartial<PaginationSchema> = {
      adaptivePrev: 5
    }

    expect(PaginationReducer(state as PaginationSchema, PaginationActions.decrementAdaptivePrev)).toEqual({adaptivePrev: 0})
  })

  test('changePage reducer test', () => {
    const state: DeepPartial<PaginationSchema> = {
      page: 1
    }

    expect(PaginationReducer(state as PaginationSchema, PaginationActions.changePage(5))).toEqual({page: 5})
  })

  test('removePage reducer test', () => {
    const state: DeepPartial<PaginationSchema> = {
      page: 5
    }

    expect(PaginationReducer(state as PaginationSchema, PaginationActions.removePage())).toEqual({page: 1})
  })

  
})