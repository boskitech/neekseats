import * as React from "react";
import { styled } from "@mui/system";
import { Button, Grid } from "@mui/material";
import Watch1 from "../../assets/img/watch_img_25.png";
import Watch2 from "../../assets/img/watch_img_17.png";
import Watch3 from "../../assets/img/watch_img_10.png";
import Rating from "@mui/material/Rating";
import MuiToggleButton from "@mui/material/ToggleButton";
import MuiToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ViewItem = () => {
  const [value, setValue] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);

  const handleValue = (event, newValue) => {
    setValue(newValue);
  };

  // const handleQuantity = () => {
  //   setQuantity(quantity + 1);
  // };

  //Toggle button -----------------------------------------------------
  const ToggleButton = styled(MuiToggleButton)(({ theme }) => ({
    width: "100px",
    height: "100px",
    outline: "1px solid #777",
    border: "none",
    borderRadius: "0px",
    textAlign: "left",
    fontSize: "13px",
    color: "#444",
    marginRight: "10px",
    textTransform: "capitalize",
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "#805a0f",
      fontWeight: 600,
      outline: "2px solid orange",
      backgroundColor: "#fff",
    },
    "&.Mui-selected:hover": {
      color: "#dfac47",
      fontWeight: 600,
      backgroundColor: "#fff",
    },
    "&:hover": {
      fontWeight: 600,
      color: "#444",
      outline: "1px solid orange",
      backgroundColor: "#fff",
    },
  }));

  const ToggleButtonGroup = styled(MuiToggleButtonGroup)(({ theme }) => ({
    backgroundColor: "#fff",
    display: "block",
    width: "100%",
    color: "#333",
    marginTop: "-5px",
  }));

  //View item button -----------------------------------------------------

  const ViewItemBody = styled("div")(({ theme }) => ({
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

  const StyledSideBar = styled("div")(({ theme }) => ({
    width: "90%",
    height: "auto",
    textAlign: "center",
    background: "#fff",
    boxShadow: "0 0 20px #dfdfdf",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const StyledImageBar = styled("div")(({ theme }) => ({
    width: "100%",
    height: "400px",
  }));

  const StyledSelectionBar = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto",
  }));

  const StyledProductsDiv = styled("div")(({ theme }) => ({
    width: "100%",
    height: "350px",
    textAlign: "center",
    borderRadius: "5px",
    [theme.breakpoints.up("xl")]: {
      height: "400px",
    },
    [theme.breakpoints.down("lg")]: {
      height: "350px",
    },
    [theme.breakpoints.down("md")]: {
      height: "350px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
  }));

  const StyledProductsImage = styled("img")(({ theme }) => ({
    width: "98%",
    height: "auto",
    margin: "60px auto",
    filter: "drop-shadow(-10px 30px 4px #efefef)",
    [theme.breakpoints.down("md")]: {
      margin: "10px auto",
    },
  }));

  const StyledProductsButttonImage = styled("img")(({ theme }) => ({
    width: "90px",
    height: "90px",
    margin: "60px 0",
  }));

  const StyledImageGrid = styled("img")(({ theme }) => ({
    width: "100px",
    height: "auto",
    margin: "10px auto",
  }));

  const StyledProductsDivHeader = styled("div")(({ theme }) => ({
    fontSize: "27px",
    fontWeight: 500,
    color: "#555",
    textTransform: "uppercase",
    marginTop: "0px",
    width: "100%",
  }));

  const StyledProductsDivBrandText = styled("div")(({ theme }) => ({
    fontSize: "17px",
    fontWeight: 500,
    color: "#777",
    textTransform: "uppercase",
    marginBottom: "10px",
    width: "100%",
  }));

  const StyledProductsDivText = styled("div")(({ theme }) => ({
    fontSize: "17px",
    fontWeight: 500,
    color: "#777",
    marginBottom: "10px",
    marginTop: "40px",
    width: "100%",
  }));

  const StyledProductsDivPriceText = styled("div")(({ theme }) => ({
    fontSize: "25px",
    fontWeight: 450,
    color: "#222",
    marginTop: "0px",
  }));

  const StyledColorGrid = styled(Grid)(({ theme }) => ({
    marginTop: "25px",
  }));

  const StyledQuantityGrid = styled(Grid)(({ theme }) => ({
    marginTop: "50px",
  }));

  const StyledBuyAndCheckOut = styled("div")(({ theme }) => ({
    marginTop: "50px",
  }));

  const StyledBannerCartButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#c73217",
    color: "white",
    width: "180px",
    marginTop: "30px",
    padding: "10px",
    fontSize: "15px",
    marginRight: "10px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "50px",
      fontWeight: 500,
      fontSize: "15px",
    },
  }));

  return (
    <ViewItemBody>
      <Grid container spacing={7} display="flex" justifyContent="space-between">
        <Grid item md={2} sm={12}>
          <StyledSideBar>
            <Grid
              container
              direction="column"
              display="flex"
              justifyContent="center"
            >
              <Grid item xs={12}>
                <StyledImageGrid src={Watch1} />
              </Grid>
              <Grid item xs={12}>
                <StyledImageGrid src={Watch3} />
              </Grid>
              <Grid item xs={12}>
                <StyledImageGrid src={Watch2} />
              </Grid>
              <Grid item xs={12}>
                <StyledImageGrid src={Watch3} />
              </Grid>
            </Grid>
          </StyledSideBar>
        </Grid>
        <Grid item md={4.5} sm={12}>
          <StyledImageBar>
            <StyledProductsDiv>
              <StyledProductsImage src={Watch1} />
            </StyledProductsDiv>
          </StyledImageBar>
        </Grid>
        <Grid item md={5.5} sm={12}>
          <StyledSelectionBar>
            <StyledProductsDivBrandText>APPLE</StyledProductsDivBrandText>
            <StyledProductsDivHeader>
              Apple Series 3 Smart Watch
            </StyledProductsDivHeader>
            <StyledProductsDivText>Price</StyledProductsDivText>
            <StyledProductsDivPriceText>$249.99</StyledProductsDivPriceText>
            <Rating
              name="read-only"
              value={3.49}
              readOnly
              sx={{ margin: "20px auto" }}
            />
            <StyledColorGrid container>
              <Grid item xs={2.5}>
                <StyledProductsDivText sx={{ margin: "0" }}>
                  Color:
                </StyledProductsDivText>
              </Grid>
              <Grid item xs={9.5}>
                <ToggleButtonGroup
                  value={value}
                  onChange={handleValue}
                  exclusive
                  aria-label="text formatting"
                >
                  <ToggleButton value="Blue" aria-label="bold">
                    <StyledProductsButttonImage
                      src={Watch1}
                    ></StyledProductsButttonImage>
                  </ToggleButton>
                  <ToggleButton value="white" aria-label="bold">
                    <StyledProductsButttonImage
                      src={Watch2}
                    ></StyledProductsButttonImage>
                  </ToggleButton>
                  <ToggleButton value="brown" aria-label="bold">
                    <StyledProductsButttonImage
                      src={Watch3}
                    ></StyledProductsButttonImage>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </StyledColorGrid>
            <StyledQuantityGrid container>
              <Grid item xs={2.5}>
                <StyledProductsDivText sx={{ margin: "0" }}>
                  Quantity:
                </StyledProductsDivText>
              </Grid>
              <Grid item xs={9.5}>
                <Button
                  sx={{
                    border: "1px solid #444",
                    marginRight: "9px",
                    color: "#222",
                    fontSize: "28px",
                    width: "30px",
                    height: "35px",
                  }}
                  variant="outlined"
                  onClick={() => setQuantity(quantity - 1)}
                >
                  -
                </Button>
                {quantity}
                <Button
                  sx={{
                    border: "1px solid #444",
                    marginLeft: "9px",
                    color: "#222",
                    fontSize: "25px",
                    width: "30px",
                    height: "35px",
                  }}
                  variant="outlined"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </Grid>
            </StyledQuantityGrid>
          </StyledSelectionBar>
          <StyledBuyAndCheckOut>
            <StyledBannerCartButton
              sx={{
                backgroundColor: "#fff",
                border: "1.5px solid #c73217",
                color: "#c73217",
                fontWeight: 600,
              }}
              startIcon={<AddShoppingCartIcon />}
            >
              Add To Cart
            </StyledBannerCartButton>
            <StyledBannerCartButton>Buy Now</StyledBannerCartButton>
          </StyledBuyAndCheckOut>
        </Grid>
      </Grid>
    </ViewItemBody>
  );
};

export default ViewItem;
