import React from 'react'
import Breadcrumb from '../components/Profile/Breadcrumb'
import InformationForm from '../components/Profile/InformationForm'
import SideBar from '../components/Profile/SideBar'

const ProfClient = () => {
  return (
    <>
        <Breadcrumb />
        <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
          <SideBar />
          <InformationForm /> 
        </div>
    </>
  )
}

export default ProfClient