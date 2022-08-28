import { Button, Divider, Grid, IconButton, MenuItem } from "@mui/material";
import MuiSelect from "@mui/material/Select";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeliveryBar from "./DeliveryBar";
import { motion } from "framer-motion";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import StickyBox from "react-sticky-box";
import { useDispatch, useSelector } from "react-redux";
import { formatToCurrency } from "../../utils/currencyFormatter";
import Loader from "../../components/loader/Loader";
import DeleteBar from "../../components/delete/DeleteCartItem";

import {
  fetchCartProducts,
  selectUserCart,
  patchQuantity,
  patchColor,
  deleteItem,
  selectPatchStatus,
  selectDeleteModal,
  setDeleteModal,
} from "../../reducers/cartSlice";
import { user } from "../../reducers/usersSlice";
import {
  fetchOneProduct,
  OneProdStatus,
  selectProduct,
  changeStatus,
} from "../../reducers/productSlice";

const CartBody = styled("div")(({ theme }) => ({
  width: "80%",
  margin: "130px auto 20px auto",
  [theme.breakpoints.up("xl")]: {
    width: "60%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "90%",
  },
  [theme.breakpoints.down("md")]: {
    width: "90%",
    margin: "70px auto 0px auto",
  },
}));

const StyledCartHeader = styled("div")(({ theme }) => ({
  fontSize: "20px",
  color: "#444",
  fontWeight: 400,
  padding: "15px",
  [theme.breakpoints.down("md")]: {
    padding: "5px 0",
    borderRadius: "5px",
  },
}));

const StyledCheckOutHeader = styled("div")(({ theme }) => ({
  fontSize: "16 px",
  color: "#444",
  fontWeight: 400,
  padding: "15px",
  [theme.breakpoints.down("md")]: {
    padding: "15px 0px",
    fontSize: "18px",
  },
}));

const StyledCartGrid = styled("div")(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: "5px",
  boxShadow: "0 0 7px #cfcfcf",
  [theme.breakpoints.down("md")]: {
    boxShadow: "none",
  },
}));

const StyledCheckoutGrid = styled("div")(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: "5px",
  boxShadow: "0 0 7px #cfcfcf",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledCartItems = styled("div")(({ theme }) => ({
  width: "96%",
  height: "200px",
  borderRadius: "5px",
  padding: "15px 0px 15px 15px",
  [theme.breakpoints.down("md")]: {
    width: "96%",
    boxShadow: "0 0 2px #cfcfcf",
    margin: "15px 0",
    height: "auto",
  },
}));

const StyledCartImageDiv = styled("div")(({ theme }) => ({
  width: "100%",
  margin: "auto",
  height: "auto",
  borderRadius: "5px",
  backgroundColor: "#f1f1f1",
}));

const StyledCartImage = styled("img")(({ theme }) => ({
  width: "90%",
  height: "auto",
  margin: "10px",
  borderRadius: "5px",
}));

const StyledItemName = styled("div")(({ theme }) => ({
  fontSize: "16px",
  color: "#444",
  fontWeight: 400,
  padding: "15px 0px",
  [theme.breakpoints.down("md")]: {
    marginBottom: "5px",
    padding: "0px",
  },
}));

const StyledItemPrice = styled("div")(({ theme }) => ({
  fontSize: "16px",
  color: "#222",
  fontWeight: 400,
  padding: "15px 10px",
  [theme.breakpoints.down("md")]: {
    padding: "0px 15px 0 10px",
  },
}));

const StyledShippingText = styled("span")(({ theme }) => ({
  fontSize: "13px",
  color: "#666",
  fontWeight: 400,
  padding: "10px 0",
  [theme.breakpoints.down("md")]: {
    paddingTop: "10px",
  },
}));

const StyledSelectButton = styled(MuiSelect)(({ theme }) => ({
  width: "auto",
  height: "30px",
  marginTop: "20px",
  fontSize: "13px",
  outline: "none",
  [theme.breakpoints.down("md")]: {
    marginTop: "10px",
  },
}));

const StyledDeleteButton = styled(Button)(({ theme }) => ({
  width: "20px",
  height: "30px",
  fontSize: "13px",
  margin: "20px 5px 0 0",
  color: "#777",
  fontWeight: 540,
  textTransform: "capitalize",
  "&:hover": {
    color: "red",
    background: "none",
  },
  [theme.breakpoints.down("md")]: {
    margin: "0px 10px 0 0",
    float: "right",
  },
}));

const StyledQuantityBar = styled("div")(({ theme }) => ({
  height: "28px",
  width: "auto",
  borderRadius: "4px",
  border: "1px solid #bfbfbf",
  margin: "20px 0px 20px 10px",
  color: "#777",
  fontSize: "15px",
  [theme.breakpoints.down("md")]: {
    margin: "10px 0px 10px 7px",
  },
}));

const QuantityDiv = styled("div")(({ theme }) => ({
  fontSize: "15px",
  padding: "1px",
}));

const StyledMobileCheckoutButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#c73217",
  color: "white",
  width: "100%",
  height: "50px",
  textTransform: "capitalize",
  margin: "0",
  padding: "10px",
  fontSize: "18px",
  bottom: "0px",
  zIndex: "999",
  position: "fixed",
  borderRadius: "0px",
  "&:hover": {
    backgroundColor: "#416cb7",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const StyledMobileCheckoutGrid = styled("div")(({ theme }) => ({
  width: "100%",
  height: "auto",
}));

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(selectUserCart);
  const myUser = useSelector(user);
  const oneProduct = useSelector(selectProduct);
  const status = useSelector(OneProdStatus);
  const patchStatus = useSelector(selectPatchStatus);
  const deleteModal = useSelector(selectDeleteModal);
  const [loader, setLoader] = useState("");
  const [itemID, setItemID] = useState("");
  const [userID, setUserID] = useState("");
  const [patchLoader, setPatchLoader] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = ({ id, user }) => {
    setOpenDelete(true);
    dispatch(setDeleteModal(true));
    setItemID(id);
    setUserID(user);
  };

  const deleteAction = () => {
    dispatch(deleteItem(itemID));
    dispatch(fetchCartProducts(userID));
    dispatch(setDeleteModal(false));
  };

  useEffect(() => {
    setLoader(status);
  }, [status]);

  useEffect(() => {
    setPatchLoader(patchStatus);
  }, [patchStatus]);

  useEffect(() => {
    setOpenDelete(deleteModal);
  }, [deleteModal]);

  useEffect(() => {
    return () => {
      dispatch(changeStatus());
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch(fetchCartProducts(user._id));
    }
  }, [myUser, dispatch]);

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      exit={{ x: 200, scale: 0, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        width="90%"
        fullScreen
      >
        <DialogContent>
          <StyledMobileCheckoutGrid>
            <StyledCheckOutHeader>Delivery</StyledCheckOutHeader>
            <DeliveryBar />
          </StyledMobileCheckoutGrid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <CartBody sx={{marginBottom: cart.length < 2 ? '220px' : '50px'}}>
        {patchLoader === "loading" && <Loader />}
        {openDelete && <DeleteBar action={deleteAction} />}
        <Grid container spacing={5}>
          <Grid item md={8} xs={12}>
            <StyledCartGrid>
              <StyledCartHeader>
                Cart
                <Divider
                  sx={{
                    marginTop: "13px",
                    display: { xs: "none", sm: "block" },
                  }}
                />
              </StyledCartHeader>
              {cart.length > 0 ? (
                cart.map((item) => (
                  <StyledCartItems key={item._id}>
                    <Grid container direction="row" spacing="20">
                      <Grid item xs={3}>
                        <StyledCartImageDiv>
                          <StyledCartImage
                            src={`https://netporch.herokuapp.com/uploads/${item.cartItemImage}`}
                          ></StyledCartImage>
                        </StyledCartImageDiv>
                      </Grid>
                      <Grid item xs={9}>
                        <Grid container direction="column">
                          <Grid
                            item
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <StyledItemName>{item.cartItemName}</StyledItemName>
                            <StyledItemPrice>
                              {formatToCurrency(parseInt(item.cartItemPrice))}
                            </StyledItemPrice>
                          </Grid>
                          <Grid item>
                            <StyledShippingText>
                              Shipping -{" "}
                              {formatToCurrency(
                                parseInt(item.itemShippingPrice)
                              )}
                            </StyledShippingText>
                          </Grid>
                          <Grid item>
                            <Grid
                              container
                              display="flex"
                              direction="row"
                              justifyContent="space-between"
                            >
                              <Grid
                                item
                                sx={{
                                  display: "flex",
                                }}
                              >
                                <StyledSelectButton
                                  value={item.cartItemColor}
                                  displayEmpty
                                  inputProps={{ "aria-label": "Without label" }}
                                  onFocus={() =>
                                    dispatch(fetchOneProduct(item.itemID))
                                  }
                                >
                                  <MenuItem value={item.cartItemColor}>
                                    {item.cartItemColor}
                                  </MenuItem>
                                  {loader === "succeeded" ? (
                                    oneProduct.productColor.map(
                                      (fetchedColors, index) => (
                                        <MenuItem
                                          key={index}
                                          value={fetchedColors.color}
                                          onClick={() => {
                                            dispatch(
                                              patchColor({
                                                itemId: item._id,
                                                color: fetchedColors.color,
                                              })
                                            );
                                            dispatch(
                                              fetchCartProducts(item.userID)
                                            );
                                          }}
                                        >
                                          {fetchedColors.color}
                                        </MenuItem>
                                      )
                                    )
                                  ) : (
                                    <MenuItem value="brown">
                                      Loading...
                                    </MenuItem>
                                  )}
                                </StyledSelectButton>
                                <StyledQuantityBar>
                                  <QuantityDiv>
                                    <IconButton
                                      size="small"
                                      disabled={item.cartItemQuantity === "1"}
                                      onClick={() => {
                                        let newQuantity =
                                          parseInt(item.cartItemQuantity) - 1;
                                        dispatch(
                                          patchQuantity({
                                            itemId: item._id,
                                            quantity: newQuantity,
                                          })
                                        );
                                        dispatch(
                                          fetchCartProducts(item.userID)
                                        );
                                      }}
                                    >
                                      <RemoveIcon
                                        sx={{
                                          fontSize: "17px",
                                          marginRight: "6px",
                                          marginLeft: "6px",
                                          marginBottom: "3px",
                                        }}
                                      />
                                    </IconButton>
                                    {item.cartItemQuantity}
                                    <IconButton
                                      size="small"
                                      onClick={() => {
                                        let newQuantity =
                                          parseInt(item.cartItemQuantity) + 1;
                                        dispatch(
                                          patchQuantity({
                                            itemId: item._id,
                                            quantity: newQuantity,
                                          })
                                        );
                                        dispatch(
                                          fetchCartProducts(item.userID)
                                        );
                                      }}
                                    >
                                      <AddIcon
                                        sx={{
                                          fontSize: "17px",
                                          marginRight: "6px",
                                          marginLeft: "6px",
                                          marginBottom: "3px",
                                        }}
                                      />
                                    </IconButton>
                                  </QuantityDiv>
                                </StyledQuantityBar>
                              </Grid>
                              <Grid item>
                                <StyledDeleteButton
                                  sx={{ display: { xs: "none", md: "flex" } }}
                                  onClick={() => {
                                    handleDelete({
                                      id: item._id,
                                      user: item.userID,
                                    });
                                  }}
                                >
                                  <DeleteIcon
                                    sx={{
                                      fontSize: "14px",
                                      marginRight: "3px",
                                    }}
                                  />
                                  Delete
                                </StyledDeleteButton>
                                <IconButton
                                  sx={{
                                    display: { xs: "block", md: "none" },
                                    marginRight: "3px",
                                  }}
                                  onClick={() =>
                                    handleDelete({
                                      id: item._id,
                                      user: item.userID,
                                    })
                                  }
                                >
                                  <DeleteIcon
                                    sx={{
                                      fontSize: "18px",
                                      marginTop: "8px",
                                    }}
                                  />
                                </IconButton>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </StyledCartItems>
                ))
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "50px",
                    paddingBottom: "50px",
                    fontSize: "20px",
                  }}
                >
                  No Items In Cart
                </div>
              )}
            </StyledCartGrid>
          </Grid>
          <Grid item md={4} xs={12}>
            <StickyBox offsetTop={90} offsetBottom={90}>
              <StyledCheckoutGrid>
                <StyledCheckOutHeader>Delivery</StyledCheckOutHeader>
                <DeliveryBar />
              </StyledCheckoutGrid>
            </StickyBox>
          </Grid>
        </Grid>
      </CartBody>
      <StyledMobileCheckoutButton
        onClick={handleClickOpen}
        startIcon={<ShoppingCartCheckoutIcon />}
      >
        Checkout
      </StyledMobileCheckoutButton>
    </motion.div>
  );
};

export default Cart;
