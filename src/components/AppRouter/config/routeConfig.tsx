import { RouteProps } from "react-router-dom"
import { Main } from "../../../pages/Main"
import { MoviePage } from "../../../pages/Movie"
import { NotFoundPage } from "../../../pages/NotFoundPage"


export enum AppRoutes{
  MAIN = 'main',
  MOVIE = 'movie',
  NOT_FOUND = 'notfound'
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.MOVIE]: '/movie/:id',
  [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <Main />
  },

  [AppRoutes.MOVIE]: {
    path: RoutesPath.movie,
    element: <MoviePage />
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutesPath.notfound,
    element: <NotFoundPage />
  }
}