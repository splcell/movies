import { DeepPartial } from "@reduxjs/toolkit";
import { StoreSchema } from "providers/StoreProvider/config/storeSchema";
import { getPage } from "./getPage";
import { getNext } from "./getNext";
import { getPrev } from "./getPrev";
import { getAdaptiveNext } from "./getAdaptiveNext";
import { getAdaptivePrev } from "./getAdaptivePrev";

describe('Pagination selectors test', () => {
  test('should return page', () => {
    
    const state: DeepPartial<StoreSchema> = {
      pagination: {
        page: 1,
      }
    };

    expect(getPage(state as StoreSchema)).toEqual(1);
  });

  test('should return totalResults', () => {
    
    const state: DeepPartial<StoreSchema> = {
      pagination: {
        next: 10,
      }
    };

    expect(getNext(state as StoreSchema)).toEqual(10);
  });

  test('should return prev', () => {
    
    const state: DeepPartial<StoreSchema> = {
      pagination: {
        prev: 0,
      }
    };

    expect(getPrev(state as StoreSchema)).toEqual(0);
  });

  test('should return adaptiveNext', () => {
    
    const state: DeepPartial<StoreSchema> = {
      pagination: {
        adaptiveNext: 5,
      }
    };

    expect(getAdaptiveNext(state as StoreSchema)).toEqual(5);
  });

  test('should return adaptivePrev', () => {
    
    const state: DeepPartial<StoreSchema> = {
      pagination: {
        adaptivePrev: 0,
      }
    };

    expect(getAdaptivePrev(state as StoreSchema)).toEqual(0);
  });
})