import React from "react";
import Navclient from "../component/Navclient";
import Content from "./Content";
import Section from "./Section";
import Gallery from "./Gallery";
import { useParams } from "react-router-dom";
const ClientDashboard = () => {
  const {email,people} = useParams();
  return (
    <div>
      <Navclient
        val1="Home"
        val2="Bookings"
        val3="Transactions"
        val4="Logout"
        email={email}
        people={people}
      />
      <Content />
      <Gallery />

      <Section />
    </div>
  );
};

export default ClientDashboard;
