import { Button, Grid, Slide, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { motion } from "framer-motion";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  loginUser,
  loginStatus,
  addUserStatus,
} from "../../reducers/usersSlice";
import { useNavigate } from "react-router-dom";
import { fetchCartProducts } from "../../reducers/cartSlice";

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

const StyledGridLoginButton = styled(LoadingButton)(({ theme }) => ({
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

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [actionType, setActionType] = useState("Login");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loader, setLoader] = useState("");
  const signInStatus = useSelector(loginStatus);
  const registerStatus = useSelector(addUserStatus);

  const handleRegister = () => {
    if (firstName && lastName && email && password === confirmPassword) {
      let userData = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      };
      dispatch(addUser(userData));
    }
  };

  const handleLogin = () => {
    let userData = {
      email: email,
      password: password,
    };
    dispatch(loginUser(userData));
  };

  useEffect(() => {
    setLoader(signInStatus);
    if (registerStatus === "succeeded") setActionType("Login");
    if (signInStatus === "succeeded") {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch(fetchCartProducts(user.id));
      navigate("/shop");
    }
  }, [signInStatus, registerStatus, navigate, dispatch]);

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      exit={{ x: 200, scale: 0, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
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
                <StyledGridLoginInput
                  placeholder="Firstname"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
            </Slide>
            <Slide
              direction="right"
              in={actionType === "Register"}
              mountOnEnter
              unmountOnExit
            >
              <Grid sx={{ margin: "auto" }} item>
                <StyledGridLoginInput
                  placeholder="Lastname"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
            </Slide>
            <Slide
              direction="right"
              in={actionType === "Register"}
              mountOnEnter
              unmountOnExit
            >
              <Grid sx={{ margin: "auto" }} item>
                <StyledGridLoginInput
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
            </Slide>
            <Slide
              direction="right"
              in={actionType === "Register"}
              mountOnEnter
              unmountOnExit
            >
              <Grid sx={{ margin: "auto" }} item>
                <StyledGridLoginInput
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Slide>
            <Slide
              direction="right"
              in={actionType === "Register"}
              mountOnEnter
              unmountOnExit
            >
              <Grid sx={{ margin: "auto" }} item>
                <StyledGridLoginInput
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
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
                <StyledGridLoginInput
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
            </Slide>
            <Slide
              direction="left"
              in={actionType === "Login"}
              mountOnEnter
              unmountOnExit
            >
              <Grid sx={{ margin: "auto" }} item>
                <StyledGridLoginInput
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
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
            <StyledGridLoginButton
              sx={{
                marginBottom: "300px",
                backgroundColor: loader === "loading" ? "#dfdfdf" : "#c73217",
                "&:hover": {
                  backgroundColor: loader === "loading" && "#dfdfdf",
                },
                textAlign: "center",
              }}
              loading={loader === "loading"}
              disabled={loader === "loading"}
              loadingPosition="center"
              onClick={handleLogin}
            >
              {loader !== "loading" && "Sign In"}
            </StyledGridLoginButton>
          </Slide>
          <Slide
            direction="right"
            in={actionType === "Register"}
            mountOnEnter
            unmountOnExit
          >
            <StyledGridLoginButton
              sx={{
                backgroundColor: loader === "loading" ? "#dfdfdf" : "#c73217",
                "&:hover": {
                  backgroundColor: loader === "loading" && "#dfdfdf",
                },
                textAlign: "center",
              }}
              loading={loader === "loading"}
              disabled={loader === "loading"}
              loadingPosition="center"
              onClick={handleRegister}
            >
              {loader !== "loading" && "Register"}
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
    </motion.div>
  );
};

export default Login;
