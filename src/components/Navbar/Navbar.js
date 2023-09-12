import React from "react";
import style from "./Navbar.module.css";
import profile_pic from "../../assets/images/51.svg";
import dropdown_icon from "../../assets/images/Icon Color.svg";

const Navbar = () => {
  return (
    <div className={style.navbar_main_div}>
      <div className={style.profile_pic_div}>
        <img
          src={profile_pic}
          alt="Profile Pic"
          className={style.profile_pic_css}
        />
        <p>Admin</p>
        <img src={dropdown_icon} alt="dropdown" className={style.dropdown_icon_css}/>
      </div>
    </div>
  );
};

export default Navbar;
