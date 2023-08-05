import { Snackbar, Button, Alert, AlertProps } from "@mui/material";
import { useState, forwardRef } from "react";

// Custom snackbar alert component
const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

const SnackbarMui = () => {
  const [open, setOpen] = useState(false);

  // Function to handle snackbar close
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      {/* Button to trigger the snackbar */}
      <Button onClick={() => setOpen(true)}>Submit</Button>

      {/* <Snackbar
        message="Form submitted successfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      /> */}

      {/* Snackbar component */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {/* Custom SnackbarAlert component with success severity */}
        <SnackbarAlert onClose={handleClose} severity="success">
          Form submitted Successfully
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default SnackbarMui;
