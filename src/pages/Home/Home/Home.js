import React from "react";
import Navigation from "../../shared/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Services></Services>
      <AppointmentBanner></AppointmentBanner>
    </div>
  );
};

export default Home;
