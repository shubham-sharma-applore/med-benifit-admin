import React, { useState } from "react";
import style from "./Login.module.css";
import image from "../../assets/images/Saly-10.png";
import { post } from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const login_reponse = await post("/login", data);
      if (login_reponse.response === "Success") {
        localStorage.setItem("token", login_reponse?.data?.token);
        navigate("/");
      }
      setData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRedirect = (url) => {
    navigate(`/${url}`);
  };

  return (
    <div className={style.main_div}>
      <div className={style.main_content_div}>
        <div className={style.left_side}>
          <img src={image} alt="logo" />
          <p className={style.leftside_main_heading}>Lorem Ipsum is simply</p>
          <p className={style.leftside_sub_heading}>Lorem Ipsum is simply</p>
        </div>
        <div className={style.right_side}>
          <p className={style.nameText}>Welcome to lorem..!</p>
          <div className={style.login_regiter_switch}>
            <button className={style.login_page_btn}>Login</button>
            <button
              className={style.register_page_btn}
              onClick={() => handleRedirect("register")}
            >
              Register
            </button>
          </div>
          <div className={style.form_div}>
            <p>Email</p>
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              value={data.email}
              onChange={handleChange}
            />
            <p>Password</p>
            <input
              placeholder="Enter your password"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div className={style.remember_forgotpass_div}>
            <div>
              <input type="checkbox" name="remember" value="yes" />
              <label for="vehicle1">Remember me</label>
            </div>
            <p onClick={() => handleRedirect("forgot-password")}>
              Forgot Password ?
            </p>
          </div>
          <br></br>
          <button className={style.submit_register_btn} onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
