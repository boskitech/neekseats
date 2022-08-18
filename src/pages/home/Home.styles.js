import { Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import BannerImg from "../../assets/img/banner_img_6.png";
import WatchLogo from "../../assets/img/watch_img_23.png";
import ProgressBar from "../../assets/img/progressBar.png";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export const HomeBody = styled("div")(({ theme }) => ({
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

export const StyledBanner = styled("div")(({ theme }) => ({
  width: "100%",
  height: 420,
  margin: "auto",
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

export const StyledUpperSideDiv = styled("div")(({ theme }) => ({
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

export const StyledLeftSideBanner = styled("div")(({ theme }) => ({
  width: "70%",
  marginTop: "30px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginTop: "10px",
  },
}));

export const StyledBannerHeaderText = styled("div")(({ theme }) => ({
  fontSize: "48px",
  fontWeight: 600,
  color: "#000",
  lineHeight: "65px",
}));

export const StyledBannerText = styled("div")(({ theme }) => ({
  fontSize: "15px",
  fontWeight: 400,
  color: "#000",
  lineHeight: "20px",
  marginTop: "15px",
}));

export const StyledBannerCartButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#c73217",
  color: "white",
  width: "135px",
  marginTop: "30px",
  padding: "10px",
  fontSize: "11px",
  marginRight: "10px",
  "&:hover": {
    background: "#f85321",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "50px",
    fontWeight: 500,
    fontSize: "15px",
  },
}));

export const StyledBannerMobileImage = styled("img")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    width: "100%",
    height: "auto",
    margin: "30px auto",
  },
}));

export const StyledBannerWatchtButton = styled(Button)(({ theme }) => ({
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

export const StyledWatchLogo = styled("div")(({ theme }) => ({
  width: "40px",
  height: "37px",
  backgroundImage: `url(${WatchLogo})`,
  backgroundSize: "38px 38px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  clear: "both",
  float: "right",
}));

export const StyledUpperSideHeader = styled("div")(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 600,
  color: "#000",
}));

export const StyledUpperSideText = styled("div")(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 400,
  color: "#666",
  marginTop: "7px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StyledLowerSideDiv = styled("div")(({ theme }) => ({
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

export const StyledBackgroundBar = styled("div")(({ theme }) => ({
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

export const FeaturesBar = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "auto",
  color: "black",
  boxShadow: "0 0 20px #dfdfdf",
  padding: "20px",
}));

export const FeaturesLogo = styled(Grid)(({ theme }) => ({
  width: "70px",
  height: "70px",
  borderRadius: "5px",
  [theme.breakpoints.down("lg")]: {
    width: "60px",
    height: "60px",
  },
  [theme.breakpoints.down("md")]: {
    width: "50px",
    height: "50px",
  },
}));

export const FeaturesShippingIcon = styled(LocalShippingOutlinedIcon)(
  ({ theme }) => ({
    width: "50px",
    height: "50px",
    padding: "10px",
    color: "#5eb3d4",
    [theme.breakpoints.down("lg")]: {
      width: "40px",
      height: "40px",
    },
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
  })
);

export const FeaturesSupportIcon = styled(CallOutlinedIcon)(({ theme }) => ({
  width: "50px",
  height: "50px",
  padding: "10px",
  color: "#d87676",
  [theme.breakpoints.down("lg")]: {
    width: "40px",
    height: "40px",
  },
  [theme.breakpoints.down("md")]: {
    width: "30px",
    height: "30px",
  },
}));

export const FeaturesPaymentIcon = styled(SecurityOutlinedIcon)(
  ({ theme }) => ({
    width: "50px",
    height: "50px",
    padding: "10px",
    color: "#afae4f ",
    [theme.breakpoints.down("lg")]: {
      width: "40px",
      height: "40px",
    },
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
  })
);

export const StyledFeaturesHeading = styled("div")(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 600,
  color: "#000",
  [theme.breakpoints.down("md")]: {
    margin: "0px 15px",
  },
}));

export const StyledFeaturesText = styled("div")(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 400,
  color: "#666",
  marginTop: "7px",
  [theme.breakpoints.down("md")]: {
    margin: "0px 15px",
  },
}));

//-------------------------------Specs Bar Styles--------------------------------

export const StyledTopSpecs = styled("div")(({ theme }) => ({
  width: "100%",
  marginTop: "50px",
}));

export const StyledTopSpecsHeader = styled("div")(({ theme }) => ({
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

export const StyledTopSpecsText = styled("div")(({ theme }) => ({
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

export const StyledTrackText = styled("div")(({ theme }) => ({
  fontSize: "19px",
  fontWeight: 400,
  color: "#f0593e",
  margin: "5px auto",
}));

export const StyledTrackHeader = styled("div")(({ theme }) => ({
  fontSize: "25px",
  fontWeight: 500,
  color: "#000",
}));

export const StyledTrackList = styled("div")(({ theme }) => ({
  width: "170px",
  fontSize: "14px",
  fontWeight: 440,
  color: "#222",
  marginTop: "15px",
  [theme.breakpoints.down("md")]: {
    width: "150px",
  },
}));

export const StyledTrackIcon = styled(CheckCircleOutlineOutlinedIcon)(
  ({ theme }) => ({
    fontSize: "14px",
    fontWeight: 450,
    float: "right",
    color: "#f0593e",
  })
);

export const StyledTracKBuyButton = styled(Button)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 450,
  color: "#b43e3a",
  marginTop: "27px",
  border: "2px solid #b43e3a",
  "&:hover": {
    border: "2px solid #f85321",
    background: "#f85321",
    color: "white",
  },
}));

export const StyledTracKBuyNowButton = styled(Button)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 450,
  color: "#fff",
  marginTop: "27px",
  background: "#b43e3a",
  "&:hover": {
    background: "#f85321",
  },
}));

export const StyledTopSpecImage = styled("img")(({ theme }) => ({
  width: "500px",
  height: "auto",
  float: "center",
  margin: "auto",
  align: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

//----------------------Popular Products Styles--------------------------------

export const StyledPopularProducts = styled("div")(({ theme }) => ({
  width: "100%",
  marginTop: "100px",
}));

export const StyledPopularProductsHeader = styled("div")(({ theme }) => ({
  fontSize: "30px",
  fontWeight: 600,
  color: "#000",
  margin: "auto",
}));

export const StyledPopularProductsText = styled("div")(({ theme }) => ({
  fontSize: "15px",
  fontWeight: 400,
  color: "#666",
  margin: "8px auto",
  lineHeight: "18px",
}));

export const StyledPopularProductsDiv = styled("div")(({ theme }) => ({
  width: "94%",
  height: "auto",
  padding: "10px",
  textAlign: "center",
  borderRadius: "5px",
  boxShadow: "0 0 10px #dfdfdf",
  backgroundColor: "white",
  marginTop: "20px",
}));

export const StyledPopularProductsImage = styled("img")(({ theme }) => ({
  width: "200px",
  height: "auto",
  margin: "auto",
}));

export const StyledPopularProductsDivHeader = styled("div")(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 600,
  color: "black",
  marginTop: "17px",
  textAlign: "center",
  width: "100%",
}));

export const StyledPopularProductsDivText = styled("div")(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  textAlign: "center",
  color: "red",
  marginTop: "10px",
}));

export const StyledStrikedProductsDivText = styled("span")(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  textAlign: "center",
  color: "#888",
  marginLeft: "8px",
  textDecoration: "line-through",
}));

// export const StyledPopularProductsButton = styled(Button)(({ theme }) => ({
//   fontSize: "10px",
//   fontWeight: 450,
//   color: "#b43e3a",
//   marginTop: "27px",
//   border: "2px solid #b43e3a",
// }));

//----------------------Best Time Styles--------------------------------

export const StyledBestTime = styled("div")(({ theme }) => ({
  width: "100%",
  marginTop: "100px",
}));

export const StyledBestTimeHeader = styled("div")(({ theme }) => ({
  fontSize: "35px",
  fontWeight: 600,
  color: "#000",
  lineHeight: "45px",
  margin: "30px auto 0 auto",
}));

export const StyledBestTimeText = styled("div")(({ theme }) => ({
  fontSize: "15px",
  fontWeight: 400,
  color: "#666",
  margin: "10px auto",
  lineHeight: "18px",
}));

export const StyledBestTimeDiv = styled("div")(({ theme }) => ({
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

export const StyledBestTimeImage = styled("img")(({ theme }) => ({
  width: "250px",
  height: "auto",
  margin: "auto",
}));

//----------------------Discount Styles--------------------------------

export const StyledOfferBar = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "auto",
  color: "black",
  padding: "10px 30px",
  backgroundColor: "#fff9eb",
  borderRaduis: "10px",
  margin: "100px 0",
}));

export const StyledOfferBarHeader = styled("div")(({ theme }) => ({
  fontSize: "35px",
  fontWeight: 600,
  color: "#000",
  lineHeight: "45px",
  margin: "30px auto 0 auto",
}));

export const StyledOfferBarText = styled("div")(({ theme }) => ({
  fontSize: "15px",
  fontWeight: 400,
  color: "#666",
  margin: "10px auto",
  lineHeight: "18px",
}));

export const StyledOfferBarImage = styled("img")(({ theme }) => ({
  width: "300px",
  height: "auto",
  margin: "auto",
}));
