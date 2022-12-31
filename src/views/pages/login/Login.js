import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import logo from "../../../assets/images/AceScan_logo.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import './login.css'
export let userMode;
export let userModeValue;


const Login = () => {
  const navigate = useNavigate();
  const hardcodedCred = {
    admin: {
      email: 'admin@testmail.com',
      password: 'Admin@123',
      name: "Prashant Vadhawa"
    },
    teacher: {
      email: 'teacher@testmail.com',
      password: 'Teacher@123',
      name: "Mahfooz Saifi"
    },
    student: {
      email: 'student@testmail.com',
      password: 'Student@123',
      name: "Sartaj Alam",
    },
  }

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (data) => {
      let errors = {};

      if (!data.email) {
        errors.email = "Please enter username or email.";
      }
      if (!data.password) {
        errors.password = "Please enter password.";
      }

      return errors;
    },
    onSubmit: (data) => {
      if ((data.email === hardcodedCred.admin.email) && (data.password === hardcodedCred.admin.password)) {
        userMode = 1;
        navigate("/dashboard");

      } else if ((data.email === hardcodedCred.teacher.email) && (data.password === hardcodedCred.teacher.password)) {
        userMode = 2;
        navigate("/dashboard");
      }
      else if ((data.email === hardcodedCred.student.email) && (data.password === hardcodedCred.student.password)) {
        userMode = 3;
        navigate("/dashboard");
      }
      else {
        alert('Wrong email or password combination');
        // console.log(hardcodedCred.platFormAdmin.email, hardcodedCred.platFormAdmin.password);
      }
      localStorage.setItem("userMode", userMode);
      localStorage.setItem("userInfo", JSON.stringify(hardcodedCred));
      return false;
    },
  });
  const isLoginFormFieldValid = (name) =>
    !!(loginFormik.touched[name] && loginFormik.errors[name]);
  const getLoginFormErrorMessage = (name) => {
    return (
      isLoginFormFieldValid(name) && (
        <small className="p-error">{loginFormik.errors[name]}</small>
      )
    );
  };

  return (
    <>
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <div
          className="login-logo"
          style={{ position: "absolute", top: "2rem", left: "2rem" }}
        >
          <a href="http://www.acescan.co/" target="blank" placeholder="visit">
            <img src={logo} alt="login" width={200} />
          </a>
        </div>
        <CContainer>
          <CRow className="justify-content-center border-0">
            <div className="card p-4 col-lg-4 border-0 shadow-lg">
              <div className="row">
                <form onSubmit={loginFormik.handleSubmit}>
                  <div className=" col-sm-12 col-md-4 col-lg-12 mt-4">
                    <span className="p-float-label">
                      <InputText
                        id="email"
                        value={loginFormik.values.email}
                        onChange={loginFormik.handleChange}
                        className={
                          (classNames({
                            "p-invalid": isLoginFormFieldValid("email"),
                          }),
                            "p-inputtext-sm w-100 borderClass")
                        }
                      />
                      <label htmlFor="email">Username</label>
                    </span>
                    {getLoginFormErrorMessage("email")}
                  </div>
                  <div className=" col-sm-12 col-md-12 col-lg-12 mt-4">
                    <span className="p-float-label">
                      <Password
                        id="password"
                        inputId="password"
                        value={loginFormik.values.password}
                        onChange={loginFormik.handleChange}
                        className={
                          (classNames({
                            "p-invalid": isLoginFormFieldValid("password"),
                          }),
                            "p-inputtext-sm w-100 borderClass")
                        }
                        toggleMask
                        feedback={false}
                      />
                      <label htmlFor="password">Password</label>
                    </span>
                    {getLoginFormErrorMessage("password")}
                  </div>
                  <div className="text-right mt-2 mb-4">
                    <span
                      className="mx-2 text-primary"
                      style={{ cursor: "pointer" }}
                    >
                      Forgot password?
                    </span>
                  </div>
                  <CRow>
                    <CCol xs={12}>
                      <CButton
                        type="submit"
                        color="primary"
                        className="px-4 w-100"
                      >
                        Login
                      </CButton>
                    </CCol>
                  </CRow>
                  <div className="text-right mt-3">
                    <p>
                      Don't have an account ?
                      <span className="mx-2">
                        <Link to='/register' style={{ textDecoration: "none" }}>Sign Up</Link>

                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default Login;
