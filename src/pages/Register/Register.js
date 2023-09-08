import React, { useState } from "react";
import image from "../../assets/images/Saly-10.svg";
import style from "./Register.module.css";
import { post } from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
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
      const register_reponse = await post("/register", data);
      // if (login_reponse.response === "Success") {
      //   await localStorage.setItem("token", login_reponse?.data?.token);
      // }
      console.log("response", register_reponse);
      setData({
        email: "",
        password: "",
        username: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRedirect = (url) => {
    navigate(`/${url}`);
  };

  return (
    <>
      <div className={style.main_div}>
        <div className={style.left_side}>
          <img src={image} alt="logo" />
          <p className={style.leftside_main_heading}>Lorem Ipsum is simply</p>
          <p className={style.leftside_sub_heading}>Lorem Ipsum is simply</p>
        </div>
        <div className={style.right_side}>
          <p className={style.nameText}>Welcome to lorem..!</p>
          <div className={style.login_regiter_switch}>
            <button
              className={style.login_page_btn}
              onClick={() => handleRedirect("login")}
            >
              Login
            </button>
            <button className={style.register_page_btn}>Register</button>
          </div>
          <div className={style.form_div}>
            <p>Email</p>
            <input
              placeholder="Enter your email address"
              value={data.email}
              onChange={handleChange}
              type="text"
              name="email"
            />
            <p>Username</p>
            <input
              placeholder="Enter your username"
              type="password"
              name="username"
              value={data.username}
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
            <p>Confirm Password</p>
            <input
              placeholder="Confirm your password"
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className={style.remember_forgotpass_div}>
            <div>
              <input type="checkbox" name="remember" value="yes" />
              <label for="vehicle1">Remember me</label>
            </div>
            <p>Forgot Password ?</p>
          </div>
          <br></br>
          <button className={style.submit_register_btn} onClick={handleSubmit}>
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
