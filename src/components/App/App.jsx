import React, { Suspense } from "react";
import Layout from "../Layout/Layout.jsx";
import { Switch, Route } from "react-router-dom";

import Loader from "../Loader/Loader";
import additionalRoutes from '../../additionalRoutes'
import routes from "../../routes";

const App = () => (
  <Layout>
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
      {additionalRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
    </Suspense>
  </Layout>
);

export default App;
