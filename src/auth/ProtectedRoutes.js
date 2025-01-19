import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
  const userModeValue = useSelector((state) => state.userInfo);
  let modeValue = null;
  modeValue = useSelector((state) => state.userInfo.userModeValue);
  const userInfo = localStorage.getItem('loginInfo')
  console.log("userInfo", userInfo)

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
