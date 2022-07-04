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
          <StyledContactHeader>Global HQ</StyledContactHeader>
          <StyledContactSubHeader>
            475 Brannan St.
            <br />
            Suite 430
            <br />
            San Francisco
            <br />
            CA 94107
            <br />
            Phone: (650) 316-7500
          </StyledContactSubHeader>
        </Grid>
      </StyledGrid>
      <StyledGrid container direction="row">
        <Grid item xs={4}>
          <StyledContactMap />
        </Grid>
        <Grid item xs={7} sx={{ padding: "14px" }}>
          <StyledContactHeader>Nigeria Head Office</StyledContactHeader>
          <StyledContactSubHeader>
            475 Brannan St.
            <br />
            Suite 430
            <br />
            Lugard Hall
            <br />
            CA 94107
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
          <StyledContactHeader>Mailing Adrdress</StyledContactHeader>
          <StyledContactSubHeader>
            475 Brannan St.
            <br />
            Suite 430
            <br />
            San Francisco
            <br />
            CA 94107
            <br />
            Phone: (650) 316-7500
          </StyledContactSubHeader>
        </Grid>
      </StyledGrid>
    </StyledContactBody>
  );
};

export default ContactUs;
