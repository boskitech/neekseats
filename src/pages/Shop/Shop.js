import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

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
    height: 420,
    border: "1px solid brown",
  }));

  const StyledProductsBar = styled("div")(({ theme }) => ({
    width: "100%",
    height: 420,
    border: "1px solid brown",
  }));

  return (
    <ShopBody>
      <StyledShopContent>
        <Grid container spacing={6}>
          <Grid item md={3.5}>
            <StyledFilterBar></StyledFilterBar>
          </Grid>
          <Grid item md={8.5}>
            <StyledProductsBar></StyledProductsBar>
          </Grid>
        </Grid>
      </StyledShopContent>
    </ShopBody>
  );
};

export default Shop;
