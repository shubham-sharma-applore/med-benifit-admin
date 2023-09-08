import React from "react";
import style from "./SideBar.module.css";
import active from "../../assets/images/active.svg";
import active1 from "../../assets/images/active (1).svg";
import active2 from "../../assets/images/active (2).svg";
import logout from "../../assets/images/Logout.svg";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div className={style.sidebar_main_div}>
        <div className={style.sidebar_list_div}>
          <img src={active} alt="icon" />
          <img src={active1} alt="icon" />
          <img src={active2} alt="icon" />
        </div>
        <div>
          <img
            src={logout}
            alt="logout"
            className={style.logout_btn}
            onClick={handleLogout}
          />
        </div>
      </div>
    </>
  );
};

export default SideBar;
