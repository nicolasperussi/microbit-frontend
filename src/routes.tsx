import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import Authentication from "./pages/Authentication";
import Classes from "./pages/Classes";
import ComputingClasses from "./pages/Classes/Computing";
import EnglishClasses from "./pages/Classes/English";
import Courses from "./pages/Courses";
import ComputingCourse from "./pages/Courses/Computing";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Students from "./pages/Students";
import { isAuthenticated } from "./services/auth";

const Routes = () => {
  return (
    <Router>
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
          path="/home"
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
        <Route
          path="/students"
          element={
            <>
              <RequireAuth>
                <Students />
              </RequireAuth>
            </>
          }
        />
        <Route
          path="/courses"
          element={
            <>
              <RequireAuth>
                <Courses />
              </RequireAuth>
            </>
          }
        />
        <Route
          path="/courses/computing"
          element={
            <>
              <RequireAuth>
                <ComputingCourse />
              </RequireAuth>
            </>
          }
        />
        <Route
          path="/classes"
          element={
            <>
              <RequireAuth>
                <Classes />
              </RequireAuth>
            </>
          }
        />
        <Route
          path="/classes/english"
          element={
            <>
              <RequireAuth>
                <EnglishClasses />
              </RequireAuth>
            </>
          }
        />
        <Route
          path="/classes/computing"
          element={
            <>
              <RequireAuth>
                <ComputingClasses />
              </RequireAuth>
            </>
          }
        />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Switch>
    </Router>
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
