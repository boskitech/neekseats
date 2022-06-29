import { Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import BannerImg from "../../assets/img/banner_img_6.png";
import WatchLogo from "../../assets/img/watch_img_23.png";
import WatchFace from "../../assets/img/watch_face_2.png";
import MobileWatch from "../../assets/img/mobile_bar.png";
import Watch1 from "../../assets/img/watch_img_21.png";
import Watch2 from "../../assets/img/watch_img_19.png";
import Watch3 from "../../assets/img/watch_img_26.png";
import BestWatch from "../../assets/img/watch_img_31.png";
import OfferWatch from "../../assets/img/banner_img_11.png";
import ProgressBar from "../../assets/img/progressBar.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import Rating from "@mui/material/Rating";
import BuyButton from "../../components/buyButton/BuyButton";

//-------------------------------Welcome Banner Styles--------------------------------

const Home = () => {
  const HomeBody = styled("div")(({ theme }) => ({
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

  const StyledBanner = styled("div")(({ theme }) => ({
    width: "100%",
    height: 420,
    margin: "100px auto",
    backgroundImage: `url(${BannerImg})`,
    backgroundSize: "630px 420px",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "60%",
    color: "white",
    [theme.breakpoints.down("md")]: {
      margin: "70px auto",
      backgroundImage: `none`,
      height: "auto",
    },
  }));

  const StyledUpperSideDiv = styled("div")(({ theme }) => ({
    width: "180px",
    height: "auto",
    marginTop: "30px",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 0 20px #dfdfdf",
    backgroundColor: "white",
    float: "right",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const StyledLeftSideBanner = styled("div")(({ theme }) => ({
    width: "70%",
    marginTop: "30px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: "10px",
    },
  }));

  const StyledBannerHeaderText = styled("div")(({ theme }) => ({
    fontSize: "48px",
    fontWeight: 800,
    color: "#000",
    lineHeight: "65px",
  }));

  const StyledBannerText = styled("div")(({ theme }) => ({
    fontSize: "15px",
    fontWeight: 420,
    color: "#000",
    lineHeight: "20px",
    marginTop: "15px",
  }));

  const StyledBannerCartButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#c73217",
    color: "white",
    width: "135px",
    marginTop: "30px",
    padding: "10px",
    fontSize: "11px",
    marginRight: "10px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "50px",
      fontWeight: 500,
      fontSize: "15px",
    },
  }));

  const StyledBannerMobileImage = styled("img")(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      width: "100%",
      height: "auto",
      margin: "30px auto",
    },
  }));

  const StyledBannerWatchtButton = styled(Button)(({ theme }) => ({
    backgroundColor: "none",
    color: "black",
    width: "135px",
    marginTop: "30px",
    fontSize: "10px",
    fontWeight: 600,
    marginRight: "10px",
    padding: "2px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "50px",
      marginTop: "20px",
      fontSize: "14px",
    },
  }));

  const StyledWatchLogo = styled("div")(({ theme }) => ({
    width: "40px",
    height: "37px",
    backgroundImage: `url(${WatchLogo})`,
    backgroundSize: "38px 38px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    clear: "both",
    float: "right",
  }));

  const StyledUpperSideHeader = styled("div")(({ theme }) => ({
    fontSize: "18px",
    fontWeight: 600,
    color: "#000",
  }));

  const StyledUpperSideText = styled("div")(({ theme }) => ({
    fontSize: "13px",
    fontWeight: 400,
    color: "#666",
    marginTop: "7px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const StyledLowerSideDiv = styled("div")(({ theme }) => ({
    width: "180px",
    height: "200px",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 0 20px #dfdfdf",
    backgroundColor: "white",
    float: "right",
    bottom: 0,
    marginTop: "70px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const StyledBackgroundBar = styled("div")(({ theme }) => ({
    width: "130px",
    height: "130px",
    margin: "-15px auto",
    color: "black",
    textAlign: "center",
    backgroundImage: `url(${ProgressBar})`,
    backgroundSize: "130px 130px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    clear: "both",
  }));

  //-------------------------------Features Bar Styles--------------------------------

  const FeaturesBar = styled(Grid)(({ theme }) => ({
    width: "100%",
    height: "auto",
    color: "black",
    boxShadow: "0 0 20px #dfdfdf",
    padding: "20px",
  }));

  const FeaturesLogo = styled(Grid)(({ theme }) => ({
    width: "70px",
    height: "70px",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      width: "50px",
      height: "50px",
    },
  }));

  const FeaturesShippingIcon = styled(LocalShippingOutlinedIcon)(
    ({ theme }) => ({
      width: "50px",
      height: "50px",
      padding: "10px",
      color: "#5eb3d4",
      [theme.breakpoints.down("md")]: {
        width: "30px",
        height: "30px",
      },
    })
  );

  const FeaturesSupportIcon = styled(CallOutlinedIcon)(({ theme }) => ({
    width: "50px",
    height: "50px",
    padding: "10px",
    color: "#d87676",
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
  }));

  const FeaturesPaymentIcon = styled(SecurityOutlinedIcon)(({ theme }) => ({
    width: "50px",
    height: "50px",
    padding: "10px",
    color: "#afae4f ",
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
  }));

  const StyledFeaturesHeading = styled("div")(({ theme }) => ({
    fontSize: "18px",
    fontWeight: 600,
    color: "#000",
    [theme.breakpoints.down("md")]: {
      margin: "0px 15px",
    },
  }));

  const StyledFeaturesText = styled("div")(({ theme }) => ({
    fontSize: "13px",
    fontWeight: 400,
    color: "#666",
    marginTop: "7px",
    [theme.breakpoints.down("md")]: {
      margin: "0px 15px",
    },
  }));

  //-------------------------------Specs Bar Styles--------------------------------

  const StyledTopSpecs = styled("div")(({ theme }) => ({
    width: "100%",
    marginTop: "50px",
  }));

  const StyledTopSpecsHeader = styled("div")(({ theme }) => ({
    width: "50%",
    fontSize: "30px",
    textAlign: "center",
    fontWeight: 600,
    color: "#000",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  }));

  const StyledTopSpecsText = styled("div")(({ theme }) => ({
    width: "60%",
    fontSize: "15px",
    textAlign: "center",
    fontWeight: 400,
    color: "#666",
    margin: "18px auto",
    lineHeight: "18px",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  }));

  const StyledTrackText = styled("div")(({ theme }) => ({
    fontSize: "19px",
    fontWeight: 400,
    color: "#f0593e",
    margin: "5px auto",
  }));

  const StyledTrackHeader = styled("div")(({ theme }) => ({
    fontSize: "25px",
    fontWeight: 500,
    color: "#000",
  }));

  const StyledTrackList = styled("div")(({ theme }) => ({
    width: "170px",
    fontSize: "14px",
    fontWeight: 440,
    color: "#222",
    marginTop: "15px",
    [theme.breakpoints.down("md")]: {
      width: "150px",
    },
  }));

  const StyledTrackIcon = styled(CheckCircleOutlineOutlinedIcon)(
    ({ theme }) => ({
      fontSize: "14px",
      fontWeight: 450,
      float: "right",
      color: "#f0593e",
    })
  );

  const StyledTracKBuyButton = styled(Button)(({ theme }) => ({
    fontSize: "13px",
    fontWeight: 450,
    color: "#b43e3a",
    marginTop: "27px",
    border: "2px solid #b43e3a",
  }));

  const StyledTracKBuyNowButton = styled(Button)(({ theme }) => ({
    fontSize: "13px",
    fontWeight: 450,
    color: "#fff",
    marginTop: "27px",
    background: "#b43e3a",
  }));

  const StyledTopSpecImage = styled("img")(({ theme }) => ({
    width: "500px",
    height: "auto",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  //----------------------Popular Products Styles--------------------------------

  const StyledPopularProducts = styled("div")(({ theme }) => ({
    width: "100%",
    marginTop: "100px",
  }));

  const StyledPopularProductsHeader = styled("div")(({ theme }) => ({
    fontSize: "30px",
    fontWeight: 600,
    color: "#000",
    margin: "auto",
  }));

  const StyledPopularProductsText = styled("div")(({ theme }) => ({
    fontSize: "15px",
    fontWeight: 400,
    color: "#666",
    margin: "8px auto",
    lineHeight: "18px",
  }));

  const StyledPopularProductsDiv = styled("div")(({ theme }) => ({
    width: "94%",
    height: "auto",
    padding: "10px",
    textAlign: "center",
    borderRadius: "5px",
    boxShadow: "0 0 10px #dfdfdf",
    backgroundColor: "white",
    marginTop: "20px",
  }));

  const StyledPopularProductsImage = styled("img")(({ theme }) => ({
    width: "200px",
    height: "auto",
    margin: "auto",
  }));

  const StyledPopularProductsDivHeader = styled("div")(({ theme }) => ({
    fontSize: "18px",
    fontWeight: 800,
    color: "black",
    marginTop: "17px",
    textAlign: "center",
    width: "100%",
  }));

  const StyledPopularProductsDivText = styled("div")(({ theme }) => ({
    fontSize: "16px",
    fontWeight: 450,
    textAlign: "center",
    color: "red",
    marginTop: "10px",
  }));

  const StyledStrikedProductsDivText = styled("span")(({ theme }) => ({
    fontSize: "16px",
    fontWeight: 450,
    textAlign: "center",
    color: "#888",
    marginLeft: "8px",
    textDecoration: "line-through",
  }));

  // const StyledPopularProductsButton = styled(Button)(({ theme }) => ({
  //   fontSize: "10px",
  //   fontWeight: 450,
  //   color: "#b43e3a",
  //   marginTop: "27px",
  //   border: "2px solid #b43e3a",
  // }));

  //----------------------Best Time Styles--------------------------------

  const StyledBestTime = styled("div")(({ theme }) => ({
    width: "100%",
    marginTop: "100px",
  }));

  const StyledBestTimeHeader = styled("div")(({ theme }) => ({
    fontSize: "35px",
    fontWeight: 600,
    color: "#000",
    lineHeight: "45px",
    margin: "30px auto 0 auto",
  }));

  const StyledBestTimeText = styled("div")(({ theme }) => ({
    fontSize: "15px",
    fontWeight: 400,
    color: "#666",
    margin: "10px auto",
    lineHeight: "18px",
  }));

  const StyledBestTimeDiv = styled("div")(({ theme }) => ({
    width: "70%",
    height: "auto",
    padding: "30px 20px",
    textAlign: "center",
    borderRadius: "20px",
    border: "25px solid #e9a135",
    boxShadow: "0 0 10px #dfdfdf",
    backgroundColor: "white",
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
  }));

  const StyledBestTimeImage = styled("img")(({ theme }) => ({
    width: "250px",
    height: "auto",
    margin: "auto",
  }));

  //----------------------Discount Styles--------------------------------

  const StyledOfferBar = styled(Grid)(({ theme }) => ({
    width: "100%",
    height: "auto",
    color: "black",
    padding: "10px 30px",
    backgroundColor: "#fff9eb",
    borderRaduis: "10px",
    margin: "100px 0",
  }));

  const StyledOfferBarHeader = styled("div")(({ theme }) => ({
    fontSize: "35px",
    fontWeight: 600,
    color: "#000",
    lineHeight: "45px",
    margin: "30px auto 0 auto",
  }));

  const StyledOfferBarText = styled("div")(({ theme }) => ({
    fontSize: "15px",
    fontWeight: 400,
    color: "#666",
    margin: "10px auto",
    lineHeight: "18px",
  }));

  const StyledOfferBarImage = styled("img")(({ theme }) => ({
    width: "300px",
    height: "auto",
    margin: "auto",
  }));

  return (
    <HomeBody>
      <StyledBanner>
        <Grid container>
          <Grid item md={6} sm={12}>
            <StyledLeftSideBanner>
              <StyledBannerHeaderText>
                OUR BEST COLLECTIONS FOR YOU
              </StyledBannerHeaderText>
              <StyledBannerMobileImage src={MobileWatch} />
              <StyledBannerText>
                The style of watches available to consumers are endless and
                profit also endless
              </StyledBannerText>
              <StyledBannerCartButton startIcon={<AddShoppingCartIcon />}>
                Add to cart
              </StyledBannerCartButton>
              <StyledBannerWatchtButton startIcon={<StyledWatchLogo />}>
                More info &gt;
              </StyledBannerWatchtButton>
            </StyledLeftSideBanner>
          </Grid>
          <Grid item md={6} sm={12}>
            <Grid container direction="column">
              <Grid item>
                <StyledUpperSideDiv>
                  <StyledUpperSideHeader>
                    Get up to 30% off
                  </StyledUpperSideHeader>
                  <StyledUpperSideText>
                    You can get up to 30 percent discount from here
                  </StyledUpperSideText>
                </StyledUpperSideDiv>
              </Grid>
              <Grid item>
                <StyledLowerSideDiv>
                  <StyledBackgroundBar>
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
                  </StyledBackgroundBar>
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
                </StyledLowerSideDiv>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledBanner>
      {/* features  bar------------------------------------------------------ */}
      <FeaturesBar>
        <Grid container spacing={4}>
          <Grid item md={4} xs={12}>
            <Grid container direction="row">
              <Grid item md={3}>
                <FeaturesLogo sx={{ background: "#c2e7f0" }}>
                  <FeaturesShippingIcon />
                </FeaturesLogo>
              </Grid>
              <Grid item md={9}>
                <StyledFeaturesHeading>Free Shipping</StyledFeaturesHeading>
                <StyledFeaturesText>
                  Free shipping on most orders
                </StyledFeaturesText>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container>
              <Grid item md={3}>
                <FeaturesLogo sx={{ background: "#fdd4d4" }}>
                  <FeaturesSupportIcon />
                </FeaturesLogo>
              </Grid>
              <Grid item md={9}>
                <StyledFeaturesHeading>24 Hours Support</StyledFeaturesHeading>
                <StyledFeaturesText>
                  Contact at every hour of the day
                </StyledFeaturesText>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container>
              <Grid item md={3}>
                <FeaturesLogo sx={{ background: "#f1e8b0" }}>
                  <FeaturesPaymentIcon />
                </FeaturesLogo>
              </Grid>
              <Grid item md={9}>
                <StyledFeaturesHeading>Secured Payment</StyledFeaturesHeading>
                <StyledFeaturesText>
                  Highly secured payment gateway
                </StyledFeaturesText>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </FeaturesBar>
      {/* top specs  bar------------------------------------------------------ */}
      <StyledTopSpecs>
        <StyledTopSpecsHeader>Top Features Of The Watch</StyledTopSpecsHeader>
        <StyledTopSpecsText>
          The watch has many features ranging from tracking the wearers movement
          to counting the number steps you make and saving so that you can
          access it whenever you like.
        </StyledTopSpecsText>
        <StyledBannerMobileImage src={WatchFace} />
        <Grid container sx={{ marginTop: "50px" }}>
          <Grid item md={2.5} xs={6}>
            <StyledTrackHeader>Unic Track</StyledTrackHeader>
            <StyledTrackText>$55.99</StyledTrackText>
            <StyledTrackList>
              Fitness Tracker
              <StyledTrackIcon />
            </StyledTrackList>
            <StyledTrackList>
              Heart Rate Monitor
              <StyledTrackIcon />
            </StyledTrackList>
            <StyledTrackList>
              Battery
              <StyledTrackIcon />
            </StyledTrackList>
            <StyledTrackList>
              Alarm Clock
              <StyledTrackIcon />
            </StyledTrackList>
            <StyledTrackList>
              Sports Tracker
              <StyledTrackIcon />
            </StyledTrackList>
            <StyledTracKBuyButton variant="outlined">
              Buy Now
            </StyledTracKBuyButton>
          </Grid>
          <Grid item md={7} xs={0}>
            <StyledTopSpecImage src={WatchFace} />
          </Grid>
          <Grid item md={2.5} xs={6}>
            <StyledTrackHeader>Smart Track</StyledTrackHeader>
            <StyledTrackText>$45.99</StyledTrackText>
            <StyledTrackList>
              Fitness Tracker
              <StyledTrackIcon />
            </StyledTrackList>
            <StyledTrackList>
              Heart Rate Monitor
              <StyledTrackIcon />
            </StyledTrackList>
            <StyledTrackList>
              Battery
              <StyledTrackIcon />
            </StyledTrackList>
            <StyledTrackList>
              Alarm Clock
              <StyledTrackIcon />
            </StyledTrackList>
            <StyledTrackList>
              Sports Tracker
              <StyledTrackIcon />
            </StyledTrackList>
            <StyledTracKBuyNowButton>Buy Now</StyledTracKBuyNowButton>
          </Grid>
        </Grid>
      </StyledTopSpecs>
      {/* Popular Products  bar------------------------------------------------------ */}
      <StyledPopularProducts>
        <StyledPopularProductsHeader>
          Popular Products
        </StyledPopularProductsHeader>
        <StyledPopularProductsText>
          Most viewed products across our site
        </StyledPopularProductsText>
        <Grid container spacing={4}>
          <Grid item md={4} xs={12}>
            <StyledPopularProductsDiv>
              <StyledPopularProductsImage src={Watch1} />
              <StyledPopularProductsDivHeader>
                Chronic Apple Watches
              </StyledPopularProductsDivHeader>
              <StyledPopularProductsDivText>
                $149.99
                <StyledStrikedProductsDivText>
                  $179.99
                </StyledStrikedProductsDivText>
              </StyledPopularProductsDivText>
              <Rating
                name="read-only"
                value={4}
                readOnly
                sx={{ margin: "10px auto" }}
              />
            </StyledPopularProductsDiv>
          </Grid>
          <Grid item md={4} xs={12}>
            <StyledPopularProductsDiv>
              <StyledPopularProductsImage src={Watch2} />
              <StyledPopularProductsDivHeader>
                Watch Proof Watches
              </StyledPopularProductsDivHeader>
              <StyledPopularProductsDivText>
                $199.99
                <StyledStrikedProductsDivText>
                  $249.99
                </StyledStrikedProductsDivText>
              </StyledPopularProductsDivText>
              <Rating
                name="read-only"
                value={5}
                readOnly
                sx={{ margin: "10px auto" }}
              />
            </StyledPopularProductsDiv>
          </Grid>
          <Grid item md={4} xs={12}>
            <StyledPopularProductsDiv>
              <StyledPopularProductsImage src={Watch3} />
              <StyledPopularProductsDivHeader>
                Custom Strip Watches
              </StyledPopularProductsDivHeader>
              <StyledPopularProductsDivText>
                $249.99
                <StyledStrikedProductsDivText>
                  $349.99
                </StyledStrikedProductsDivText>
              </StyledPopularProductsDivText>
              <Rating
                name="read-only"
                value={5}
                readOnly
                sx={{ margin: "10px auto" }}
              />
            </StyledPopularProductsDiv>
          </Grid>
        </Grid>
      </StyledPopularProducts>
      {/* Best Time  bar------------------------------------------------------ */}
      <StyledBestTime>
        <Grid container spacing={7}>
          <Grid item md={6} xs={12}>
            <StyledBestTimeDiv>
              <StyledBestTimeImage src={BestWatch} />
            </StyledBestTimeDiv>
          </Grid>
          <Grid item md={6} xs={12}>
            <StyledBestTimeHeader>
              The Best Product For Your Best Time
            </StyledBestTimeHeader>
            <StyledBestTimeText>
              Time awaits no man. Why not take care of time with our smart wrist
              watches. The most affordable you can get anywhere across the net.
            </StyledBestTimeText>
            <BuyButton>See Products</BuyButton>
          </Grid>
        </Grid>
      </StyledBestTime>
      {/* offer  bar------------------------------------------------------ */}
      <StyledOfferBar>
        <StyledBannerMobileImage src={WatchFace} />
        <Grid container spacing={7}>
          <Grid item md={7} xs={12}>
            <StyledOfferBarHeader>
              Buy now and get up to 30% discount
            </StyledOfferBarHeader>
            <StyledOfferBarText>
              Get access to the most reliable set of smart watches with
              varieties of options
            </StyledOfferBarText>
            <BuyButton>Buy Now</BuyButton>
          </Grid>
          <Grid
            sx={{ display: { xs: "none", md: "block" } }}
            item
            md={5}
            xs={12}
          >
            <StyledOfferBarImage src={OfferWatch} />
          </Grid>
        </Grid>
      </StyledOfferBar>
    </HomeBody>
  );
};

export default Home;
