import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "backdropClick" && reason === "escapeKeyDown") {
      // Set 'open' to false, however you would do that with your particular code.
      setOpen(true);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <CircularProgress />
        </DialogContent>
      </Dialog>
    </div>
  );
}
