import React from 'react'
import Navbar from '../component/Navbar'
import Landing from '../component/Landing'
import Client from '../component/Client'
import Section from '../component/Section'
import Provider from '../component/Provider'
import Footer from '../component/Footer'
import Contact from '../component/Contact'
import Testinomial from '../component/Testinomial'
const Home = () => {
  return (
    <>
    <Navbar />
    <Landing/>
    <Client/>
    <Section/>
    <Provider/>
    <Testinomial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home