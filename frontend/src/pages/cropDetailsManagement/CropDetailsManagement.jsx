import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import './CropDetailsManagement.scss'

import CropForm from '../../components/cropComponent/CropComponent.jsx'
import IrrigationForm from '../../components/irrigationComponent/IrrigationComponent.jsx'

const CropDetailsPage = ({ setUserRole }) => {
  return (
    <div className='cropManagement-container'>
        <div className="left">
            <Sidebar setUserRole={setUserRole} />
        </div>
        <div className="right">
            <div className="bottom">
                <CropForm/>
                <IrrigationForm/>
            </div>
        </div>
    </div>
  )
}

export default CropDetailsPage