import React from "react";
import Navigation from "../../shared/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Services from "../Services/Services";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <TopBanner></TopBanner>
      <Services></Services>
      <AppointmentBanner></AppointmentBanner>
    </div>
  );
};

export default Home;
