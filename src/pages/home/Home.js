import { Grid } from "@mui/material";
import WatchFace from "../../assets/img/watch_face_2.png";
import MobileWatch from "../../assets/img/mobile_bar.png";
import Watch1 from "../../assets/img/watch_img_21.png";
import Watch2 from "../../assets/img/watch_img_19.png";
import Watch3 from "../../assets/img/watch_img_26.png";
import BestWatch from "../../assets/img/watch_img_31.png";
import OfferWatch from "../../assets/img/banner_img_11.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";
import BuyButton from "../../components/buyButton/BuyButton";
import * as HomeStyles from "./Home.styles";
import { useNavigate } from "react-router-dom";
//-------------------------------Welcome Banner Styles--------------------------------

const Home = () => {
  const navigate = useNavigate();

  // const checkToken = useSelector(token)
  return (
    <HomeStyles.HomeBody data-aos="fade-left">
      <HomeStyles.StyledBanner>
        <Grid container>
          <Grid item md={6} sm={12}>
            <HomeStyles.StyledLeftSideBanner>
              <HomeStyles.StyledBannerHeaderText>
                OUR BEST COLLECTIONS FOR YOU
              </HomeStyles.StyledBannerHeaderText>
              <HomeStyles.StyledBannerMobileImage src={MobileWatch} />
              <HomeStyles.StyledBannerText>
                The style of watches available to consumers are endless and
                profit also endless
              </HomeStyles.StyledBannerText>
              <HomeStyles.StyledBannerCartButton
                startIcon={<AddShoppingCartIcon />}
                onClick={() => navigate("/cart")}
              >
                Add to cart
              </HomeStyles.StyledBannerCartButton>
              <HomeStyles.StyledBannerWatchtButton
                startIcon={<HomeStyles.StyledWatchLogo />}
              >
                More info &gt;
              </HomeStyles.StyledBannerWatchtButton>
            </HomeStyles.StyledLeftSideBanner>
          </Grid>
          <Grid item md={6} sm={12}>
            <Grid container direction="column">
              <Grid item>
                <HomeStyles.StyledUpperSideDiv>
                  <HomeStyles.StyledUpperSideHeader>
                    Get up to 30% off
                  </HomeStyles.StyledUpperSideHeader>
                  <HomeStyles.StyledUpperSideText>
                    You can get up to 30 percent discount from here
                  </HomeStyles.StyledUpperSideText>
                </HomeStyles.StyledUpperSideDiv>
              </Grid>
              <Grid item>
                <HomeStyles.StyledLowerSideDiv>
                  <HomeStyles.StyledBackgroundBar>
                    <p
                      style={{
                        fontSize: "19px",
                        fontWeight: 500,
                        paddingTop: "40px",
                      }}
                    >
                      2,445
                      <br />
                      Steps
                    </p>
                  </HomeStyles.StyledBackgroundBar>
                  <p
                    style={{
                      fontSize: "24px",
                      color: "#000",
                      fontWeight: "550",
                      textAlign: "center",
                      margin: "30px auto",
                    }}
                  >
                    8:24:00
                  </p>
                </HomeStyles.StyledLowerSideDiv>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </HomeStyles.StyledBanner>
      {/* features  bar------------------------------------------------------ */}
      <HomeStyles.FeaturesBar>
        <Grid container spacing={4}>
          <Grid item md={4} xs={12}>
            <Grid container direction="row">
              <Grid item md={3}>
                <HomeStyles.FeaturesLogo sx={{ background: "#c2e7f0" }}>
                  <HomeStyles.FeaturesShippingIcon />
                </HomeStyles.FeaturesLogo>
              </Grid>
              <Grid item md={9}>
                <HomeStyles.StyledFeaturesHeading>
                  Free Shipping
                </HomeStyles.StyledFeaturesHeading>
                <HomeStyles.StyledFeaturesText>
                  Free shipping on most orders
                </HomeStyles.StyledFeaturesText>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container>
              <Grid item md={3}>
                <HomeStyles.FeaturesLogo sx={{ background: "#fdd4d4" }}>
                  <HomeStyles.FeaturesSupportIcon />
                </HomeStyles.FeaturesLogo>
              </Grid>
              <Grid item md={9}>
                <HomeStyles.StyledFeaturesHeading>
                  24 Hours Support
                </HomeStyles.StyledFeaturesHeading>
                <HomeStyles.StyledFeaturesText>
                  Contact at every hour of the day
                </HomeStyles.StyledFeaturesText>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container>
              <Grid item md={3}>
                <HomeStyles.FeaturesLogo sx={{ background: "#f1e8b0" }}>
                  <HomeStyles.FeaturesPaymentIcon />
                </HomeStyles.FeaturesLogo>
              </Grid>
              <Grid item md={9}>
                <HomeStyles.StyledFeaturesHeading>
                  Secured Payment
                </HomeStyles.StyledFeaturesHeading>
                <HomeStyles.StyledFeaturesText>
                  Highly secured payment gateway
                </HomeStyles.StyledFeaturesText>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </HomeStyles.FeaturesBar>
      {/* top specs  bar------------------------------------------------------ */}
      <HomeStyles.StyledTopSpecs data-aos="fade-up">
        <HomeStyles.StyledTopSpecsHeader>
          Top Features Of The Watch
        </HomeStyles.StyledTopSpecsHeader>
        <HomeStyles.StyledTopSpecsText>
          The watch has many features ranging from tracking the wearers movement
          to counting the number steps you make and saving so that you can
          access it whenever you like.
        </HomeStyles.StyledTopSpecsText>
        <HomeStyles.StyledBannerMobileImage src={WatchFace} />
        <Grid container sx={{ marginTop: "50px" }}>
          <Grid item md={2.5} xs={6}>
            <HomeStyles.StyledTrackHeader>
              Unic Track
            </HomeStyles.StyledTrackHeader>
            <HomeStyles.StyledTrackText>$55.99</HomeStyles.StyledTrackText>
            <HomeStyles.StyledTrackList>
              Fitness Tracker
              <HomeStyles.StyledTrackIcon />
            </HomeStyles.StyledTrackList>
            <HomeStyles.StyledTrackList>
              Heart Rate Monitor
              <HomeStyles.StyledTrackIcon />
            </HomeStyles.StyledTrackList>
            <HomeStyles.StyledTrackList>
              Battery
              <HomeStyles.StyledTrackIcon />
            </HomeStyles.StyledTrackList>
            <HomeStyles.StyledTrackList>
              Alarm Clock
              <HomeStyles.StyledTrackIcon />
            </HomeStyles.StyledTrackList>
            <HomeStyles.StyledTrackList>
              Sports Tracker
              <HomeStyles.StyledTrackIcon />
            </HomeStyles.StyledTrackList>
            <HomeStyles.StyledTracKBuyButton variant="outlined">
              Buy Now
            </HomeStyles.StyledTracKBuyButton>
          </Grid>
          <Grid item md={7} xs={0}>
            <div
              style={{
                display: "grid",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <HomeStyles.StyledTopSpecImage src={WatchFace} />
            </div>
          </Grid>
          <Grid item md={2.5} xs={6} style={{display:'flex', flexDirection:'row', justifyContent:'end'}}>
            <div>
              <HomeStyles.StyledTrackHeader>
                Smart Track
              </HomeStyles.StyledTrackHeader>
              <HomeStyles.StyledTrackText>$45.99</HomeStyles.StyledTrackText>
              <HomeStyles.StyledTrackList>
                Fitness Tracker
                <HomeStyles.StyledTrackIcon />
              </HomeStyles.StyledTrackList>
              <HomeStyles.StyledTrackList>
                Heart Rate Monitor
                <HomeStyles.StyledTrackIcon />
              </HomeStyles.StyledTrackList>
              <HomeStyles.StyledTrackList>
                Battery
                <HomeStyles.StyledTrackIcon />
              </HomeStyles.StyledTrackList>
              <HomeStyles.StyledTrackList>
                Alarm Clock
                <HomeStyles.StyledTrackIcon />
              </HomeStyles.StyledTrackList>
              <HomeStyles.StyledTrackList>
                Sports Tracker
                <HomeStyles.StyledTrackIcon />
              </HomeStyles.StyledTrackList>
              <HomeStyles.StyledTracKBuyNowButton>
                Buy Now
              </HomeStyles.StyledTracKBuyNowButton>
            </div>
          </Grid>
        </Grid>
      </HomeStyles.StyledTopSpecs>
      {/* Popular Products  bar------------------------------------------------------ */}
      <HomeStyles.StyledPopularProducts>
        <HomeStyles.StyledPopularProductsHeader>
          Popular Products
        </HomeStyles.StyledPopularProductsHeader>
        <HomeStyles.StyledPopularProductsText>
          Most viewed products across our site
        </HomeStyles.StyledPopularProductsText>
        <Grid container spacing={4}>
          <Grid item md={4} xs={12} data-aos="fade-up">
            <HomeStyles.StyledPopularProductsDiv>
              <HomeStyles.StyledPopularProductsImage src={Watch1} />
              <HomeStyles.StyledPopularProductsDivHeader>
                Chronic Apple Watches
              </HomeStyles.StyledPopularProductsDivHeader>
              <HomeStyles.StyledPopularProductsDivText>
                $149.99
                <HomeStyles.StyledStrikedProductsDivText>
                  $179.99
                </HomeStyles.StyledStrikedProductsDivText>
              </HomeStyles.StyledPopularProductsDivText>
              <Rating
                name="read-only"
                value={4}
                readOnly
                sx={{ margin: "10px auto" }}
              />
            </HomeStyles.StyledPopularProductsDiv>
          </Grid>
          <Grid item md={4} xs={12} data-aos="fade-up">
            <HomeStyles.StyledPopularProductsDiv>
              <HomeStyles.StyledPopularProductsImage src={Watch2} />
              <HomeStyles.StyledPopularProductsDivHeader>
                Watch Proof Watches
              </HomeStyles.StyledPopularProductsDivHeader>
              <HomeStyles.StyledPopularProductsDivText>
                $199.99
                <HomeStyles.StyledStrikedProductsDivText>
                  $249.99
                </HomeStyles.StyledStrikedProductsDivText>
              </HomeStyles.StyledPopularProductsDivText>
              <Rating
                name="read-only"
                value={5}
                readOnly
                sx={{ margin: "10px auto" }}
              />
            </HomeStyles.StyledPopularProductsDiv>
          </Grid>
          <Grid item md={4} xs={12} data-aos="fade-up">
            <HomeStyles.StyledPopularProductsDiv>
              <HomeStyles.StyledPopularProductsImage src={Watch3} />
              <HomeStyles.StyledPopularProductsDivHeader>
                Custom Strip Watches
              </HomeStyles.StyledPopularProductsDivHeader>
              <HomeStyles.StyledPopularProductsDivText>
                $249.99
                <HomeStyles.StyledStrikedProductsDivText>
                  $349.99
                </HomeStyles.StyledStrikedProductsDivText>
              </HomeStyles.StyledPopularProductsDivText>
              <Rating
                name="read-only"
                value={5}
                readOnly
                sx={{ margin: "10px auto" }}
              />
            </HomeStyles.StyledPopularProductsDiv>
          </Grid>
        </Grid>
      </HomeStyles.StyledPopularProducts>
      {/* Best Time  bar------------------------------------------------------ */}
      <HomeStyles.StyledBestTime>
        <Grid container spacing={7}>
          <Grid item md={6} xs={12} data-aos="fade-up">
            <HomeStyles.StyledBestTimeDiv>
              <HomeStyles.StyledBestTimeImage src={BestWatch} />
            </HomeStyles.StyledBestTimeDiv>
          </Grid>
          <Grid item md={6} xs={12} data-aos="fade-up">
            <HomeStyles.StyledBestTimeHeader>
              The Best Product For Your Best Time
            </HomeStyles.StyledBestTimeHeader>
            <HomeStyles.StyledBestTimeText>
              Time awaits no man. Why not take care of time with our smart wrist
              watches. The most affordable you can get anywhere across the net.
            </HomeStyles.StyledBestTimeText>
            <BuyButton>See Products</BuyButton>
          </Grid>
        </Grid>
      </HomeStyles.StyledBestTime>
      {/* offer  bar------------------------------------------------------ */}
      <HomeStyles.StyledOfferBar data-aos="fade-up">
        <HomeStyles.StyledBannerMobileImage src={WatchFace} />
        <Grid container spacing={7}>
          <Grid item md={7} xs={12}>
            <HomeStyles.StyledOfferBarHeader>
              Buy now and get up to 30% discount
            </HomeStyles.StyledOfferBarHeader>
            <HomeStyles.StyledOfferBarText>
              Get access to the most reliable set of smart watches with
              varieties of options
            </HomeStyles.StyledOfferBarText>
            <BuyButton>Buy Now</BuyButton>
          </Grid>
          <Grid
            sx={{ display: { xs: "none", md: "block" } }}
            item
            md={5}
            xs={12}
          >
            <HomeStyles.StyledOfferBarImage src={OfferWatch} />
          </Grid>
        </Grid>
      </HomeStyles.StyledOfferBar>
    </HomeStyles.HomeBody>
  );
};

export default Home;
