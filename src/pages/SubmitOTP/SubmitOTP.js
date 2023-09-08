import React from "react";
import style from "./SubmitOTP.module.css";
import image from "../../assets/images/Saly-10.png";

const SubmitOTP = () => {
  return (
    <div className={style.main_div}>
      <div className={style.left_side}>
        <img src={image} alt="logo" />
        <p className={style.leftside_main_heading}>Lorem Ipsum is simply</p>
        <p className={style.leftside_sub_heading}>Lorem Ipsum is simply</p>
      </div>
      <div className={style.right_side}>
        <p className={style.nameText}>Enter OTP</p>
        <p className={style.forgot_pass_subheading}>
          We have mailed you an OTP on your email address.
        </p>
        <div className={style.form_div}>
          <p>Email Address</p>
          <input placeholder="Enter your email address" />
        </div>
        <br></br>
        <button className={style.submit_register_btn}>Submit</button>
      </div>
    </div>
  );
};

export default SubmitOTP;
