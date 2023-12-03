import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./reset.scss";
import "./index.css";
import { createReduxStore } from "./providers/StoreProvider/config/store.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Preloader } from "./components/Preloader/index.ts";

const store = createReduxStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/movies">
      <Provider store={store}>
        <Suspense fallback={<Preloader />}>
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
