import React, { useState } from "react";
import style from "./ForgotPassword.module.css";
import image from "../../assets/images/Saly-10.png";
import { useNavigate } from "react-router-dom";
import { post } from "../../utils/axios";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
    };

    try {
      const login_reponse = await post("/forgot-password", data);
      if (login_reponse.response === "Success") {
        navigate("/submit-otp");
      }
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
          <input
            placeholder="Enter your email address"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br></br>
        <button className={style.submit_register_btn} onClick={handleSubmit}>
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
