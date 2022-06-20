import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment.png";
import { Typography } from "@mui/material";
const apointBg = {
  background: `url(${bg})`,
};
const AppointmentBanner = () => {
  return (
    <Box style={apointBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ height: "500px", width: "500px" }}
            src={`${doctor}`}
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>desct</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
