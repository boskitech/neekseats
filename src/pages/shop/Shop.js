import React, { useState } from "react";
// import * as ShopStyles from "./Shop.styles";
import ShopFilterBar from "./ShopFilterBar";
import Watch1 from "../../assets/img/watch_img_21.png";
import Watch2 from "../../assets/img/watch_img_17.png";
import Watch3 from "../../assets/img/watch_img_26.png";
import Rating from "@mui/material/Rating";
// import FavButton from "../../components/favButton/FavButton";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ListIcon from "@mui/icons-material/List";
import StickyBox from "react-sticky-box";
import Fab from "@mui/material/Fab";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
import Skeleton from "@mui/material/Skeleton";

const Shop = () => {
  const navigate = useNavigate();
  const [viewType, setViewType] = useState(4);
  const [mobileViewType, setMobileViewType] = useState(6);
  const [gridView, setGridView] = useState(true);
  const [loaded, setLoaded] = useState(false);

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
    height: gridView ? "auto" : "200px",
    textAlign: gridView && "center",
    borderRadius: "5px",
    boxShadow: "0 0 6px #dfdfdf",
    overflow: "hidden",
    // border: "1px solid #f6eedc",
    padding: gridView && "0px 0px 20px 0px",
    background: "#fff",
    "&:hover": {
      background: "#fffbf0",
      cursor: "pointer",
    },
    [theme.breakpoints.up("xl")]: {
      height: gridView ? "auto" : "200px",
    },
    [theme.breakpoints.down("lg")]: {
      height: gridView ? "auto" : "200px",
    },
    [theme.breakpoints.down("md")]: {
      height: gridView ? "auto" : "200px",
      "&:hover": {
        background: "#fff",
        cursor: "pointer",
      },
    },
    [theme.breakpoints.down("sm")]: {
      height: gridView ? "auto" : "200px",
    },
  }));

  const StyledProductsImage = styled("img")(({ theme }) => ({
    width: gridView ? "200px" : "150px",
    height: gridView ? "200px" : "150px",
    float: !gridView && "left",
    margin: gridView ? "20px auto" : "23px auto",
    [theme.breakpoints.down("md")]: {
      width: gridView ? "150px" : "150px",
      height: gridView ? "150px" : "150px",
      margin: gridView ? "13px" : "10px 0px",
    },
  }));

  const StyledSkeletonImage = styled(Skeleton)(({ theme }) => ({
    width: gridView ? "100%" : "150px",
    height: gridView ? "220px" : "100%",
    float: !gridView && "left",
    margin: gridView ? "0px 0px 25px 0px" : "0px",
    [theme.breakpoints.down("md")]: {
      width: gridView ? "300px" : "150px",
      height: gridView ? "150px" : "100%",
      margin: gridView ? "0px" : "0px",
      overFlow: "hidden",
    },
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
    textAlign: gridView && "center",
    color: "#222",
    marginTop: "0px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
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
    margin: !gridView && "45px 20px",
    [theme.breakpoints.down("md")]: {
      margin: !gridView && "40px 0 0 0",
    },
  }));

  const StyledFabButton = styled(Fab)(({ theme }) => ({
    background: "#fff",
    border: "1px solid #5fa5e3",
    position: gridView ? "absolute" : "relative",
    display: loaded ? "flex" : "none",
    justifyContent: gridView ? "flex-start" : "flex-end",
    alignContent: !gridView && "flex-end",
    color: "#5fa5e3",
    margin: gridView ? "15px" : "140px 15px 15px 15px",
    boxShadow: "none",
    float: "right",
    "&:hover": {
      background: "#416cb7",
      border: "1px solid #416cb7",
      color: "#fff",
    },
    [theme.breakpoints.down("md")]: {
      margin: gridView ? "8px" : "140px 15px 15px 15px",
      position: !gridView && "absolute",
      right: !gridView && "5px",
      border: "none",
      "&:hover": {
        background: "#fff",
        border: "1px solid #fff",
        color: "#fff",
      },
    },
  }));

  return (
    // <motion.div
    //   initial={{ x: 200, opacity: 0 }}
    //   animate={{ x: 0, scale: 1, opacity: 1 }}
    //   exit={{ x: 200, scale: 0, opacity: 0 }}
    //   transition={{ type: "spring", duration: 0.5 }}
    // >
    <ShopBody>
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
            sx={{
              marginLeft: "5px",
              border: gridView ? "2px solid #d89b45" : "1px solid #333",
              "&:hover": {
                border: gridView ? "2px solid #d89b45" : "1px solid #e0c092",
              },
            }}
            startIcon={<GridViewOutlinedIcon />}
            onClick={handleGridView}
          >
            Grid
          </StyledLinkButton>
          <StyledLinkButton
            sx={{
              marginLeft: "5px",
              border: !gridView ? "2px solid #d89b45" : "1px solid #333",
              "&:hover": {
                border: !gridView ? "2px solid #d89b45" : "1px solid #e0c092",
              },
            }}
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
                    <StyledFabButton
                      size="small"
                      color="primary"
                      aria-label="add"
                    >
                      <FavoriteBorderOutlinedIcon
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          margin: "auto",
                        }}
                      />
                    </StyledFabButton>
                    <StyledProductsImage
                      src={Watch1}
                      onLoad={() => setLoaded(true)}
                      sx={{ display: loaded ? "" : "none" }}
                    />
                    <StyledSkeletonImage
                      variant="rectangular"
                      sx={{ display: !loaded ? "" : "none" }}
                    />
                    <StyledProductDetails>
                      <StyledProductsDivHeader>
                        {loaded ? (
                          "Custom Strip Watches"
                        ) : (
                          <Skeleton height="20px" />
                        )}
                      </StyledProductsDivHeader>
                      {loaded ? (
                        <Rating
                          name="read-only"
                          value={5}
                          readOnly
                          sx={{ margin: "10px auto" }}
                        />
                      ) : (
                        <Skeleton />
                      )}
                      <StyledProductsDivText>
                        {loaded ? "$249.99" : <Skeleton />}{" "}
                      </StyledProductsDivText>
                    </StyledProductDetails>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={viewType} xs={mobileViewType}>
                  <StyledProductsDiv onClick={() => navigate("/viewitem")}>
                    <StyledFabButton
                      size="small"
                      color="primary"
                      aria-label="add"
                    >
                      <FavoriteBorderOutlinedIcon
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          margin: "auto",
                        }}
                      />
                    </StyledFabButton>
                    <StyledProductsImage
                      src={Watch2}
                      onLoad={() => setLoaded(true)}
                      sx={{ display: loaded ? "" : "none" }}
                    />
                    <StyledSkeletonImage
                      variant="rectangular"
                      sx={{ display: !loaded ? "" : "none" }}
                    />
                    <StyledProductDetails>
                      <StyledProductsDivHeader>
                        {loaded ? (
                          "Custom Strip Watches"
                        ) : (
                          <Skeleton height="20px" />
                        )}
                      </StyledProductsDivHeader>
                      {loaded ? (
                        <Rating
                          name="read-only"
                          value={5}
                          readOnly
                          sx={{ margin: "10px auto" }}
                        />
                      ) : (
                        <Skeleton />
                      )}
                      <StyledProductsDivText>
                        {loaded ? "$249.99" : <Skeleton />}{" "}
                      </StyledProductsDivText>
                    </StyledProductDetails>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={viewType} xs={mobileViewType}>
                  <StyledProductsDiv onClick={() => navigate("/viewitem")}>
                    <StyledFabButton
                      size="small"
                      color="primary"
                      aria-label="add"
                    >
                      <FavoriteBorderOutlinedIcon
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          margin: "auto",
                        }}
                      />
                    </StyledFabButton>
                    <StyledProductsImage
                      src={Watch3}
                      onLoad={() => setLoaded(true)}
                      sx={{ display: loaded ? "" : "none" }}
                    />
                    <StyledSkeletonImage
                      variant="rectangular"
                      sx={{ display: !loaded ? "" : "none" }}
                    />
                    <StyledProductDetails>
                      <StyledProductsDivHeader>
                        {loaded ? (
                          "Custom Strip Watches"
                        ) : (
                          <Skeleton height="20px" />
                        )}
                      </StyledProductsDivHeader>
                      {loaded ? (
                        <Rating
                          name="read-only"
                          value={5}
                          readOnly
                          sx={{ margin: "10px auto" }}
                        />
                      ) : (
                        <Skeleton />
                      )}
                      <StyledProductsDivText>
                        {loaded ? "$249.99" : <Skeleton />}{" "}
                      </StyledProductsDivText>
                    </StyledProductDetails>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={viewType} xs={mobileViewType}>
                  <StyledProductsDiv onClick={() => navigate("/viewitem")}>
                    <StyledFabButton
                      size="small"
                      color="primary"
                      aria-label="add"
                    >
                      <FavoriteBorderOutlinedIcon
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          margin: "auto",
                        }}
                      />
                    </StyledFabButton>
                    <StyledProductsImage
                      src={Watch1}
                      onLoad={() => setLoaded(true)}
                      sx={{ display: loaded ? "" : "none" }}
                    />
                    <StyledSkeletonImage
                      variant="rectangular"
                      sx={{ display: !loaded ? "" : "none" }}
                    />
                    <StyledProductDetails>
                      <StyledProductsDivHeader>
                        {loaded ? (
                          "Custom Strip Watches"
                        ) : (
                          <Skeleton height="20px" />
                        )}
                      </StyledProductsDivHeader>
                      {loaded ? (
                        <Rating
                          name="read-only"
                          value={5}
                          readOnly
                          sx={{ margin: "10px auto" }}
                        />
                      ) : (
                        <Skeleton />
                      )}
                      <StyledProductsDivText>
                        {loaded ? "$249.99" : <Skeleton />}{" "}
                      </StyledProductsDivText>
                    </StyledProductDetails>
                  </StyledProductsDiv>
                </Grid>
              </Grid>
            </StyledProductsBar>
          </Grid>
        </Grid>
      </StyledShopContent>
    </ShopBody>
    // </motion.div>
  );
};

export default Shop;