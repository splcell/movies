import { ReactNode } from "react"
import { Provider } from "react-redux"

import { DeepPartial} from "@reduxjs/toolkit"
import { StoreSchema } from "providers/StoreProvider/config/storeSchema";
import { createReduxStore } from "providers/StoreProvider/config/store";

interface StoreProviderProps{
  children?: ReactNode,
  initialState?: DeepPartial<StoreSchema>
}

export function StoreProvider({children, initialState}: StoreProviderProps){
  
  const store = createReduxStore(initialState as StoreSchema) //создаем стор с помощью функции для создания стора, созданной в store.ts и прокидываем в него initialState для инициализации
  
  return(
      <Provider store={store}>
      {children}
      </Provider>
  )
}