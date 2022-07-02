import { Grid } from "@mui/material";
import React from "react";
import ShopFilterBar from "./ShopFilterBar";
import Watch1 from "../../assets/img/watch_img_21.png";
import Watch2 from "../../assets/img/watch_img_19.png";
import Watch3 from "../../assets/img/watch_img_26.png";
import Rating from "@mui/material/Rating";
import FavButton from "../../components/favButton/FavButton";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ListIcon from "@mui/icons-material/List";
import * as ShopStyles from "./Shop.styles";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Shop = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      exit={{ x: 200, scale: 0, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <ShopStyles.ShopBody data-aos="fade-left">
        <ShopStyles.StyledLinkTagBar
          container
          direction="row"
          display="flex"
          justifyContent="space-between"
        >
          <Grid item sx={{ display: { xs: "none", md: "block" } }}>
            <ShopStyles.StyledLinkButton>Home </ShopStyles.StyledLinkButton>&gt;
            <ShopStyles.StyledLinkButton>Shop</ShopStyles.StyledLinkButton>&gt;
            <ShopStyles.StyledLinkButton>
              Smart Watches
            </ShopStyles.StyledLinkButton>
          </Grid>
          <Grid item>
            <span>View Type: </span>
            <ShopStyles.StyledLinkButton
              variant="outlined"
              sx={{ marginLeft: "5px", border: "1px solid #333" }}
              startIcon={<GridViewOutlinedIcon />}
            >
              Grid
            </ShopStyles.StyledLinkButton>
            <ShopStyles.StyledLinkButton
              sx={{ marginLeft: "5px", border: "1px solid #333" }}
              variant="outlined"
              startIcon={<ListIcon />}
            >
              List
            </ShopStyles.StyledLinkButton>
          </Grid>
        </ShopStyles.StyledLinkTagBar>
        <ShopStyles.StyledShopContent>
          <Grid container spacing={4}>
            <Grid item md={3} xs={12}>
              <ShopStyles.StyledFilterBar>
                <ShopFilterBar />
              </ShopStyles.StyledFilterBar>
            </Grid>
            <Grid item md={9}>
              <ShopStyles.StyledProductsBar>
                <Grid container spacing={2}>
                  <Grid item md={4} xs={6}>
                    <ShopStyles.StyledProductsDiv
                      onClick={() => navigate("/viewitem")}
                    >
                      <FavButton />
                      <ShopStyles.StyledProductsImage src={Watch1} />
                      <ShopStyles.StyledProductsDivHeader>
                        Custom Strip Watches
                      </ShopStyles.StyledProductsDivHeader>
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        sx={{ margin: "10px auto" }}
                      />
                      <ShopStyles.StyledProductsDivText>
                        $249.99
                      </ShopStyles.StyledProductsDivText>
                    </ShopStyles.StyledProductsDiv>
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ShopStyles.StyledProductsDiv
                      onClick={() => navigate("/viewitem")}
                    >
                      <FavButton />
                      <ShopStyles.StyledProductsImage src={Watch2} />
                      <ShopStyles.StyledProductsDivHeader>
                        Custom Strip Watches
                      </ShopStyles.StyledProductsDivHeader>
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        sx={{ margin: "10px auto" }}
                      />
                      <ShopStyles.StyledProductsDivText>
                        $249.99
                      </ShopStyles.StyledProductsDivText>
                    </ShopStyles.StyledProductsDiv>
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ShopStyles.StyledProductsDiv
                      onClick={() => navigate("/viewitem")}
                    >
                      <FavButton />
                      <ShopStyles.StyledProductsImage src={Watch3} />
                      <ShopStyles.StyledProductsDivHeader>
                        Custom Strip Watches
                      </ShopStyles.StyledProductsDivHeader>
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        sx={{ margin: "10px auto" }}
                      />
                      <ShopStyles.StyledProductsDivText>
                        $249.99
                      </ShopStyles.StyledProductsDivText>
                    </ShopStyles.StyledProductsDiv>
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ShopStyles.StyledProductsDiv
                      onClick={() => navigate("/viewitem")}
                    >
                      <FavButton />
                      <ShopStyles.StyledProductsImage src={Watch3} />
                      <ShopStyles.StyledProductsDivHeader>
                        Custom Strip Watches
                      </ShopStyles.StyledProductsDivHeader>
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        sx={{ margin: "10px auto" }}
                      />
                      <ShopStyles.StyledProductsDivText>
                        $249.99
                      </ShopStyles.StyledProductsDivText>
                    </ShopStyles.StyledProductsDiv>
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ShopStyles.StyledProductsDiv
                      onClick={() => navigate("/viewitem")}
                    >
                      <FavButton />
                      <ShopStyles.StyledProductsImage src={Watch1} />
                      <ShopStyles.StyledProductsDivHeader>
                        Custom Strip Watches
                      </ShopStyles.StyledProductsDivHeader>
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        sx={{ margin: "10px auto" }}
                      />
                      <ShopStyles.StyledProductsDivText>
                        $249.99
                      </ShopStyles.StyledProductsDivText>
                    </ShopStyles.StyledProductsDiv>
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ShopStyles.StyledProductsDiv
                      onClick={() => navigate("/viewitem")}
                    >
                      <FavButton />
                      <ShopStyles.StyledProductsImage src={Watch2} />
                      <ShopStyles.StyledProductsDivHeader>
                        Custom Strip Watches
                      </ShopStyles.StyledProductsDivHeader>
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        sx={{ margin: "10px auto" }}
                      />
                      <ShopStyles.StyledProductsDivText>
                        $249.99
                      </ShopStyles.StyledProductsDivText>
                    </ShopStyles.StyledProductsDiv>
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ShopStyles.StyledProductsDiv
                      onClick={() => navigate("/viewitem")}
                    >
                      <FavButton />
                      <ShopStyles.StyledProductsImage src={Watch3} />
                      <ShopStyles.StyledProductsDivHeader>
                        Custom Strip Watches
                      </ShopStyles.StyledProductsDivHeader>
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        sx={{ margin: "10px auto" }}
                      />
                      <ShopStyles.StyledProductsDivText>
                        $249.99
                      </ShopStyles.StyledProductsDivText>
                    </ShopStyles.StyledProductsDiv>
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ShopStyles.StyledProductsDiv
                      onClick={() => navigate("/viewitem")}
                    >
                      <FavButton />
                      <ShopStyles.StyledProductsImage src={Watch3} />
                      <ShopStyles.StyledProductsDivHeader>
                        Custom Strip Watches
                      </ShopStyles.StyledProductsDivHeader>
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        sx={{ margin: "10px auto" }}
                      />
                      <ShopStyles.StyledProductsDivText>
                        $249.99
                      </ShopStyles.StyledProductsDivText>
                    </ShopStyles.StyledProductsDiv>
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ShopStyles.StyledProductsDiv
                      onClick={() => navigate("/viewitem")}
                    >
                      <FavButton />
                      <ShopStyles.StyledProductsImage src={Watch1} />
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        sx={{ margin: "10px auto" }}
                      />
                      <ShopStyles.StyledProductsDivText>
                        $249.99
                      </ShopStyles.StyledProductsDivText>
                    </ShopStyles.StyledProductsDiv>
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ShopStyles.StyledProductsDiv>
                      <FavButton />
                      <ShopStyles.StyledProductsImage src={Watch2} />
                      <ShopStyles.StyledProductsDivHeader>
                        Custom Strip Watches
                      </ShopStyles.StyledProductsDivHeader>
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        sx={{ margin: "10px auto" }}
                      />
                      <ShopStyles.StyledProductsDivText>
                        $249.99
                      </ShopStyles.StyledProductsDivText>
                    </ShopStyles.StyledProductsDiv>
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ShopStyles.StyledProductsDiv>
                      <FavButton />
                      <ShopStyles.StyledProductsImage src={Watch3} />
                      <ShopStyles.StyledProductsDivHeader>
                        Custom Strip Watches
                      </ShopStyles.StyledProductsDivHeader>
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        sx={{ margin: "10px auto" }}
                      />
                      <ShopStyles.StyledProductsDivText>
                        $249.99
                      </ShopStyles.StyledProductsDivText>
                    </ShopStyles.StyledProductsDiv>
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ShopStyles.StyledProductsDiv>
                      <FavButton />
                      <ShopStyles.StyledProductsImage src={Watch3} />
                      <ShopStyles.StyledProductsDivHeader>
                        Custom Strip Watches
                      </ShopStyles.StyledProductsDivHeader>
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        sx={{ margin: "10px auto" }}
                      />
                      <ShopStyles.StyledProductsDivText>
                        $249.99
                      </ShopStyles.StyledProductsDivText>
                    </ShopStyles.StyledProductsDiv>
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ShopStyles.StyledProductsDiv>
                      <FavButton />
                      <ShopStyles.StyledProductsImage src={Watch1} />
                      <ShopStyles.StyledProductsDivHeader>
                        Custom Strip Watches
                      </ShopStyles.StyledProductsDivHeader>
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        sx={{ margin: "10px auto" }}
                      />
                      <ShopStyles.StyledProductsDivText>
                        $249.99
                      </ShopStyles.StyledProductsDivText>
                    </ShopStyles.StyledProductsDiv>
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ShopStyles.StyledProductsDiv>
                      <FavButton />
                      <ShopStyles.StyledProductsImage src={Watch2} />
                      <ShopStyles.StyledProductsDivHeader>
                        Custom Strip Watches
                      </ShopStyles.StyledProductsDivHeader>
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        sx={{ margin: "10px auto" }}
                      />
                      <ShopStyles.StyledProductsDivText>
                        $249.99
                      </ShopStyles.StyledProductsDivText>
                    </ShopStyles.StyledProductsDiv>
                  </Grid>
                </Grid>
              </ShopStyles.StyledProductsBar>
            </Grid>
          </Grid>
        </ShopStyles.StyledShopContent>
      </ShopStyles.ShopBody>
    </motion.div>
  );
};

export default Shop;
