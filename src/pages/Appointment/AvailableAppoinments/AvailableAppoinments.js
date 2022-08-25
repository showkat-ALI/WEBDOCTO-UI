import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Booking from "../Booking/Booking";
const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 AM",
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10.00 AM - 11.00 AM",
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "11.00 AM - 12.00 PM",
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "06.00 PM - 07.00 PM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "07.00 PM - 08.00 PM",
    space: 10,
  },
];
const AvailableAppoinments = ({ date }) => {
  return (
    <Container>
      <h1>Appointments available at{date.toDateString()} </h1>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking id={booking.id} booking={booking}></Booking>
        ))}
      </Grid>
      ;
    </Container>
  );
};

export default AvailableAppoinments;
