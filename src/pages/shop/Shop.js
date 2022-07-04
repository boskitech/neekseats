import React, { useState } from "react";
// import * as ShopStyles from "./Shop.styles";
import ShopFilterBar from "./ShopFilterBar";
import Watch1 from "../../assets/img/watch_img_21.png";
import Watch2 from "../../assets/img/watch_img_19.png";
import Watch3 from "../../assets/img/watch_img_26.png";
import Rating from "@mui/material/Rating";
import FavButton from "../../components/favButton/FavButton";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ListIcon from "@mui/icons-material/List";
import StickyBox from "react-sticky-box";
import { Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Shop = () => {
  const navigate = useNavigate();
  const [viewType, setViewType] = useState(4);
  const [mobileViewType, setMobileViewType] = useState(6);
  const [gridView, setGridView] = useState(true);

  const handleListView = () => {
    setViewType(12);
    setMobileViewType(12);
    setGridView(false);
  };

  const handleGridView = () => {
    setViewType(4);
    setMobileViewType(6);
    setGridView(true);
  };

  const ShopBody = styled("div")(({ theme }) => ({
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

  const StyledShopContent = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto",
    margin: "20px auto",
  }));

  const StyledFilterBar = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto",
    backgroundColor: "#fff9eb",
    padding: "20px 0px 50px 0px",
    position: "sticky",
    top: "70",
  }));

  const StyledProductsBar = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto",
  }));

  const StyledProductsDiv = styled("div")(({ theme }) => ({
    width: "100%",
    height: gridView ? "350px" : "200px",
    textAlign: gridView ? "center" : "",
    borderRadius: "5px",
    boxShadow: "0 0 6px #dfdfdf",
    // border: "1px solid #f6eedc",
    background: "#fff",
    "&:hover": {
      background: "#fffbf0",
      cursor: "pointer",
    },
    [theme.breakpoints.up("xl")]: {
      height: gridView ? "400px" : "200px",
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
    width: gridView ? "92%" : "150px",
    height: gridView ? "auto" : "150px",
    float: !gridView && "left",
    margin: gridView ? "13px" : "23px",
  }));

  const StyledProductsDivHeader = styled("div")(({ theme }) => ({
    fontSize: "16px",
    fontWeight: 500,
    color: "#555",
    marginTop: "0px",
    textAlign: "center",
    width: "100%",
  }));

  const StyledProductsDivText = styled("div")(({ theme }) => ({
    fontSize: "25px",
    fontWeight: 450,
    textAlign: "center",
    color: "#222",
    marginTop: "0px",
  }));

  const StyledLinkTagBar = styled(Grid)(({ theme }) => ({
    fontSize: "13px",
    fontWeight: 450,
    color: "#222",
  }));

  const StyledLinkButton = styled(Button)(({ theme }) => ({
    fontSize: "13px",
    fontWeight: 450,
    color: "#222",
    textTransform: "capitalize",
  }));

  const StyledProductDetails = styled("div")(({ theme }) => ({
    float: !gridView && "left",
    margin: !gridView && "55px 20px",
  }));

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      exit={{ x: 200, scale: 0, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <ShopBody data-aos="fade-left">
        <StyledLinkTagBar
          container
          direction="row"
          display="flex"
          justifyContent="space-between"
        >
          <Grid item sx={{ display: { xs: "none", md: "block" } }}>
            <StyledLinkButton>Home </StyledLinkButton>&gt;
            <StyledLinkButton>Shop</StyledLinkButton>&gt;
            <StyledLinkButton>Smart Watches</StyledLinkButton>
          </Grid>
          <Grid item>
            <span>View Type: </span>
            <StyledLinkButton
              variant="outlined"
              sx={{ marginLeft: "5px", border: "1px solid #333" }}
              startIcon={<GridViewOutlinedIcon />}
              onClick={handleGridView}
            >
              Grid
            </StyledLinkButton>
            <StyledLinkButton
              sx={{ marginLeft: "5px", border: "1px solid #333" }}
              variant="outlined"
              startIcon={<ListIcon />}
              onClick={handleListView}
            >
              List
            </StyledLinkButton>
          </Grid>
        </StyledLinkTagBar>
        <StyledShopContent>
          <Grid container spacing={4}>
            <Grid item md={3} xs={12}>
              <StickyBox offsetTop={90} offsetBottom={90}>
                <StyledFilterBar>
                  <ShopFilterBar
                    position="fixed"
                    style={{ position: "fixed", top: 70 }}
                  />
                </StyledFilterBar>
              </StickyBox>
            </Grid>
            <Grid item md={9}>
              <StyledProductsBar>
                <Grid container spacing={2}>
                  <Grid item md={viewType} xs={mobileViewType}>
                    <StyledProductsDiv onClick={() => navigate("/viewitem")}>
                      <FavButton sx={{ float: !gridView && "left" }} />
                      <StyledProductsImage src={Watch1} />
                      <StyledProductDetails>
                        <StyledProductsDivHeader>
                          Custom Strip Watches
                        </StyledProductsDivHeader>
                        <Rating
                          name="read-only"
                          value={5}
                          readOnly
                          sx={{ margin: "10px auto" }}
                        />
                        <StyledProductsDivText>$249.99</StyledProductsDivText>
                      </StyledProductDetails>
                    </StyledProductsDiv>
                  </Grid>
                  <Grid item md={viewType} xs={mobileViewType}>
                    <StyledProductsDiv onClick={() => navigate("/viewitem")}>
                      <FavButton />
                      <StyledProductsImage src={Watch2} />
                      <StyledProductDetails>
                        <StyledProductsDivHeader>
                          Custom Strip Watches
                        </StyledProductsDivHeader>
                        <Rating
                          name="read-only"
                          value={5}
                          readOnly
                          sx={{ margin: "10px auto" }}
                        />
                        <StyledProductsDivText>$249.99</StyledProductsDivText>
                      </StyledProductDetails>
                    </StyledProductsDiv>
                  </Grid>
                  <Grid item md={viewType} xs={mobileViewType}>
                    <StyledProductsDiv onClick={() => navigate("/viewitem")}>
                      <FavButton />
                      <StyledProductsImage src={Watch3} />
                      <StyledProductDetails>
                        <StyledProductsDivHeader>
                          Custom Strip Watches
                        </StyledProductsDivHeader>
                        <Rating
                          name="read-only"
                          value={5}
                          readOnly
                          sx={{ margin: "10px auto" }}
                        />
                        <StyledProductsDivText>$249.99</StyledProductsDivText>
                      </StyledProductDetails>
                    </StyledProductsDiv>
                  </Grid>
                </Grid>
              </StyledProductsBar>
            </Grid>
          </Grid>
        </StyledShopContent>
      </ShopBody>
    </motion.div>
  );
};

export default Shop;
