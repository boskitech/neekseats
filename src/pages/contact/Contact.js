import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import ContactMap from "../../assets/img/map.png";

const ContactUs = () => {
  const StyledContactBody = styled("div")(({ theme }) => ({
    width: "60%",
    height: "auto",
    margin: "100px auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "40%",
    },
  }));

  const StyledContactTitle = styled("div")(({ theme }) => ({
    fontSize: "40px",
    fontWeight: 500,
    color: "#000",
  }));

  const StyledContactSubTitle = styled("div")(({ theme }) => ({
    fontSize: "28px",
    fontWeight: 400,
    marginTop: "20px",
  }));

  const StyledGrid = styled(Grid)(({ theme }) => ({
    fontSize: "28px",
    fontWeight: 400,
    marginTop: "20px",
    backgroundColor: "#f0f2ff",
    padding: "0px",
    borderRadius: "10px",
  }));

  const StyledContactHeader = styled("div")(({ theme }) => ({
    fontSize: "25px",
    fontWeight: 500,
    color: "#222222",
  }));

  const StyledContactSubHeader = styled("div")(({ theme }) => ({
    fontSize: "15px",
    fontWeight: 400,
    marginTop: "10px",
  }));

  const StyledContactMap = styled("div")(({ theme }) => ({
    width: "100%",
    height: "100%",
    marginRight: "10px",
    backgroundImage: `url(${ContactMap})`,
    backgroundSize: "220px 150px",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "170px 150px",
    },
  }));

  return (
    <StyledContactBody data-aos="fade-left">
      <StyledContactTitle>Contact US</StyledContactTitle>
      <StyledContactSubTitle>Reach out anytime</StyledContactSubTitle>
      <StyledContactSubTitle>Our Offices</StyledContactSubTitle>
      <StyledGrid container direction="row">
        <Grid item xs={4}>
          <StyledContactMap />
        </Grid>
        <Grid item xs={7} sx={{ padding: "14px" }}>
          <StyledContactHeader>Kaduna HQ</StyledContactHeader>
          <StyledContactSubHeader>
            35 Kanta Road
            <br />
            Suite 430
            <br />
            Kaduna, Nigeria
            <br />
            800218
            <br />
            Phone: +2348082214245
          </StyledContactSubHeader>
        </Grid>
      </StyledGrid>
      <StyledGrid container direction="row">
        <Grid item xs={4}>
          <StyledContactMap />
        </Grid>
        <Grid item xs={7} sx={{ padding: "14px" }}>
          <StyledContactHeader>Abuja Head Office</StyledContactHeader>
          <StyledContactSubHeader>
            211 Bagudu St.
            <br />
            NNDC Building
            <br />
            Maitama, Abuja Nigeria
            <br />
            109410
            <br />
            Phone: +2348084417245
          </StyledContactSubHeader>
        </Grid>
      </StyledGrid>
      <StyledGrid container direction="row">
        <Grid item xs={4}>
          <StyledContactMap />
        </Grid>
        <Grid item xs={7} sx={{ padding: "14px" }}>
          <StyledContactHeader>Lagos Head Office</StyledContactHeader>
          <StyledContactSubHeader>
            No. 23 Obasanjo St.
            <br />
            Lekki Phase 2
            <br />
            Lagos, Nigeria
            <br />
            700289
            <br />
            Phone: +234909992229
          </StyledContactSubHeader>
        </Grid>
      </StyledGrid>
    </StyledContactBody>
  );
};

export default ContactUs;
