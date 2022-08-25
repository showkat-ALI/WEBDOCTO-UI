import React from "react";
import Navigation from "../../shared/Navigation/Navigation";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvailableAppoinments from "../AvailableAppoinments/AvailableAppoinments";

const Appoinment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navigation></Navigation>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvailableAppoinments
        date={date}
        setDate={setDate}
      ></AvailableAppoinments>
    </div>
  );
};

export default Appoinment;
