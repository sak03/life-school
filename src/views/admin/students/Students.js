import React, { useState } from 'react'
import './students.css'
import { TabView, TabPanel } from 'primereact/tabview';
import CandidatesTab from './tabs/AllStudents';
import Offered from './tabs/OfferedStudents';
import JoinedTab from './tabs/JoinedStudents';
import Backouts from './tabs/RejectedStudents';


const Students = () => {
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div>
      <TabView>
        <TabPanel header="All Students">
          <CandidatesTab />
        </TabPanel>
        <TabPanel header="Offered Students">
          <Offered />
        </TabPanel>
        <TabPanel header="Joined Students">
          <JoinedTab />
        </TabPanel>
        <TabPanel header="Rejected Students">
          <Backouts />
        </TabPanel>
      </TabView>
    </div>
  )
}

export default Students;