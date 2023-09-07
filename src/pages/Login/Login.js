import React from "react";
import style from "./Login.module.css";
import image from "../../assets/images/Saly-10.svg";

const Login = () => {
  return (
    <div className={style.main_div}>
      <div className={style.left_side}>
        <img src={image} alt="logo" />
        <p className={style.leftside_main_heading}>Lorem Ipsum is simply</p>
        <p className={style.leftside_sub_heading}>Lorem Ipsum is simply</p>
      </div>
      <div className={style.right_side}>
        <p className={style.nameText}>Welcome to lorem..!</p>
        <div className={style.login_regiter_switch}>
          <button className={style.login_page_btn}>Login</button>
          <button className={style.register_page_btn}>Register</button>
        </div>
        <div className={style.form_div}>
          <p>Email</p>
          <input placeholder="Enter your email address" />
          <p>Password</p>
          <input placeholder="Enter your password" />
        </div>
        <div className={style.remember_forgotpass_div}>
          <div>
            <input type="checkbox" name="remember" value="yes" />
            <label for="vehicle1">Remember me</label>
          </div>
          <p>Forgot Password ?</p>
        </div>
        <br></br>
        <button className={style.submit_register_btn}>Login</button>
      </div>
    </div>
  );
};

export default Login;
