import { Divider, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CartBody = styled("div")(({ theme }) => ({
  width: "80%",
  margin: "130px auto 20px auto",
  [theme.breakpoints.up("xl")]: {
    width: "60%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "90%",
  },
  [theme.breakpoints.down("md")]: {
    width: "90%",
    margin: "70px auto 0px auto",
  },
}));

const StyledCartHeader = styled("div")(({ theme }) => ({
  fontSize: "20px",
  color: "#444",
  fontWeight: 400,
  padding: "15px",
  [theme.breakpoints.down("md")]: {
    padding: "5px 0",
    borderRadius: "5px",
  },
}));

const StyledCartGrid = styled("div")(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: "5px",
  boxShadow: "0 0 7px #cfcfcf",
  [theme.breakpoints.down("md")]: {
    boxShadow: "none",
  },
}));

const Account = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      exit={{ x: 200, scale: 0, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <CartBody>
        <Grid container>
          <Grid item md={12} xs={12}>
            <StyledCartGrid>
              <StyledCartHeader>
                Orders
                <Divider
                  sx={{
                    marginTop: "13px",
                    display: { xs: "none", sm: "block" },
                  }}
                />
              </StyledCartHeader>
              {user ? (
                <div style={{ padding: "20px" }}>
                  <h3 style={{ textTransform: "capitalize" }}>
                    Name: {user.firstname + " " + user.lastname}
                  </h3>
                  <h3>Email: {user.email}</h3>
                </div>
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "50px",
                    paddingBottom: "50px",
                    fontSize: "20px",
                  }}
                >
                  You're not logged in
                </div>
              )}
            </StyledCartGrid>
          </Grid>
        </Grid>
      </CartBody>
    </motion.div>
  );
};

export default Account;
