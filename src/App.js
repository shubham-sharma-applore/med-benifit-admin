import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import RouteConfig from "./routes/routes.Config";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  let isAuthenticated = localStorage.getItem("token");
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/register" element={<Register />} />
    // </Routes>
    <>
      <RouteConfig />
    </>
  );
}

export default App;
