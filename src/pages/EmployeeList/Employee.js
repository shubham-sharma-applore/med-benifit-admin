import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import SideBar from "../../components/SideBar/SideBar";
import { get } from "../../utils/axios";
import style from "./Employee.module.css";
import dropdown_icon from "../../assets/images/Icon Color.svg";
import calendar from "../../assets/images/calender-svgrepo-com 1.svg";

const Employee = () => {
  const [data, setData] = useState([]);
  const columns = [
    {
      field: "employerName",
      headerName: "Employer Name",
      flex: 2,
    },
    {
      field: "_id",
      headerName: "Customer ID",
      flex: 1,
    },
    {
      field: "country",
      headerName: "Location",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Poc Number",
      flex: 1,
    },
    {
      field: "contactPersonName",
      headerName: "Poc Name",
      flex: 1,
    },
  ];

  // let data = [
  //   {
  //     id: 1,
  //     name: "JK Tyre",
  //     custommerId: "ID456789",
  //     location: "New Delhi",
  //     phoneNumber: "9879876543",
  //     pocName: "Sakshi Gupta",
  //   },
  //   {
  //     id: 1,
  //     name: "JK Tyre",
  //     custommerId: "ID456789",
  //     location: "New Delhi",
  //     phoneNumber: "9879876543",
  //     pocName: "Sakshi Gupta",
  //   },
  //   {
  //     id: 1,
  //     name: "JK Tyre",
  //     custommerId: "ID456789",
  //     location: "New Delhi",
  //     phoneNumber: "9879876543",
  //     pocName: "Sakshi Gupta",
  //   },
  //   {
  //     id: 1,
  //     name: "JK Tyre",
  //     custommerId: "ID456789",
  //     location: "New Delhi",
  //     phoneNumber: "9879876543",
  //     pocName: "Sakshi Gupta",
  //   },
  //   {
  //     id: 1,
  //     name: "JK Tyre",
  //     custommerId: "ID456789",
  //     location: "New Delhi",
  //     phoneNumber: "9879876543",
  //     pocName: "Sakshi Gupta",
  //   },
  //   {
  //     id: 1,
  //     name: "JK Tyre",
  //     custommerId: "ID456789",
  //     location: "New Delhi",
  //     phoneNumber: "9879876543",
  //     pocName: "Sakshi Gupta",
  //   },
  //   {
  //     id: 1,
  //     name: "JK Tyre",
  //     custommerId: "ID456789",
  //     location: "New Delhi",
  //     phoneNumber: "9879876543",
  //     pocName: "Sakshi Gupta",
  //   },
  //   {
  //     id: 1,
  //     name: "JK Tyre",
  //     custommerId: "ID456789",
  //     location: "New Delhi",
  //     phoneNumber: "9879876543",
  //     pocName: "Sakshi Gupta",
  //   },
  //   {
  //     id: 1,
  //     name: "JK Tyre",
  //     custommerId: "ID456789",
  //     location: "New Delhi",
  //     phoneNumber: "9879876543",
  //     pocName: "Sakshi Gupta",
  //   },
  //   {
  //     id: 1,
  //     name: "JK Tyre",
  //     custommerId: "ID456789",
  //     location: "New Delhi",
  //     phoneNumber: "9879876543",
  //     pocName: "Sakshi Gupta",
  //   },
  //   {
  //     id: 1,
  //     name: "JK Tyre",
  //     custommerId: "ID456789",
  //     location: "New Delhi",
  //     phoneNumber: "9879876543",
  //     pocName: "Sakshi Gupta",
  //   },
  //   {
  //     id: 1,
  //     name: "JK Tyre",
  //     custommerId: "ID456789",
  //     location: "New Delhi",
  //     phoneNumber: "9879876543",
  //     pocName: "Sakshi Gupta",
  //   },
  //   {
  //     id: 1,
  //     name: "JK Tyre",
  //     custommerId: "ID456789",
  //     location: "New Delhi",
  //     phoneNumber: "9879876543",
  //     pocName: "Sakshi Gupta",
  //   },
  //   {
  //     id: 1,
  //     name: "JK Tyre",
  //     custommerId: "ID456789",
  //     location: "New Delhi",
  //     phoneNumber: "9879876543",
  //     pocName: "Sakshi Gupta",
  //   },
  //   {
  //     id: 1,
  //     name: "JK Tyre",
  //     custommerId: "ID456789",
  //     location: "New Delhi",
  //     phoneNumber: "9879876543",
  //     pocName: "Sakshi Gupta",
  //   },
  //   {
  //     id: 1,
  //     name: "JK Tyre",
  //     custommerId: "ID456789",
  //     location: "New Delhi",
  //     phoneNumber: "9879876543",
  //     pocName: "Sakshi Gupta",
  //   },
  // ];

  const fetchData = async () => {
    let data = await get("/get-company");
    let arr = data?.company.map((d, i) => ({
      id: i + 1,
      ...d,
    }));
    setData(arr);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "96%" }}>
          <Navbar />
          <div className={style.employee_onboard_main_div}>
            <div className={style.input_form_div}>
              <div className={style.employee_heading}>
                <div className={style.employee_heading_left_div}>
                  <p className={style.employee_heading_heading}>
                    Employer List
                  </p>
                  <p className={style.employee_heading_subheading}>
                    An Overview of all your test request over the year.
                  </p>
                </div>
                <div className={style.filter_div}>
                  <div className={style.status_div_date}>
                    <p>Date</p>
                    <img
                      src={calendar}
                      alt="dropdown"
                      className={style.calendar_icon_css}
                    />
                  </div>
                  <div className={style.status_div}>
                    <p>All Status</p>
                    <img
                      src={dropdown_icon}
                      alt="dropdown"
                      className={style.dropdown_icon_css}
                    />
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  value={data.email}
                  // onChange={handleChange}
                />
              </div>
              <div className={style.employee_list_table}>
                <DataGrid
                  rows={data}
                  columns={columns}
                  pageSizeOptions={[10, 25, 50, 100]}
                  checkboxSelection
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
