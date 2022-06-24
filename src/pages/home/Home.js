import { Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import BannerImg from "../../assets/img/banner_img_6.png";
import WatchLogo from "../../assets/img/watch_img_23.png";
import ProgressBar from "../../assets/img/progressBar.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

//-------------------------------Welcome Banner Styles--------------------------------

const Home = () => {
  const HomeBody = styled("div")(({ theme }) => ({
    width: "70%",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "60%",
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
  }));

  const StyledLeftSideBanner = styled("div")(({ theme }) => ({
    width: "70%",
    marginTop: "30px",
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
  }));

  const StyledLowerSideDiv = styled("div")(({ theme }) => ({
    width: "180px",
    height: "200px",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 0 20px #dfdfdf",
    backgroundColor: "white",
    float: "right",
    marginTop: "130px",
    bottom: 0,
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
    height: "120px",
    color: "black",
    boxShadow: "0 0 20px #dfdfdf",
    padding: "20px",
  }));

  const FeaturesLogo = styled(Grid)(({ theme }) => ({
    width: "80px",
    height: "80px",
    borderRadius: "5px",
  }));

  const FeaturesShippingIcon = styled(LocalShippingOutlinedIcon)(
    ({ theme }) => ({
      width: "60px",
      height: "60px",
      padding: "10px",
      color: "#5eb3d4",
    })
  );

  const FeaturesSupportIcon = styled(CallOutlinedIcon)(({ theme }) => ({
    width: "60px",
    height: "60px",
    padding: "10px",
    color: "#d87676",
  }));

  const FeaturesPaymentIcon = styled(SecurityOutlinedIcon)(({ theme }) => ({
    width: "60px",
    height: "60px",
    padding: "10px",
    color: "#afae4f ",
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
      <FeaturesBar>
        <Grid container>
          <Grid item md={4}>
            <FeaturesLogo sx={{ background: "#c2e7f0" }}>
              <FeaturesShippingIcon />
            </FeaturesLogo>
          </Grid>
          <Grid item md={4}>
            <FeaturesLogo sx={{ background: "#fdd4d4" }}>
              <FeaturesSupportIcon />
            </FeaturesLogo>
          </Grid>
          <Grid item md={4}>
            <FeaturesLogo sx={{ background: "#f1e8b0" }}>
              <FeaturesPaymentIcon />
            </FeaturesLogo>
          </Grid>
        </Grid>
      </FeaturesBar>
    </HomeBody>
  );
};

export default Home;
