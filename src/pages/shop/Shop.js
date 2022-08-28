import React, { useEffect, useState } from "react";
import * as ShopStyles from "./Shop.styles";
import ShopFilterBar from "./ShopFilterBar";
import Rating from "@mui/material/Rating";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ListIcon from "@mui/icons-material/List";
import StickyBox from "react-sticky-box";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {CircularProgress, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Skeleton from "@mui/material/Skeleton";
import { formatToCurrency } from "../../utils/currencyFormatter";
import {
  fetchProducts,
  selectAllProducts,
  productStatus,
} from "../../reducers/productSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";



const Shop = () => {
  const dispatch = useDispatch();
  const [viewType, setViewType] = useState(4);
  const [mobileViewType, setMobileViewType] = useState(6);
  const [gridView, setGridView] = useState(() => true);
  const [loaded, setLoaded] = useState(() => false);
  const [wishList, setWishList] = useState([]);
  const allProducts = useSelector(selectAllProducts);
  const status = useSelector(productStatus);

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

  const handleFav = ({ event, product }) => {
    if (event.target.name !== "favButton") {
      event.preventDefault();
      event.stopPropagation();
      if (localStorage.getItem("user")) {
        const user = JSON.parse(localStorage.getItem("user"));

        const data = {
          userID: user._id,
          itemID: product._id,
          wishItemName: product.productName,
          wishItemPrice: product.productPrice,
          wishItemImage: product.productImage[0].image,
        };
        axios
          .post("https://netporch.herokuapp.com/api/wishlist/", data, {})
          .then((res) => {
            setWishList([...wishList, product]);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } 
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  });

  const checkFav = (itemID) => {
    if (wishList.find((item) => item._id === itemID)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    console.log(wishList);
  }, [wishList]);

  

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      exit={{ x: 200, scale: 0, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <ShopStyles.ShopBody sx={{marginBottom:status === "succeeded" ? '50px' : '250px'}}>
        <ShopStyles.StyledLinkTagBar
          container
          direction="row"
          display="flex"
          justifyContent="space-between"
        >
          <Grid item sx={{ display: { xs: "none", md: "block" } }}>
            <ShopStyles.StyledLinkButton>Home </ShopStyles.StyledLinkButton>&gt;
            <ShopStyles.StyledLinkButton>Shop</ShopStyles.StyledLinkButton>&gt;
            <ShopStyles.StyledLinkButton>Smart Watches</ShopStyles.StyledLinkButton>
          </Grid>
          <Grid item>
            <span>View Type: </span>
            <ShopStyles.StyledLinkButton
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
            </ShopStyles.StyledLinkButton>
            <ShopStyles.StyledLinkButton
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
            </ShopStyles.StyledLinkButton>
          </Grid>
        </ShopStyles.StyledLinkTagBar>
        <ShopStyles.StyledShopContent>
          <Grid container spacing={4}>
            <Grid item md={3} xs={12}>
              <StickyBox offsetTop={90} offsetBottom={90}>
                <ShopStyles.StyledFilterBar>
                  <ShopFilterBar
                    position="fixed"
                    style={{ position: "fixed", top: 70 }}
                  />
                </ShopStyles.StyledFilterBar>
              </StickyBox>
            </Grid>
            {status === "succeeded" ? (
              <Grid item md={9}>
                <ShopStyles.StyledProductsBar>
                  <Grid container spacing={2}>
                    {allProducts.map((product) => (
                      <Grid
                        key={product._id}
                        item
                        md={viewType}
                        xs={mobileViewType}
                      >
                        <Link
                          to={`../shop/${product._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <ShopStyles.StyledProductsDiv gridView={gridView}>
                            <div>
                              <ShopStyles.StyledFabButton
                                size="small"
                                color="primary"
                                aria-label="add"
                                name="favButton"
                                gridView={gridView}
                                loaded={loaded}
                                onClick={(e) =>
                                  handleFav({ event: e, product: product })
                                }
                              >
                                {checkFav(product._id) ? (
                                  <FavoriteIcon
                                    sx={{
                                      display: "flex",
                                      justifyContent: "flex-end",
                                      margin: "auto",
                                    }}
                                  />
                                ) : (
                                  <FavoriteBorderOutlinedIcon
                                    sx={{
                                      display: "flex",
                                      justifyContent: "flex-end",
                                      margin: "auto",
                                    }}
                                  />
                                )}
                              </ShopStyles.StyledFabButton>
                              <ShopStyles.StyledProductsImage
                                src={`https://netporch.herokuapp.com/uploads/${product.productImage[0].image}`}
                                onLoad={() => setLoaded(true)}
                                sx={{ display: loaded ? "" : "none" }}
                                gridView={gridView}
                              />
                              <ShopStyles.StyledSkeletonImage gridView={gridView}
                                variant="rectangular"
                                sx={{ display: !loaded ? "flex" : "none" }}
                              />
                            </div>
                            <ShopStyles.StyledProductDetails gridView={gridView}>
                              <ShopStyles.StyledProductsDivHeader gridView={gridView}
                                sx={{ overflow: "ellipse", textAlign:!gridView && 'left',  }}
                              >
                                {loaded ? (
                                  gridView ? (
                                    product.productName.substr(0, 50) + "..."
                                  ) : (
                                    product.productName.substr() + ""
                                  )
                                ) : (
                                  <Skeleton height="60px" />
                                )}
                              </ShopStyles.StyledProductsDivHeader>
                              {loaded ? (
                                <Rating
                                  name="read-only"
                                  value={5}
                                  readOnly
                                  sx={{ margin: "0px auto",  height:'40px' }}
                                />
                              ) : (
                                <Skeleton sx={{ marginTop: "0px", height:'40px' }} />
                              )}
                              <div style={{display:!gridView && 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                              <ShopStyles.StyledProductsDivText gridView={gridView}>
                                {loaded ? (
                                  formatToCurrency(
                                    parseInt(product.productPrice)
                                  )
                                ) : (
                                  <Skeleton sx={{ marginTop: "0px", height:'30px' }}/>
                                )}{" "}
                              </ShopStyles.StyledProductsDivText>
                               <ShopStyles.StyledFabButton2
                                  size="small"
                                  color="primary"
                                  aria-label="add"
                                  name="favButton"
                                  gridView={gridView}
                                  loaded={loaded}
                                  // sx={{ border: checkFav(product._id) && "none" }}
                                  onClick={(e) =>
                                    handleFav({ event: e, product: product })
                                  }

                                >
                                  {checkFav(product._id) ? (
                                    <FavoriteIcon
                                      sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        margin: "auto",
                                      }}
                                    />
                                  ) : (
                                    <FavoriteBorderOutlinedIcon
                                      sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        margin: "auto",
                                      }}
                                    />
                                  )}
                                </ShopStyles.StyledFabButton2>
                              </div>
                            </ShopStyles.StyledProductDetails>
                          </ShopStyles.StyledProductsDiv>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </ShopStyles.StyledProductsBar>
              </Grid>
            ) : (
              <div
                style={{
                  margin: "60px auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CircularProgress />
              </div>
            )}
          </Grid>
        </ShopStyles.StyledShopContent>
      </ShopStyles.ShopBody>
    </motion.div>
  );
};

export default Shop;
