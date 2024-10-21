import React from 'react'
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="w-1/6" >
        <ProfileCard vendor={{ id: 1, name: 'Vendor Name' }} />
      </div>
      <div className="w-5/6">
        <Outlet /> 
      </div>
      </div>
  )
}

export default DashboardLayout;