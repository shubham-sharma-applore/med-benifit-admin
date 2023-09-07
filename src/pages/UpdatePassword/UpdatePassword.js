import React from "react";
import style from "./UpdatePassword.module.css";
import image from "../../assets/images/Saly-10.svg";

const UpdatePassword = () => {
  return (
    <div className={style.main_div}>
      <div className={style.left_side}>
        <img src={image} alt="logo" />
        <p className={style.leftside_main_heading}>Lorem Ipsum is simply</p>
        <p className={style.leftside_sub_heading}>Lorem Ipsum is simply</p>
      </div>
      <div className={style.right_side}>
        <p className={style.nameText}>Create New Password</p>
        <p className={style.forgot_pass_subheading}>
          Your Password must be different from your <br />
          previous password
        </p>
        <div className={style.form_div}>
          <p>Enter new password</p>
          <input placeholder="Enter your password" />
          <p>Confirm password</p>
          <input placeholder="Enter your password" />
        </div>
        <br></br>
        <button className={style.submit_register_btn}>Reset Password</button>
      </div>
    </div>
  );
};

export default UpdatePassword;
