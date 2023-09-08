import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Home.module.css";
import SideBar from "../../components/SideBar/SideBar";
import Complaint from "../../components/Complaint/Complaint";
import RecentOrder from "../../components/RecentOrder/RecentOrder";

const Home = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "96%" }}>
          <Navbar />
          <div className={style.home_page_main_div}>
            <Complaint />
            <RecentOrder />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
