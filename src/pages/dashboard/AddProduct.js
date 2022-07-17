import { styled } from "@mui/system";
import React from "react";

const AddProduct = () => {
  const AddProductBody = styled("div")(({ theme }) => ({
    width: "70%",
    margin: "100px auto",
    [theme.breakpoints.up("xl")]: {
      width: "60%",
    },
    [theme.breakpoints.down("xl")]: {
      width: "80%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "90%",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  }));
  return <AddProductBody>add_product</AddProductBody>;
};

export default AddProduct;
