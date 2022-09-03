import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ open, handleClose, service, date }) => {
  const { name, time } = service;
  const handleBookingSubmit = (e) => {
    alert("submitted");
    e.preventDefault();
    handleClose();
  };
  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          {name}
        </Typography>
        <form onSubmit={handleBookingSubmit}>
          <TextField
            disabled
            id="filled-size-small"
            defaultValue={date.toDateString()}
            variant="filled"
            sx={{ width: "90%" }}
          />
          <TextField
            disabled
            id="filled-size-small"
            defaultValue={time}
            variant="filled"
            sx={{ width: "90%", my: "20px" }}
          />
          <TextField
            id="filled-size-small"
            defaultValue="Your Name"
            variant="filled"
            sx={{ width: "90%" }}
          />
          <TextField
            id="filled-size-small"
            defaultValue="Your Adress"
            variant="filled"
            sx={{ width: "90%", my: "20px" }}
          />
          <TextField
            id="filled-size-small"
            defaultValue="Your Email"
            variant="filled"
            sx={{ width: "90%" }}
          />
          <Button type="submit" sx={{ my: "20px" }} variant="contained">
            {" "}
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
