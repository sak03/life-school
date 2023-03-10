import React from 'react'
import {
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Divider } from 'primereact/divider';
import { useSelector } from "react-redux";

const TeacherProfile = () => {
  const userInfo = useSelector((state) => state.userLoginInfo);

  return (
    <div>
      <div className='row'>
        <div className="col-sm-12 col-md-6 col-lg-6 d-flex mb-2">
          <div className=" ml-2">
            <img
              className="mr-2"
              src='candidate1.jpeg'
              width={125}
              shape="circle"
            />
          </div>
          <div className="mx-3 mt-3">
            <p style={{ marginBottom: "0.5rem" }}>
              <FaUserAlt /> &nbsp; <strong>{userInfo?.name}</strong>
            </p>
            <p
              style={{ marginBottom: "0.5rem" }}
              className="d-flex align-items-center"
            >
              <FaPhoneAlt />
              <span>&nbsp; +91 854 789 6524 </span>
            </p>
            <p
              style={{ marginBottom: "0.5rem" }}
              className="d-flex align-items-center"
            >
              <FaEnvelope />
              <span>&nbsp; test@testmail.com</span>
            </p>
            <p className="d-flex align-items-center">
              <FaMapMarkerAlt />
              <span>&nbsp; Delhi, IN</span>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 d-flex mb-2">
        </div>
      </div>
      <Divider />
      <div>
        <div>
          We support students in developing their ability to solve problems, reason mathematically, and connect the mathematics they are learning to the real world around them. Teachers provide ongoing meaningful feedback to all students about their mathematics achievement, which helps to build confidence.
          We makes maths fun to learn and easy to do. Our teaching style is unique, which has also helped me improve my arithmetic. Our students motivates me to work hard and avoid any other means like cheating to get good grades. As a maths teacher we corrects our homework and helps students to use our mathematics in practical life.
        </div>
      </div>
    </div>
  )
}

export default TeacherProfile