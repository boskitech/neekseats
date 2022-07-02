import { Button, Divider, Grid, IconButton, MenuItem } from "@mui/material";
import MuiSelect from "@mui/material/Select";
import { styled } from "@mui/system";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Watch1 from "../../assets/img/watch_img_27.png";

const Cart = () => {
  const [age, setAge] = useState("");
  const [quantity, SetQuantity] = useState(1);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const CartBody = styled("div")(({ theme }) => ({
    width: "70%",
    margin: "130px auto",
    [theme.breakpoints.up("xl")]: {
      width: "60%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "80%",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "40px auto",
    },
  }));

  const StyledCartHeader = styled("div")(({ theme }) => ({
    fontSize: "20px",
    color: "#444",
    fontWeight: 400,
    padding: "15px",
  }));

  const StyledCheckOutHeader = styled("div")(({ theme }) => ({
    fontSize: "15px",
    color: "#666",
    fontWeight: 400,
    padding: "15px",
  }));

  const StyledCartGrid = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto",
    borderRadius: "5px",
    boxShadow: "0 0 15px #efefef",
  }));

  const StyledCheckoutGrid = styled("div")(({ theme }) => ({
    width: "100%",
    height: "200px",
    borderRadius: "5px",
    boxShadow: "0 0 15px #efefef",
  }));

  const StyledCartItems = styled("div")(({ theme }) => ({
    width: "100%",
    height: "200px",
    borderRadius: "5px",
    padding: "15px",
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
    margin: "10px auto",
    borderRadius: "5px",
  }));

  const StyledItemName = styled("div")(({ theme }) => ({
    fontSize: "16px",
    color: "#666",
    fontWeight: 400,
    padding: "15px 0px",
  }));

  const StyledItemPrice = styled("div")(({ theme }) => ({
    fontSize: "15px",
    color: "#222",
    fontWeight: 400,
    padding: "15px 30px",
  }));

  const StyledShippingText = styled("span")(({ theme }) => ({
    fontSize: "13px",
    color: "#999",
    fontWeight: 400,
    padding: "0",
  }));

  const StyledSelectButton = styled(MuiSelect)(({ theme }) => ({
    width: "80px",
    height: "30px",
    marginTop: "20px",
    fontSize: "13px",
    outline: "none",
  }));

  //   const StyledQuantityButton = styled(Button)(({ theme }) => ({
  //     width: "20px",
  //     height: "30px",
  //     fontSize: "17px",
  //     border: "1px solid #bfbfbf",
  //     margin: "0 10px",
  //     color: "#777",
  //   }));

  const StyledDeleteButton = styled(Button)(({ theme }) => ({
    width: "20px",
    height: "30px",
    fontSize: "13px",
    margin: "20px 25px 0 0",
    color: "#777",
    fontWeight: 540,
    textTransform: "capitalize",
    "&:hover": {
      color: "red",
      background: "none",
    },
  }));

  const StyledQuantityBar = styled("div")(({ theme }) => ({
    height: "28px",
    width: "auto",
    borderRadius: "4px",
    border: "1px solid #bfbfbf",
    margin: "20px 10px",
    color: "#777",
    fontSize: "15px",
  }));

  const QuantityDiv = styled("div")(({ theme }) => ({
    fontSize: "15px",
    padding: "1px",
  }));

  return (
    <CartBody>
      <Grid container spacing={5}>
        <Grid item md={8} xs={12}>
          <StyledCartGrid item md={8} xs={12}>
            <StyledCartHeader>
              Cart
              <Divider sx={{ marginTop: "13px" }} />
            </StyledCartHeader>
            <StyledCartItems>
              <Grid container direction="row" spacing="20">
                <Grid item xs={3}>
                  <StyledCartImageDiv>
                    <StyledCartImage src={Watch1}></StyledCartImage>
                  </StyledCartImageDiv>
                </Grid>
                <Grid item xs={9}>
                  <Grid container direction="column">
                    <Grid
                      item
                      direction="row"
                      display="flex"
                      justifyContent="space-between"
                    >
                      <StyledItemName>Smart Apple Chromic Watch</StyledItemName>
                      <StyledItemPrice>$12.99 </StyledItemPrice>
                    </Grid>
                    <Grid item>
                      <StyledShippingText>Shipping - $12.99</StyledShippingText>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        display="flex"
                        direction="row"
                        justifyContent="space-between"
                      >
                        <Grid item display="flex" direction="row">
                          <StyledSelectButton
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                          >
                            <MenuItem value="">
                              <em>Black</em>
                            </MenuItem>
                            <MenuItem value={10}>Black</MenuItem>
                            <MenuItem value={20}>White</MenuItem>
                            <MenuItem value={30}>Brown</MenuItem>
                          </StyledSelectButton>
                          {/* <StyledQuantityButton>-</StyledQuantityButton>
                          {1}
                          <StyledQuantityButton>+</StyledQuantityButton> */}
                          <StyledQuantityBar>
                            <QuantityDiv>
                              <IconButton
                                size="small"
                                onClick={() => SetQuantity(quantity - 1)}
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
                              {quantity}
                              <IconButton
                                size="small"
                                onClick={() => SetQuantity(quantity + 1)}
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
                          <StyledDeleteButton>
                            <DeleteIcon
                              sx={{ fontSize: "14px", marginRight: "3px" }}
                            />
                            Delete
                          </StyledDeleteButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </StyledCartItems>
          </StyledCartGrid>
        </Grid>
        <Grid item md={4} xs={12}>
          <StyledCheckoutGrid>
            <StyledCheckOutHeader>Delivery</StyledCheckOutHeader>
          </StyledCheckoutGrid>
        </Grid>
      </Grid>
    </CartBody>
  );
};

export default Cart;
