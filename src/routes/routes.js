// routes.js
import Employee from "../pages/EmployeeList/Employee";
import EmployeeOnboard from "../pages/EmployeeOnboard/EmployeeOnboard";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SubmitOTP from "../pages/SubmitOTP/SubmitOTP";
import UpdatePassword from "../pages/UpdatePassword/UpdatePassword";

const routes = [
  { path: "/", component: <Home />, isPrivate: false },
  { path: "/login", component: <Login />, isPrivate: false },
  { path: "/register", component: <Register />, isPrivate: false },
  { path: "/forgot-password", component: <ForgotPassword />, isPrivate: false },
  { path: "/submit-otp", component: <SubmitOTP />, isPrivate: false },
  { path: "/update-password", component: <UpdatePassword />, isPrivate: false },
  { path: "/employee-onboard", component: <EmployeeOnboard />, isPrivate: false },
  { path: "/employee-list", component: <Employee />, isPrivate: false },
];

export default routes;
