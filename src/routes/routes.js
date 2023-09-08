// routes.js
import { Navigate } from "react-router-dom";
import Employee from "../pages/EmployeeList/Employee";
import EmployeeOnboard from "../pages/EmployeeOnboard/EmployeeOnboard";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SubmitOTP from "../pages/SubmitOTP/SubmitOTP";
import UpdatePassword from "../pages/UpdatePassword/UpdatePassword";

function PrivateRoute({ children }) {
  const auth = localStorage.getItem("token");
  return auth ? children : <Navigate to="/login" />;
}

function PublicRoute({ children }) {
  const auth = localStorage.getItem("token");
  return !auth ? children : <Navigate to="/" />;
}

const routes = [
  {
    path: "/",
    component: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
    isPrivate: false,
  },
  {
    path: "/login",
    component: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
    isPrivate: false,
  },
  {
    path: "/register",
    component: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
    isPrivate: false,
  },
  {
    path: "/forgot-password",
    component: (
      <PublicRoute>
        <ForgotPassword />
      </PublicRoute>
    ),
    isPrivate: false,
  },
  {
    path: "/submit-otp",
    component: (
      <PublicRoute>
        <SubmitOTP />
      </PublicRoute>
    ),
    isPrivate: false,
  },
  {
    path: "/update-password",
    component: (
      <PublicRoute>
        <UpdatePassword />
      </PublicRoute>
    ),
    isPrivate: false,
  },
  {
    path: "/employee-onboard",
    component: (
      <PrivateRoute>
        <EmployeeOnboard />
      </PrivateRoute>
    ),
    isPrivate: false,
  },
  {
    path: "/employee-list",
    component: (
      <PrivateRoute>
        <Employee />
      </PrivateRoute>
    ),
    isPrivate: false,
  },
];

export default routes;
