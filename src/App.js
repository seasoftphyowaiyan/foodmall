import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ShopDetailPage from "./pages/shopDetailPage";
import { MENU_ROUTES } from "./routes/routes";
import PrivateRoute from "./components/privateRouteComponent/privateRouteComponent";

function App() {
  return (
    <div style={{ background: "#f5f5f5" }}>
      <Router>
        <Switch>
          {MENU_ROUTES.map((route, index) => {
            if (route.auth) {
              return (
                <PrivateRoute
                  key={index}
                  exact
                  path={route.path}
                  component={route.component}
                />
              );
            } else {
              return (
                <Route
                  key={index}
                  exact
                  path={route.path}
                  component={route.component}
                />
              );
            }
          })}
          <Route path="/shops/:id" component={ShopDetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
