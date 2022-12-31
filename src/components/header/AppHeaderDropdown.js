import React from 'react'
import {
  CAvatar,
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

const AppHeaderDropdown = () => {
  const userMode = localStorage.getItem('userMode');
  const userInfo1 = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userInfo1);

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        {/* <CAvatar src={avatar8} size="md" />  */}
        <Avatar
          label={userMode == 1 ?
            userInfo?.admin?.name.charAt(0).toUpperCase() :
            userMode == 2 ? userInfo?.teacher?.name.charAt(0).toUpperCase() :
              userInfo?.student?.name.charAt(0).toUpperCase()}
          className="p-2 my-1"
          size="small"
          shape="circle"
        />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">{userMode == 1 ? "Admin" : userMode == 2 ? "Teacher" : "Student"}</CDropdownHeader>
        {/* <CDropdownHeader className="bg-light fw-semibold py-2">{userMode == 1 ? userInfo?.admin?.name : userMode == 2 ? "Teacher" : "Student"}</CDropdownHeader> */}
        <CDropdownItem>
          <CIcon icon={cilUser} className="me-2" />
          {userMode == 1 ? userInfo?.admin?.name : userMode == 2 ? userInfo?.teacher?.name : userInfo?.student?.name}
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem >
          <CIcon icon={cilLockLocked} className="me-2" />
          <a href="#" rel="noopener noreferrer" className='text-dark' style={{textDecoration:"none"}}>
            Log out
          </a>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
