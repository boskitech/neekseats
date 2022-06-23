import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import BannerImg from "../../assets/img/banner_img_4.png";

const Home = () => {
  const StyledBanner = styled("div")(({ theme }) => ({
    width: "70%",
    height: 530,
    margin: "auto",
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "360px",
      paddingBottom: "30px",
    },
  }));

  const WelcomeImage = styled("div")(({ theme }) => ({
    width: "800px",
    height: "490px",
    borderRadius: "10px",
    backgroundImage: `url(${BannerImg})`,
    backgroundSize: "750px 490px",
    margin: "auto",
    marginTop: "60px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "25px",
      width: "90%",
      height: "200px",
      borderRadius: "5px",
      backgroundSize: "300px 190px",
    },
  }));

  return (
    <StyledBanner>
      <Grid container>
        <Grid item md={6} sm={12}></Grid>
        <Grid item md={6} sm={12}>
          <WelcomeImage></WelcomeImage>
        </Grid>
      </Grid>
    </StyledBanner>
  );
};

export default Home;
