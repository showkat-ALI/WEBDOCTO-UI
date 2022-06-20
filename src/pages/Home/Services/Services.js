import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
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
    <Container sx={{ mb: 5 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 500, m: 3 }}>
          OUR SERVICES
        </Typography>
        <Typography variant="h4" component="div" sx={{ fontWeight: 600, m: 3 }}>
          SERVICES WE PROVIDE
        </Typography>
        ;
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
