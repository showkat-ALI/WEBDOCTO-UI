import React from "react";
import chair from "../../../images/chair.png";
import bgChair from "../../../images/bg.png";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";

const bGcHaIr = {
  background: `url(${bgChair})`,
};
const verticalCenter = {
  height: 621,

  display: "flex",
  alignItems: "center",
};
const TopBanner = () => {
  return (
    <Container style={bGcHaIr}>
      {/* <Container> */}
      <Box container sx={{ flexGrow: 1 }} style={verticalCenter}>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Box style={{ textAlign: "left" }}>
              <Typography
                variant="h3"
                style={{ fontWeight: 600, fontSize: "48px", color: "#3A4256" }}
              >
                Your new smile starts <br /> here
              </Typography>
              <Typography
                variant="h6"
                style={{
                  fontWeight: "250",
                  color: "#3A4256",
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              >
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
              </Typography>
              <Button variant="contained">start</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <img style={{ height: "300px" }} src={chair} alt="" />{" "}
          </Grid>
        </Grid>
      </Box>
      {/* </Container> */}
    </Container>
  );
};

export default TopBanner;
