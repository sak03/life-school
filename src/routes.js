import { element } from 'prop-types'
import React from 'react'

// ========= admin ============
const Dashboard = React.lazy(() => import('./views/admin/dashboard/Dasshboard'))
const Staff = React.lazy(()=>import('./views/admin/staff/Staff'))
const Jobs = React.lazy(()=>import('./views/admin/jobs/Jobs'))
const Students = React.lazy(() => import('./views/admin/students/Students'))
const Profile = React.lazy(() => import('./views/admin/students-profile/Profile'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: Dashboard},

  // ============ admin ==============
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path : '/staff', name: 'Staff', element:Staff},
  { path : '/jobs', name: 'Jobs', element:Jobs},
  { path: '/students', name: "Students", element: Students },
  { path: "/students-profile", name: "Profile", element: Profile },
]

export default routes
