import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import style from "./EmployeeOnbaord.module.css";
import UploadImage from "../../assets/images/Image.svg";
import UploadIcon from "../../assets/images/fi_upload-cloud.svg";
import SideBar from "../../components/SideBar/SideBar";
import { post } from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const EmployeeOnboard = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    companyName: "",
    employerName: "",
    domain: "",
    country: "",
    totalEmployee: "",
    contactPersonName: "",
    contactPersonEmail: "",
    countryCode: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const login_reponse = await post("/create-company", data);
      if (login_reponse.response === "Success") {
        navigate("/employee-list");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log("val", data);
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "96%" }}>
          <Navbar />
          <div className={style.employee_onboard_main_div}>
            <div className={style.onboard_header}>
              <p>Onboarding New Employer</p>
              <button onClick={handleSubmit}>Submit</button>
            </div>
            <div className={style.input_form_div}>
              <div className={style.input_form_div_1}>
                <input
                  placeholder="Company Name"
                  className={style.input_style_emp_onboard}
                  type="text"
                  name="companyName"
                  value={data.companyName}
                  onChange={handleChange}
                />
                <input
                  className={style.input_style_emp_onboard}
                  placeholder="Employer Name"
                  type="text"
                  name="employerName"
                  value={data.employerName}
                  onChange={handleChange}
                />
                <input
                  className={style.input_style_emp_onboard}
                  placeholder="Domain"
                  type="text"
                  name="domain"
                  value={data.domain}
                  onChange={handleChange}
                />
                <input
                  className={style.input_style_emp_onboard}
                  placeholder="Country"
                  type="text"
                  name="country"
                  value={data.country}
                  onChange={handleChange}
                />
                <input
                  className={style.input_style_emp_onboard}
                  placeholder="Total Employee"
                  type="number"
                  name="totalEmployee"
                  value={data.totalEmployee}
                  onChange={handleChange}
                />
              </div>
              <div className={style.input_form_div_2}>
                <input
                  className={style.input_style_emp_onboard}
                  placeholder="Contact Person Name"
                  type="text"
                  name="contactPersonName"
                  value={data.contactPersonName}
                  onChange={handleChange}
                />
                <input
                  className={style.input_style_emp_onboard}
                  placeholder="Contact Person Email"
                  type="text"
                  name="contactPersonEmail"
                  value={data.contactPersonEmail}
                  onChange={handleChange}
                />
                <input
                  className={style.input_style_emp_onboard}
                  placeholder="Country Code"
                  type="text"
                  name="countryCode"
                  value={data.countryCode}
                  onChange={handleChange}
                />
                <input
                  className={style.input_style_emp_onboard}
                  placeholder="Phone Number"
                  type="number"
                  name="phoneNumber"
                  value={data.phoneNumber}
                  // maxLength={10}
                  onChange={handleChange}
                />
                <p className={style.input_form_2_heading}>
                  Upload Employee List
                </p>
                <div className={style.upload_doc_main_div}>
                  <div className={style.upload_doc_div}>
                    <img
                      src={UploadImage}
                      alt="Upload File"
                      className={style.upload_image}
                    />
                    <div className={style.upload_doc_text_div}>
                      <img src={UploadIcon} alt="upload icon" />
                      <p className={style.upload_text}>Upload xls/csv</p>
                    </div>
                  </div>
                  <div className={style.upload_doc_dotted_div}></div>
                </div>
                <p className={style.input_form_2_subheading}>
                  Hint: Ensure your Excel file includes only three columns :
                  <br />
                  Employee ID, Name, and Phone Number{" "}
                </p>
              </div>
              <div className={style.input_form_div_3}>
                <p className={style.support_doc_heading}>
                  Supporting Documents
                </p>
                <div className={style.upload_doc_main_div}>
                  <div className={style.upload_doc_div}>
                    <img
                      src={UploadImage}
                      alt="Upload File"
                      className={style.upload_image}
                    />
                    <div className={style.upload_doc_text_div}>
                      <img src={UploadIcon} alt="upload icon" />
                      <p className={style.upload_text}>Upload xls/csv</p>
                    </div>
                  </div>
                  <div className={style.upload_doc_dotted_div}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeOnboard;
