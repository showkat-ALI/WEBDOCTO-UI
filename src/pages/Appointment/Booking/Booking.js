import { Grid } from "@mui/material";
import React from "react";

const Booking = ({ booking }) => {
  const { space, time, name } = booking;
  return (
    <Grid item xs={8} md={4}>
      {name}
    </Grid>
  );
};

export default Booking;
