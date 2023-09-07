import React from "react";
import style from "./ForgotPassword.module.css";
import image from "../../assets/images/Saly-10.svg";

const ForgotPassword = () => {
  return (
    <div className={style.main_div}>
      <div className={style.left_side}>
        <img src={image} alt="logo" />
        <p className={style.leftside_main_heading}>Lorem Ipsum is simply</p>
        <p className={style.leftside_sub_heading}>Lorem Ipsum is simply</p>
      </div>
      <div className={style.right_side}>
        <p className={style.nameText}>Forgot Password</p>
        <p className={style.forgot_pass_subheading}>
          Enter your email address and we’ll send you an OTP <br />
          on mail to reset your password
        </p>
        <div className={style.form_div}>
          <p>Email Address</p>
          <input placeholder="Enter your email address" />
        </div>
        <br></br>
        <button className={style.submit_register_btn}>Send OTP</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
