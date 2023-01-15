import React, { useState, useRef, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'
import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { sidebarSow } from '../redux/action'
import './appHeader.css'

const AppHeader = () => {
  const userMode = localStorage.getItem('userMode');
  // const userMode = useSelector((state)=>state.userInfo.userModeValue)
  const dispatch = useDispatch()
  const userInfo1 = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userInfo1);
  const sidebarShow = useSelector((state) => state.changeState.sidebarShow)
  // console.log("sidebarValue", userMode)

  return (
    <>
      <CHeader position="sticky" className="mb-2">
        <CContainer fluid>
          <div className='d-flex justify-content-start'>
            <CHeaderToggler
              className="ps-1"
              onClick={() => dispatch(sidebarSow({type:'set', sidebarShow: !sidebarShow }))}
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
