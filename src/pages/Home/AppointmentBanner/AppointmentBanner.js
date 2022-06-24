import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment.png";
import { Button, Typography } from "@mui/material";
const apointBg = {
  background: `url(${bg})`,
};
const AppointmentBanner = () => {
  return (
    <Box style={apointBg} sx={{ flexGrow: 1, marginY: "200px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ height: "500px", width: "500px", marginTop: "-120px" }}
            src={`${doctor}`}
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h5"
              style={{ color: "#4CE6E6" }}
              sx={{ my: 4 }}
            >
              appointment
            </Typography>
            <Typography
              variant="h4"
              style={{ color: "white", fontWeight: 500 }}
            >
              Make an appointment Today{" "}
            </Typography>
            <Typography variant="h6" style={{ color: "white" }} sx={{ my: 4 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </Typography>
            <Button variant="contained">Contained</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
