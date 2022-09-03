import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ service, date }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { space, time, name } = service;
  return (
    <>
      <Grid item xs={8} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="h6">{time}</Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Available space {space}
          </Typography>
          <Button onClick={handleOpen} variant="contained">
            {" "}
            Book Appoinment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        open={open}
        handleClose={handleClose}
        service={service}
      ></BookingModal>
    </>
  );
};

export default Booking;
