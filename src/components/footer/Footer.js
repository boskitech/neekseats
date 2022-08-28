import { Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const StyledFooter = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto",
    backgroundColor: "#fffdf5",
    color: "black",
    margin: "auto",
    padding:'50px 0px',
    borderTop: '1px solid #efefef',
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },

  }));

  const StyledInerGrid = styled(Grid)(({ theme }) => ({
    width: "60%",
    margin: "auto",
    [theme.breakpoints.down("xl")]: {
      width: "70%",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  }));

  const StyledGridHeader = styled("div")(({ theme }) => ({
    fontSize: "20px",
    fontWeight: 500,
    margin: "15px 0px",
    [theme.breakpoints.down("md")]: {
      fontSize: "17px",
      fontWeight: 700,
    },
  }));

  const StyledGridText = styled("div")(({ theme }) => ({
    backgoundColor: "#07163a",
    fontSize: "17px",
    fontWeight: 400,
    display: "block",
    margin: "3px 0",
    color: "black",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      fontWeight: 300,
    },
  }));

  const StyledGridLogo = styled("div")(({ theme }) => ({
    margin: "12px 0px",
    fontSize: "23px",
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
    },
  }));

  const StyledGridButton = styled(Button)(({ theme }) => ({
    backgoundColor: "#07163a",
    fontSize: "12px",
    fontWeight: 600,
    display: "block",
    margin: "3px 0",
    color: "black",
    paddingLeft: "0px",
    [theme.breakpoints.down("md")]: {
      fontWeight: 500,
    },
  }));

  return (
    <div style={{position:'absolute', width:'100%', display:'flex', flexDirection:'row', alignContent:'end'}}>
    <StyledFooter sx={{}}>
      <StyledInerGrid container>
        <Grid item sm={3} xs={6}>
          <StyledGridHeader>Our Services</StyledGridHeader>
          <StyledGridButton onClick={() => navigate("/consult")}>
            Consultation
          </StyledGridButton>
          <StyledGridButton onClick={() => navigate("/services")}>
            Therapy
          </StyledGridButton>
          <StyledGridButton onClick={() => navigate("/contact")}>
            Quick Response
          </StyledGridButton>
          <StyledGridButton onClick={() => navigate("/about")}>
            Guidance
          </StyledGridButton>
        </Grid>
        <Grid item sm={3} xs={6}>
          <StyledGridHeader>Terms & Condition</StyledGridHeader>
          <StyledGridButton onClick={() => navigate("/services")}>
            Service
          </StyledGridButton>
          <StyledGridButton onClick={() => navigate("/faq")}>
            Tips & Jesks
          </StyledGridButton>
          <StyledGridButton onClick={() => navigate("/contact")}>
            Security
          </StyledGridButton>
          <StyledGridButton onClick={() => navigate("/about")}>
            FindOut
          </StyledGridButton>
        </Grid>
        <Grid item sm={3} xs={6}>
          <StyledGridHeader>Information</StyledGridHeader>
          <StyledGridButton>Instagram</StyledGridButton>
          <StyledGridButton>Facebook</StyledGridButton>
          <StyledGridButton>Twitter</StyledGridButton>
          <StyledGridButton>LinkedIn</StyledGridButton>
        </Grid>
        <Grid item sm={3} xs={6}>
          <StyledGridLogo>
            <span style={{ color: "orange", fontSize: "28px" }}>Net</span>
            Porch
          </StyledGridLogo>
          <StyledGridText>
            An affordable tertiary and multispecialty healthcare framework that
            provides the best health care services you can find online.
            <br />
            <br />
            Copyright 2022 - All Rights Reserved
          </StyledGridText>
        </Grid>
      </StyledInerGrid>
    </StyledFooter>
    </div>
  );
};

export default Footer;
