import { lazy } from "react";

const additionalRoutes = [
  {
    path: "/movies/:movieId/cast",
    name: "Cast",
    exact: true,
    component: lazy(() =>
      import("./components/Cast/Cast" /* webpackChunkName: "Cast" */)
    ),
  },
  {
    path: "/movies/:movieId/reviews",
    name: "Reviews",
    exact: true,
    component: lazy(() =>
      import("./components/Reviews/Reviews" /* webpackChunkName: "Reviews" */)
    ),
  },
 
];

export default additionalRoutes;