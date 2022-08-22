import React from "react";
import Navigation from "../../shared/Navigation/Navigation";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvailableAppoinments from "../AvailableAppoinments/AvailableAppoinments";

const Appoinment = () => {
  return (
    <div>
      <Navigation></Navigation>
      <AppointmentHeader></AppointmentHeader>
      <AvailableAppoinments></AvailableAppoinments>
    </div>
  );
};

export default Appoinment;
