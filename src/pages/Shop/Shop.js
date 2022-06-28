import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import ShopFilterBar from "./ShopFilterBar";

const Shop = () => {
  const ShopBody = styled("div")(({ theme }) => ({
    width: "70%",
    margin: "auto",
    [theme.breakpoints.up("xl")]: {
      width: "60%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "80%",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  }));

  const StyledShopContent = styled("div")(({ theme }) => ({
    width: "100%",
    height: 420,
    margin: "120px auto",
  }));

  const StyledFilterBar = styled("div")(({ theme }) => ({
    width: "100%",
    height: "420px",
    backgroundColor: "#fff9eb",
    paddingTop: "20px",
  }));

  const StyledProductsBar = styled("div")(({ theme }) => ({
    width: "100%",
    height: 420,
    border: "1px solid brown",
    padding: "20px",
  }));

  return (
    <ShopBody>
      <StyledShopContent>
        <Grid container spacing={6}>
          <Grid item md={3}>
            <StyledFilterBar>
              <ShopFilterBar />
            </StyledFilterBar>
          </Grid>
          <Grid item md={9}>
            <StyledProductsBar></StyledProductsBar>
          </Grid>
        </Grid>
      </StyledShopContent>
    </ShopBody>
  );
};

export default Shop;
