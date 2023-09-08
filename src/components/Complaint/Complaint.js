import React from "react";
import style from "./Complaint.module.css";
import image from "../../assets/images/injury-amico 1.svg";

const Complaint = () => {
  return (
    <>
      <div className={style.main_div}>
        <div className={style.secondary_div}>
          <p className={style.main_heading}>Hi Roman Johanson,</p>
          <p className={style.main_sub_heading}>
            What do you want to do today?
          </p>
          <p className={style.main_sub_heading_1}>
            Membership Number : 7654456789
          </p>

          <button className={style.raise_complaint_btn}>
            Raise a complaint
          </button>
        </div>
        <div>
          <img src={image} alt="icon" className={style.image_css}/>
        </div>
      </div>
    </>
  );
};

export default Complaint;
