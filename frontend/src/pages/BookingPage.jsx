import React from 'react'
import Navclient from '../component/Navclient'
import Footer from '../component/Footer'
import Booking from '../component/Booking'
import { useParams } from 'react-router-dom'
const BookingPage = () => {
  const { email ,people } = useParams();
  return (
    <div>
    <Navclient val1="Home" val2="Bookings" val3="Transactions" val4="Logout" email={email} people={people} />
    <Booking/>
    <Footer/>
      
    </div>
  )
}

export default BookingPage
