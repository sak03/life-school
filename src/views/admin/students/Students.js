import React, { useState } from 'react'
import './students.css'
import { TabView, TabPanel } from 'primereact/tabview';
import CandidatesTab from './tabs/AllStudents';
import Offered from './tabs/OfferedStudents';
import JoinedTab from './tabs/JoinedStudents';
import Backouts from './tabs/RejectedStudents';


const Students = () => {
  const userMode = localStorage.getItem('userMode');


  return (
    <div>
      <TabView>
        <TabPanel header={userMode == 1 ? "All Students" :
          userMode == 2 ? "Class Students" : ""}>
          {userMode == 1 || userMode == 2 ? <CandidatesTab /> : ""}
        </TabPanel>
        {userMode == 1 ? <TabPanel header="Offered Students">
          <Offered />
        </TabPanel> : ""}
        {userMode == 1 ? <TabPanel header="Joined Students">
          <JoinedTab />
        </TabPanel> : ""}
        <TabPanel header={userMode == 1 ? "Rejected Students" :
          userMode == 2 ? "Absent Students" : ""}>
          {userMode == 1 || userMode == 2 ? <Backouts /> : ""}
        </TabPanel>
      </TabView>
    </div>
  )
}

export default Students;