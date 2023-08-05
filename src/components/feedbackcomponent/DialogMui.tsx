import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText,
  } from "@mui/material";
  
  import { useState } from "react";
  
  const DialogMui = () => {
    // State to control the open/closed state of the dialog
    const [open, setOpen] = useState(false);
  
    return (
      <>
        {/* Button to open the dialog */}
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
  
        {/* Dialog component */}
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          {/* Title of the dialog */}
          <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
  
          {/* Content of the dialog */}
          <DialogContent>
            <DialogContentText>
              Are you sure you want to submit the test?
            </DialogContentText>
          </DialogContent>
  
          {/* Actions (buttons) at the bottom of the dialog */}
          <DialogActions>
            {/* The 'Submit' button */}
            <Button autoFocus>Submit</Button>
  
            {/* The 'Cancel' button */}
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  
  export default DialogMui;
  