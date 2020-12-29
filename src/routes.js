import { lazy } from "react";

const routes = [
  {
    path: "/",
    name: "HomePage",
    exact: true,
    component: lazy(() =>
      import("./views/HomePage" /* webpackChunkName: "HomePage" */)
    ),
  },
  {
    path: "/movies",
    name: "MoviesPage",
    exact: true,
    component: lazy(() =>
      import("./views/MoviesPage" /* webpackChunkName: "MoviesPage" */)
    ),
  },
  {
    path: "/movies/:movieId",
    name: "MovieDetailsPage",
    exact: false,
    component: lazy(() =>
      import("./views/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */)
    ),
  },
  {
    path: "/",
    name: "NotFound",
    exact: false,
    component: lazy(() =>
      import("./views/NotFound" /* webpackChunkName: "NotFound" */)
    ),
  },

];

export default routes;
