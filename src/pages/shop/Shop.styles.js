import { Button, Grid } from "@mui/material";
import { styled } from "@mui/system";

export const ShopBody = styled("div")(({ theme }) => ({
  width: "70%",
  margin: "110px auto",
  [theme.breakpoints.up("xl")]: {
    width: "60%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "80%",
  },
  [theme.breakpoints.down("md")]: {
    margin: "85px auto",
    width: "90%",
  },
}));

export const StyledShopContent = styled("div")(({ theme }) => ({
  width: "100%",
  height: "auto",
  margin: "20px auto",
}));

export const StyledFilterBar = styled("div")(({ theme }) => ({
  width: "100%",
  height: "auto",
  backgroundColor: "#fff9eb",
  padding: "20px 0px 50px 0px",
  position: "sticky",
  top: "70",
}));

export const StyledProductsBar = styled("div")(({ theme }) => ({
  width: "100%",
  height: "auto",
}));

export const StyledProductsDiv = styled("div")(({ theme }) => ({
  width: "100%",
  height: "350px",
  textAlign: "center",
  borderRadius: "5px",
  boxShadow: "0 0 6px #dfdfdf",
  // border: "1px solid #f6eedc",
  background: "#fff",
  "&:hover": {
    background: "#fffbf0",
    cursor: "pointer",
  },
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

export const StyledProductsImage = styled("img")(({ theme }) => ({
  width: "92%",
  height: "auto",
  margin: "13px",
}));

export const StyledProductsDivHeader = styled("div")(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 500,
  color: "#555",
  marginTop: "0px",
  textAlign: "center",
  width: "100%",
}));

export const StyledProductsDivText = styled("div")(({ theme }) => ({
  fontSize: "25px",
  fontWeight: 450,
  textAlign: "center",
  color: "#222",
  marginTop: "0px",
}));

export const StyledLinkTagBar = styled(Grid)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 450,
  color: "#222",
}));

export const StyledLinkButton = styled(Button)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 450,
  color: "#222",
  textTransform: "capitalize",
}));
