import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import cavity from "../../../images/cavity.png";
import floride from "../../../images/fluoride.png";
import Whitening from "../../../images/whitening.png";
const services = [
  {
    name: "Cavity",
    description:
      "Cavities are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes. Cavities, also called tooth decay or caries",
    img: cavity,
  },
  {
    name: "floride",
    description:
      "Cavities are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes. Cavities, also called tooth decay or caries",
    img: floride,
  },
  {
    name: "Whitening",
    description:
      "Cavities are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes. Cavities, also called tooth decay or caries",
    img: Whitening,
  },
];
const Services = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service service={service}></Service>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
