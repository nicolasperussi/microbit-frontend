import React from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import { isAuthenticated } from "./services/auth";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          element={
            <BypassAuth>
              <Authentication />
            </BypassAuth>
          }
        />
        <Route
          path="/"
          element={
            <>
              <RequireAuth>
                <Home />
              </RequireAuth>
            </>
          }
        />
        <Route
          path="/reports"
          element={
            <>
              <RequireAuth>
                <Reports />
              </RequireAuth>
            </>
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = isAuthenticated();

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function BypassAuth({ children }: { children: JSX.Element }) {
  let auth = isAuthenticated();

  if (auth) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default Routes;
