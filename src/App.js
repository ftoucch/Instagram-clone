import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
import "./styles/tailwind.css";

const SignUp = lazy(() => import("./pages/sign-up"));
const Login = lazy(() => import("./pages/login"));
const NotFound = lazy(() => import("./pages/not-found"));
function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
