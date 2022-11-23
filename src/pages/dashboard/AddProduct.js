import { Button, Grid, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { useCallback, useState } from "react";
import React from "react";
import axios from "axios";

const StyledGridLoginSideDiv = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "auto",
  margin: "100px auto",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: "90%",
    display: "block",
    height: "auto",
    marginTop: "100px",
  },
}));

const StyledGridLoginHeader = styled("div")(({ theme }) => ({
  fontSize: "20px",
  margin: "0px 0px",
  color: "#07163a",
  textAlign: "center",
  fontWeight: 500,
  [theme.breakpoints.down("md")]: {
    margin: "0px 0px", 
  },
}));

const StyledGridLoginInput = styled(TextField)(({ theme }) => ({
  width: "400px",
  height: "50px",
  margin: "10px auto",
  fontSize: "14px",
  backgoundColor: "white",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const StyledGridLoginButton = styled(Button)(({ theme }) => ({
  display: "block",
  width: "400px",
  height: "45px",
  backgroundColor: "#c73217",
  color: "white",
  margin: "10px auto",
  fontWeight: 600,
  "&:hover": { backgroundColor: "#2f53a5", color: "white" },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const StyledImageView = styled("div")({
  width: "100px",
  height: "100px",
  margin: "30px auto 20px auto",
  border: "1px solid #777",
});

const StyledImg = styled("img")({
  width: "100px",
  height: "100px",
});

const AddProduct = React.memo(() => {
  const [productImages, setProductImages] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productShipping, setProductShipping] = useState("");
  const [productColor1, setProductColor1] = useState("");
  const [productColor2, setProductColor2] = useState("");
  const [productColor3, setProductColor3] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const imageChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setProductImages(e.target.files);
    }
  }, []);

  const handleSubmit = () => {
    const formData = new FormData();
    const productData = {
      productName: productName,
      productPrice: productPrice,
      productShipping: productShipping,
      productBrand: productBrand,
      productColor: [
        { color: productColor1 },
        { color: productColor2 },
        { color: productColor3 },
      ],
      productCategory: productCategory,
      productQuantity: productQuantity,
      productImage: {},
      productDescription: productDescription,
    };

    
    for (const single_image of productImages) {
      formData.append("productImage", single_image);
    }
    formData.append("meta", JSON.stringify(productData));

    axios
      .post("https://netporch.herokuapp.com/api/product/", formData, {})
      .then((res) => alert("Success"))
      .catch((err) => console.log(err));

  };

  return (
    <Grid
      container
      display="flex"
      justifyContent="space-around"
      sx={{ width: "100%", margin: "auto" }}
      data-aos="fade-left"
    >
      <Grid item md={5} xs={12}>
        <StyledGridLoginSideDiv
          container
          direction="column"
          display="flex"
          justifyContent="center"
        >
          <Grid item>
            <StyledGridLoginHeader sx={{ fontSize: "25px" }}>
              Add Items
            </StyledGridLoginHeader>
          </Grid>   
          <Grid sx={{ margin: "auto" }} item>
            <StyledGridLoginInput
              placeholder="Product Name"
              value={productName}
              onChange={useCallback((e) => {
                setProductName(e.target.value);
              }, [])}
            />
          </Grid>
          <Grid sx={{ margin: "auto" }} item>
            <StyledGridLoginInput
              placeholder="Product Brand"
              onChange={useCallback((e) => {
                setProductBrand(e.target.value);
              }, [])}
            />
          </Grid>
          <Grid sx={{ margin: "auto" }} item>
            <StyledGridLoginInput
              placeholder="Product Price"
              onChange={useCallback((e) => {
                setProductPrice(e.target.value);
              }, [])} 
            />
          </Grid>
          <Grid sx={{ margin: "auto" }} item>
            <StyledGridLoginInput
              placeholder="Product Quantity"
              onChange={useCallback((e) => {
                setProductQuantity(e.target.value);
              }, [])}
            />
          </Grid>
          <Grid sx={{ margin: "auto" }} item>
            <StyledGridLoginInput
              placeholder="Product Color 1"
              onChange={useCallback((e) => {
                setProductColor1(e.target.value);
              }, [])}
            />
          </Grid>
          <Grid sx={{ margin: "auto" }} item>
            <StyledGridLoginInput
              placeholder="Product Color 2"
              onChange={useCallback((e) => {
                setProductColor2(e.target.value);
              }, [])}
            />
          </Grid>
          <Grid sx={{ margin: "auto" }} item>
            <StyledGridLoginInput
              placeholder="Product Color 3"
              onChange={useCallback((e) => {
                setProductColor3(e.target.value);
              }, [])}
            />
          </Grid>
          <Grid sx={{ margin: "auto" }} item>
            <StyledGridLoginInput
              placeholder="Product Category"
              onChange={useCallback((e) => {
                setProductCategory(e.target.value);
              }, [])}
            />
          </Grid>
          <Grid sx={{ margin: "auto" }} item>
            <StyledGridLoginInput
              placeholder="Product Shipping"
              onChange={useCallback((e) => {
                setProductShipping(e.target.value);
              }, [])}
            />
          </Grid>
          <Grid sx={{ margin: "auto" }} item>
            <StyledGridLoginInput
              placeholder="Product Description"
              multiline
              value={productDescription}
              rows={4}
              onChange={useCallback((e) => {
                setProductDescription(e.target.value);
              }, [])}
            />
          </Grid>
        </StyledGridLoginSideDiv>
      </Grid>
      <Grid item md={5} xs={12} sx={{ marginTop: "150px" }}>
        <StyledImageView>
          {productImages[0] && (
            <StyledImg
              src={URL.createObjectURL(productImages[0])}
              alt="display tag"
            />
          )}
          {!productImages[0] && "Image appears here"}
        </StyledImageView>
        <StyledImageView>
          {productImages[1] && (
            <StyledImg
              src={URL.createObjectURL(productImages[1])}
              alt="display tag"
            />
          )}
          {!productImages[1] && "Image appears here"}
        </StyledImageView>
        <StyledImageView>
          {productImages[2] && (
            <StyledImg
              src={URL.createObjectURL(productImages[2])}
              alt="display tag"
            />
          )}
          {!productImages[2] && "Image appears here"}
        </StyledImageView>
        <StyledImageView>
          {productImages[3] && (
            <StyledImg
              src={URL.createObjectURL(productImages[3])}
              alt="display tag"
            />
          )}
          {!productImages[3] && "Image appears here"}
        </StyledImageView>
        <StyledGridLoginButton
          sx={{
            backgroundColor: "green",
            textAlign: "center",
            fontWeight: 300,
          }}
          variant="contained"
          component="label"
        >
          Upload product image
          <input
            type="file"
            accept="image"
            multiple
            hidden
            onChange={imageChange}
          />
        </StyledGridLoginButton>
        <StyledGridLoginButton onClick={handleSubmit}>
          Add Product
        </StyledGridLoginButton>
      </Grid>
    </Grid>
  );
});

export default AddProduct;
