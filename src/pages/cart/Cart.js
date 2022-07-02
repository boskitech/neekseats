import { Button, Divider, Grid, IconButton, MenuItem } from "@mui/material";
import MuiSelect from "@mui/material/Select";
import { styled } from "@mui/system";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Watch1 from "../../assets/img/watch_img_27.png";
import Watch2 from "../../assets/img/watch_img_12.png";
import Watch3 from "../../assets/img/watch_img_29.png";
import Watch4 from "../../assets/img/watch_img_21.png";
import DeliveryBar from "./DeliveryBar";
import { motion } from "framer-motion";

const Cart = () => {
  const [color, setColor] = useState("black");
  const [quantity, SetQuantity] = useState(1);

  const handleChange = (event) => {
    setColor(event.target.value);
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
      margin: "70px auto",
    },
  }));

  const StyledCartHeader = styled("div")(({ theme }) => ({
    fontSize: "20px",
    color: "#444",
    fontWeight: 400,
    padding: "15px",
    [theme.breakpoints.down("md")]: {
      padding: "12px",
      boxShadow: "0 0 5px #dfdfdf",
      borderRadius: "5px",
    },
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
    [theme.breakpoints.down("md")]: {
      boxShadow: "none",
    },
  }));

  const StyledCheckoutGrid = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto",
    borderRadius: "5px",
    boxShadow: "0 0 15px #efefef",
  }));

  const StyledCartItems = styled("div")(({ theme }) => ({
    width: "96%",
    height: "200px",
    borderRadius: "5px",
    padding: "15px 0px 15px 15px",
    [theme.breakpoints.down("md")]: {
      width: "96%",
      boxShadow: "0 0 5px #dfdfdf",
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
    color: "#666",
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
    color: "#999",
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
    margin: "20px 10px",
    color: "#777",
    fontSize: "15px",
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
      marginBottom: "10px",
    },
  }));

  const QuantityDiv = styled("div")(({ theme }) => ({
    fontSize: "15px",
    padding: "1px",
  }));

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      exit={{ x: 200, scale: 0, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <CartBody>
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
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <StyledItemName>
                          Smart Apple Chromic Watch
                        </StyledItemName>
                        <StyledItemPrice>$12.99 </StyledItemPrice>
                      </Grid>
                      <Grid item>
                        <StyledShippingText>
                          Shipping - $12.99
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
                              value={color}
                              onChange={handleChange}
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
                            >
                              <MenuItem value="none">
                                <em>Black</em>
                              </MenuItem>
                              <MenuItem value="black">Black</MenuItem>
                              <MenuItem value="white">White</MenuItem>
                              <MenuItem value="brown">Brown</MenuItem>
                            </StyledSelectButton>
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
                            <StyledDeleteButton
                              sx={{ display: { xs: "none", md: "flex" } }}
                            >
                              <DeleteIcon
                                sx={{ fontSize: "14px", marginRight: "3px" }}
                              />
                              Delete
                            </StyledDeleteButton>
                            <IconButton
                              sx={{
                                display: { xs: "block", md: "none" },
                                marginRight: "3px",
                              }}
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
              <StyledCartItems>
                <Grid container direction="row" spacing="20">
                  <Grid item xs={3}>
                    <StyledCartImageDiv>
                      <StyledCartImage src={Watch2}></StyledCartImage>
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
                        <StyledItemName>
                          Smart Apple Chromic Watch
                        </StyledItemName>
                        <StyledItemPrice>$12.99 </StyledItemPrice>
                      </Grid>
                      <Grid item>
                        <StyledShippingText>
                          Shipping - $12.99
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
                              value={color}
                              onChange={handleChange}
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
                            >
                              <MenuItem value="none">
                                <em>Black</em>
                              </MenuItem>
                              <MenuItem value="black">Black</MenuItem>
                              <MenuItem value="white">White</MenuItem>
                              <MenuItem value="brown">Brown</MenuItem>
                            </StyledSelectButton>
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
                            <StyledDeleteButton
                              sx={{ display: { xs: "none", md: "flex" } }}
                            >
                              <DeleteIcon
                                sx={{ fontSize: "14px", marginRight: "3px" }}
                              />
                              Delete
                            </StyledDeleteButton>
                            <IconButton
                              sx={{
                                display: { xs: "block", md: "none" },
                                marginRight: "3px",
                              }}
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
              <StyledCartItems>
                <Grid container direction="row" spacing="20">
                  <Grid item xs={3}>
                    <StyledCartImageDiv>
                      <StyledCartImage src={Watch3}></StyledCartImage>
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
                        <StyledItemName>
                          Smart Apple Chromic Watch
                        </StyledItemName>
                        <StyledItemPrice>$12.99 </StyledItemPrice>
                      </Grid>
                      <Grid item>
                        <StyledShippingText>
                          Shipping - $12.99
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
                              value={color}
                              onChange={handleChange}
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
                            >
                              <MenuItem value="none">
                                <em>Black</em>
                              </MenuItem>
                              <MenuItem value="black">Black</MenuItem>
                              <MenuItem value="white">White</MenuItem>
                              <MenuItem value="brown">Brown</MenuItem>
                            </StyledSelectButton>
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
                            <StyledDeleteButton
                              sx={{ display: { xs: "none", md: "flex" } }}
                            >
                              <DeleteIcon
                                sx={{ fontSize: "14px", marginRight: "3px" }}
                              />
                              Delete
                            </StyledDeleteButton>
                            <IconButton
                              sx={{
                                display: { xs: "block", md: "none" },
                                marginRight: "3px",
                              }}
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
              <StyledCartItems>
                <Grid container direction="row" spacing="20">
                  <Grid item xs={3}>
                    <StyledCartImageDiv>
                      <StyledCartImage src={Watch4}></StyledCartImage>
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
                        <StyledItemName>
                          Smart Apple Chromic Watch
                        </StyledItemName>
                        <StyledItemPrice>$12.99 </StyledItemPrice>
                      </Grid>
                      <Grid item>
                        <StyledShippingText>
                          Shipping - $12.99
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
                              value={color}
                              onChange={handleChange}
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
                            >
                              <MenuItem value="none">
                                <em>Black</em>
                              </MenuItem>
                              <MenuItem value="black">Black</MenuItem>
                              <MenuItem value="white">White</MenuItem>
                              <MenuItem value="brown">Brown</MenuItem>
                            </StyledSelectButton>
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
                            <StyledDeleteButton
                              sx={{ display: { xs: "none", md: "flex" } }}
                            >
                              <DeleteIcon
                                sx={{ fontSize: "14px", marginRight: "3px" }}
                              />
                              Delete
                            </StyledDeleteButton>
                            <IconButton
                              sx={{
                                display: { xs: "block", md: "none" },
                                marginRight: "3px",
                              }}
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
            </StyledCartGrid>
          </Grid>
          <Grid item md={4} xs={12}>
            <StyledCheckoutGrid>
              <StyledCheckOutHeader>Delivery</StyledCheckOutHeader>
              <DeliveryBar />
            </StyledCheckoutGrid>
          </Grid>
        </Grid>
      </CartBody>
    </motion.div>
  );
};

export default Cart;
