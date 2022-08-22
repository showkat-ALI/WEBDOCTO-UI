import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import bgChair from "../../../images/bg.png";
import chair from "../../../images/chair.png";
import Calender from "../../shared/Calender/Calender";
const bGcHaIr = {
  background: `url(${bgChair})`,
};

const AppointmentHeader = () => {
  return (
    <Container style={bGcHaIr}>
      <Grid container>
        <Grid Item xs={12} md={6}>
          <Calender></Calender>
        </Grid>

        <Grid Item xs={12} md={6}>
          <img alt="" style={{ width: "100%", height: "100%" }} src={chair} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentHeader;
