import { Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "./config/routeConfig";
import { Preloader } from "../Preloader";


export function AppRouter(){
  return(
    <Suspense fallback={<Preloader />}>
      <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
      ))}
      </Routes>
    </Suspense>
  )
}