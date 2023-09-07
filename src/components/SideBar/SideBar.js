import React from "react";
import style from "./SideBar.module.css";
import active from "../../assets/images/active.svg";
import active1 from "../../assets/images/active (1).svg";
import active2 from "../../assets/images/active (2).svg";

const SideBar = () => {
  return (
    <>
      <div className={style.sidebar_main_div}>
        <img src={active} alt="icon" />
        <img src={active1} alt="icon" />
        <img src={active2} alt="icon" />
      </div>
    </>
  );
};

export default SideBar;
