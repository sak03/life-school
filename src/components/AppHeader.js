import React, { useState, useRef, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CBadge,
} from '@coreui/react'
import {
  FaUserAlt,
  FaUniversity,
  FaHouseUser,
  FaBriefcase,
  FaRegAddressCard,
} from "react-icons/fa";
import CIcon from '@coreui/icons-react'
import { cilList, cilMenu } from '@coreui/icons'
import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
// import { logo } from 'src/assets/brand/logo'
import logo from 'src/assets/images/AceScan_logo.png'
// import logo from 'src/assets/images/SQ_logo.png'
import { Badge } from 'primereact/badge';
import { Link } from "react-router-dom";
import './appHeader.css'
// import { userMode } from '../views/pages/login/Login'

const AppHeader = () => {
  const userMode = localStorage.getItem('userMode');
  const dispatch = useDispatch()
  const userInfo1 = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userInfo1);
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <>
      <CHeader position="sticky" className="mb-2">
        <CContainer fluid>
          <div className='d-flex justify-content-start'>
            <CHeaderToggler
              className="ps-1"
              onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
            >
               <CIcon icon={cilMenu} size="lg" />
              {/* {userMode != 1 && userMode == 3 ? <img src={logo} className="sidebar-brand-full" /> : ""} */}
            </CHeaderToggler>
          </div>
          <div className='d-flex justify-content-center'>
          </div>
          <div className='d-flex justify-content-end'>
            <CHeaderNav>
              {/* <CNavItem>
                <CNavLink>
                  <i className="pi pi-bell mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '1.25rem', cursor: 'pointer' }}><Badge value="3" severity="danger" style={{ fontSize: '0.7rem', width: '0.7rem' }}></Badge></i>
                </CNavLink>
              </CNavItem> */}
              <CNavItem>
                <CNavLink >
                {userMode == 1 ? userInfo?.admin?.name : userMode == 2 ? userInfo?.teacher?.name : userInfo?.student?.name}
                </CNavLink>
              </CNavItem>
            </CHeaderNav>
            <CHeaderNav className="ms-3">
              <AppHeaderDropdown />
            </CHeaderNav>
          </div>
        </CContainer>
        <CHeaderDivider style={{ marginTop: "0", marginBottom: "2px" }} />
        <CContainer fluid style={{ margin: "-0.5rem 0.5rem" }}>
          <AppBreadcrumb />
        </CContainer>
      </CHeader>
    </>
  )
}

export default AppHeader
