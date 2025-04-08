import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import ClientDashboard from '../component/ClientDashboard'
import ProviderDashboard from '../component/ProviderDashboard'
import { useParams } from 'react-router-dom'
const Dashboard = () => {
    const {email,people} = useParams();
  return (
    <div>
        {/* <Navbar /> */}
        {people === "client" ? <ClientDashboard/> : <ProviderDashboard/> }
        <Footer/>
    </div>
  )
}

export default Dashboard