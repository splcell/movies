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
  <Suspense fallback={<Preloader />}>
    <BrowserRouter basename="/">
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
   </Suspense>
);
