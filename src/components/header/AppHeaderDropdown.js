import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilLockLocked,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { Avatar } from 'primereact/avatar';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const AppHeaderDropdown = () => {
    const navigate = useNavigate();
  const userMode = useSelector((state)=>state.userInfo.userModeValue);
  const userInfo = useSelector((state)=>state.userLoginInfo);

  const handleLogOut = ()=>{
    localStorage.removeItem('loginInfo');
    localStorage.removeItem("userMode");
    localStorage.removeItem("userInfo");
    navigate('/')
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <Avatar
          label={userInfo?.name.charAt(0).toUpperCase()}
          className="p-2 my-1"
          size="small"
          shape="circle"
        />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">{userInfo?.role}</CDropdownHeader>
        <CDropdownItem>
          <CIcon icon={cilUser} className="me-2" />
          {userInfo?.name}
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem >
          <CIcon icon={cilLockLocked} className="me-2" />
          <span className='text-dark' style={{ textDecoration: "none", cursor: "pointer" }} onClick={handleLogOut}>
            Log out
          </span>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
