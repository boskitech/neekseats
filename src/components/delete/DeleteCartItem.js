import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { fetchCartProducts, setDeleteModal } from "../../reducers/cartSlice";

export default function DeleteBar({ action }) {
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
    dispatch(setDeleteModal(false));
  };

  const handleAction = () => {
    action();
    setOpen(false);
    dispatch(setDeleteModal(false));
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(fetchCartProducts(user._id));
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Item</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are sure you delete the item...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: "red" }} onClick={handleAction}>
            Delete Item
          </Button>
          <Button sx={{ color: "blue" }} onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
