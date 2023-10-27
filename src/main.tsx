import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './reset.scss'
import './index.css'
import { createReduxStore } from './providers/StoreProvider/config/store.ts'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

const store = createReduxStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={'Loading...'}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>,
)
