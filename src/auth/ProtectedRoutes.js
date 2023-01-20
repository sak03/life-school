import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
  const userInfo = useSelector((state) => state.userLoginInfo);
  const userModeValue = useSelector((state) => state.userInfo);
  let modeValue = null;
  modeValue = userInfo.role == "Admin" ? 1 : userInfo.role == "Teacher" ? 2 : userInfo.role == "Student" ? 3 : null
  console.log("modeValue", modeValue)

  return (
    modeValue != null ? (
      <Outlet />
    ) : (
      <Navigate
        to={{
          pathname: "/",
        }}
      />))
};

export default ProtectedRoutes;
