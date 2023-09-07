import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import style from "./EmployeeOnbaord.module.css";
import UploadImage from "../../assets/images/Image.svg";
import UploadIcon from "../../assets/images/fi_upload-cloud.svg";
import SideBar from "../../components/SideBar/SideBar";

const EmployeeOnboard = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "96%" }}>
          <Navbar />
          <div className={style.employee_onboard_main_div}>
            <div className={style.onboard_header}>
              <p>Onboarding New Employer</p>
              <button>Submit</button>
            </div>
            <div className={style.input_form_div}>
              <div className={style.input_form_div_1}>
                <input
                  placeholder="Company Name"
                  className={style.input_style_emp_onboard}
                />
                <input
                  className={style.input_style_emp_onboard}
                  placeholder="Employer Name"
                />
                <input
                  className={style.input_style_emp_onboard}
                  placeholder="Domain"
                />
                <input
                  className={style.input_style_emp_onboard}
                  placeholder="Country"
                />
                <input
                  className={style.input_style_emp_onboard}
                  placeholder="Total Employee"
                />
              </div>
              <div className={style.input_form_div_2}>
                <input
                  className={style.input_style_emp_onboard}
                  placeholder="Contact Person Name"
                />
                <input
                  className={style.input_style_emp_onboard}
                  placeholder="Email"
                />
                <input
                  className={style.input_style_emp_onboard}
                  placeholder="Country Code"
                />
                <input
                  className={style.input_style_emp_onboard}
                  placeholder="Phone Number"
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
