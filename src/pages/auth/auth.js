import { Button, Grid, Slide, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const Login = () => {
  const [actionType, setActionType] = useState("Login");

  const StyledGridLoginSideDiv = styled(Grid)(({ theme }) => ({
    width: "80%",
    height: "auto",
    margin: "100px auto",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      display: "block",
      height: "auto",
      marginTop: "100px",
    },
  }));

  const StyledGridLoginHeader = styled("div")(({ theme }) => ({
    fontSize: "20px",
    margin: "0px 0px",
    color: "#07163a",
    textAlign: "center",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      margin: "0px 0px",
    },
  }));

  const StyledGridLoginInput = styled(TextField)(({ theme }) => ({
    width: "400px",
    height: "50px",
    margin: "10px auto",
    fontSize: "14px",
    backgoundColor: "white",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }));

  const StyledGridLoginButton = styled(Button)(({ theme }) => ({
    display: "block",
    width: "400px",
    height: "45px",
    backgroundColor: "#c73217",
    color: "white",
    margin: "10px auto",
    fontWeight: 600,
    "&:hover": { backgroundColor: "#2f53a5", color: "white" },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }));

  const StyledGridSelctButton = styled(Button)(({ theme }) => ({
    width: "auto",
    height: "35px",
    backgroundColor: "#fff",
    color: "#222",
    margin: "7px",
    marginBottom: "30px",
    textTransform: "capitalize",
    fontSize: "16px",
    "&:hover": { backgroundColor: "#fff", color: "red" },
    [theme.breakpoints.down("md")]: {
      width: "100px",
    },
  }));

  const StyledGridLoginText = styled("div")(({ theme }) => ({
    textAlign: "center",
    lineHeight: "20px",
    fontSize: "14px",
    marginTop: "10px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: "10px",
    },
  }));

  return (
    <StyledGridLoginSideDiv
      container
      direction="column"
      display="flex"
      justifyContent="center"
    >
      <Grid item>
        <StyledGridLoginHeader>
          <StyledGridSelctButton
            sx={{
              ...(actionType === "Register" && {
                borderBottom: "3px solid #cf7b1b",
                borderRadius: "0px",
                "&:hover": {
                  color: "#444",
                },
              }),
            }}
            onClick={() => setActionType("Register")}
          >
            Register
          </StyledGridSelctButton>
          <StyledGridSelctButton
            sx={{
              ...(actionType === "Login" && {
                borderBottom: "3px solid #cf7b1b",
                borderRadius: "0px",
                "&:hover": {
                  color: "#444",
                },
              }),
            }}
            onClick={() => setActionType("Login")}
          >
            Sign in
          </StyledGridSelctButton>
        </StyledGridLoginHeader>
      </Grid>
      {actionType === "Register" && (
        <>
          {" "}
          <Slide
            direction="right"
            in={actionType === "Register"}
            mountOnEnter
            unmountOnExit
          >
            <Grid sx={{ margin: "auto" }} item>
              <StyledGridLoginInput placeholder="Firstname" />
            </Grid>
          </Slide>
          <Slide
            direction="right"
            in={actionType === "Register"}
            mountOnEnter
            unmountOnExit
          >
            <Grid sx={{ margin: "auto" }} item>
              <StyledGridLoginInput placeholder="Lastname" />
            </Grid>
          </Slide>
          <Slide
            direction="right"
            in={actionType === "Register"}
            mountOnEnter
            unmountOnExit
          >
            <Grid sx={{ margin: "auto" }} item>
              <StyledGridLoginInput placeholder="Email" />
            </Grid>
          </Slide>
          <Slide
            direction="right"
            in={actionType === "Register"}
            mountOnEnter
            unmountOnExit
          >
            <Grid sx={{ margin: "auto" }} item>
              <StyledGridLoginInput placeholder="Location" />
            </Grid>
          </Slide>
          <Slide
            direction="right"
            in={actionType === "Register"}
            mountOnEnter
            unmountOnExit
          >
            <Grid sx={{ margin: "auto" }} item>
              <StyledGridLoginInput placeholder="Password" />
            </Grid>
          </Slide>
        </>
      )}
      {actionType === "Login" && (
        <>
          {" "}
          <Slide
            direction="left"
            in={actionType === "Login"}
            mountOnEnter
            unmountOnExit
          >
            <Grid sx={{ margin: "auto" }} item>
              <StyledGridLoginInput placeholder="Email" />
            </Grid>
          </Slide>
          <Slide
            direction="left"
            in={actionType === "Login"}
            mountOnEnter
            unmountOnExit
          >
            <Grid sx={{ margin: "auto" }} item>
              <StyledGridLoginInput placeholder="Password" />
            </Grid>
          </Slide>
        </>
      )}
      <Grid item>
        <Slide
          direction="left"
          in={actionType === "Login"}
          mountOnEnter
          unmountOnExit
        >
          <StyledGridLoginButton>
            {actionType === "Login" ? "Sign In" : "Register"}
          </StyledGridLoginButton>
        </Slide>
        <Slide
          direction="right"
          in={actionType === "Register"}
          mountOnEnter
          unmountOnExit
        >
          <StyledGridLoginButton>
            {actionType === "Login" ? "Sign In" : "Register"}
          </StyledGridLoginButton>
        </Slide>
      </Grid>
      <Grid item>
        <Slide
          direction="right"
          in={actionType === "Register"}
          mountOnEnter
          unmountOnExit
        >
          <StyledGridLoginText>
            By signing up, you agreee to our <br />
            <span style={{ color: "#1738a5", cursor: "pointer" }}>
              Terms and Conditions & Privacy and Policy
            </span>
          </StyledGridLoginText>
        </Slide>
      </Grid>
    </StyledGridLoginSideDiv>
  );
};

export default Login;
