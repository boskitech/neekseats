import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Badge, Button, IconButton, Slide } from "@mui/material";
import { useNavigate } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "./SearchBar";
import AccountMenu from "./AccountMenu";
import { useSelector, useDispatch } from "react-redux";
import { user, token, checkUser } from "../../reducers/usersSlice";
import { selectUserCart, fetchCartProducts } from "../../reducers/cartSlice";

const HeaderText = styled("h2")(({ theme }) => ({
  color: "#000",
  fontWeight: 700,
  fontSize: "23px",
  [theme.breakpoints.down("md")]: {
    fontWeight: 700,
    fontSize: "20px",
  },
}));

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  width: "70%",
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "0px",
  [theme.breakpoints.up("xl")]: {
    width: "60%",
  },
  [theme.breakpoints.down("xl")]: {
    width: "80%",
  },
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "90%",
  },
}));

const StyledMenuButton = styled(Button)({
  color: "#333",
  fontWeight: 550,
  fontSize: "14px",
});

const StyledLoginButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: 700,
  backgroundColor: "#416cb7",
  width: "120px",
  marginLeft: "10px",
  "&:hover": { backgroundColor: "#2f53a5", color: "white" },
}));

const StyledAppBAr = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: "none",
  position: "fixed",
  paddingTop: "5px",
  borderBottom:'1px solid #ddd',
  [theme.breakpoints.down("md")]: {
  borderBottom:'none',
    paddingTop: "0px",
    height: "60px",
  },
}));

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({ left: false });
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState(false);
  const [checkToken, setCheckToken] = useState(false);
  const [userd, setUserd] = useState("");
  const newToken = useSelector(token);
  const myUser = useSelector(user);
  const cart = useSelector(selectUserCart);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  useEffect(() => {
    if (newToken || localStorage.getItem("token")) {
      setCheckToken(true);
    } else {
      setCheckToken(false);
    }
  }, [checkToken, newToken, dispatch]);

  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUserd(JSON.parse(localStorage.getItem("user")));
    }
  }, [myUser]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(fetchCartProducts(userd._id));
    }
  }, [dispatch, userd._id]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem onClick={() => navigate("/")} disablePadding>
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem onClick={() => navigate("/shop")} disablePadding>
          <ListItemButton>
            <ListItemText primary="Shop" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem onClick={() => navigate("/about")} disablePadding>
          <ListItemButton>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem onClick={() => navigate("/contact")} disablePadding>
          <ListItemButton>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          {!checkToken ? (
            <StyledLoginButton sx={{mt:'10px', width:'92%'}} onClick={() => navigate("/login")}>
              Login
            </StyledLoginButton>
          ) : (
            <AccountMenu user={userd.firstname} />
          )}
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
  return (
    <div>
      <StyledAppBAr
        position="fixed"
        // sx={{ ...(scrolled && { boxShadow: "0 0 10px #dfdfdf" }) }}
        sx={{ boxShadow: scrolled ? "0 0 10px #afafaf" : "none" }}
      >
        <StyledToolBar>
          <HeaderText onClick={() => navigate("/")} style={{cursor:'pointer'}}>
            <span style={{ color: "orange", fontSize: "28px" }}>Net</span>Porch
          </HeaderText>
          <Slide
            direction="left"
            in={!search}
            mountOnEnter
            unmountOnExit
            style={{ transformOrigin: "0 0 0" }}
            {...(!search ? { timeout: 50 } : {})}
          >
            <Box direction="row" sx={{ display: { xs: "none", md: "block" } }}>
              <StyledMenuButton onClick={() => navigate("/")} variant="body1">
                Home
              </StyledMenuButton>
              <StyledMenuButton
                onClick={() => navigate("/shop")}
                variant="body1"
              >
                Shop
              </StyledMenuButton>
              <StyledMenuButton
                onClick={() => navigate("/about")}
                variant="body1"
              >
                About
              </StyledMenuButton>
              <StyledMenuButton
                onClick={() => navigate("/contact")}
                variant="body1"
              >
                Contact
              </StyledMenuButton>
            </Box>
          </Slide>
          {search && <SearchBar />}
          <Box>
            <Box sx={{ display: { xs: "none", md: "block" }, color: "black" }}>
              <IconButton
                onClick={() => setSearch(!search)}
                sx={{ color: "black" }}
              >
                {!search ? <SearchIcon /> : <MenuIcon />}
              </IconButton>
              <IconButton
                onClick={() => navigate("/cart")}
                sx={{ color: "black" }}
              >
                <Badge badgeContent={cart.length} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
              {!checkToken ? (
                <StyledLoginButton onClick={() => navigate("/login")}>
                  Login
                </StyledLoginButton>
              ) : (
                <AccountMenu user={userd.firstname} />
              )}
            </Box>
            <Box style={{display:'flex'}}>
            <IconButton
              onClick={() => setSearch(!search)}
              sx={{ color: "black", display: { xs: "flex", md: "none", color: "black"}  }}
            >
              <SearchIcon /> 
            </IconButton>
            <IconButton
                onClick={() => navigate("/cart")}
                sx={{ color: "black", display: { xs: "flex", md: "none", color: "black"} }}
              >
                <Badge badgeContent={cart.length} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            <IconButton
              onClick={toggleDrawer("left", true)}
              sx={{ display: { xs: "flex", md: "none", color: "black" } }}
            >
              <MenuIcon />
            </IconButton>
            </Box>
          </Box>
        </StyledToolBar>
      </StyledAppBAr>
      <Drawer open={state["left"]} onClose={toggleDrawer("left", false)}>
        <HeaderText sx={{textAlign:'center', margin:'20px 0'}}>
          <span style={{ color: "orange", fontSize: "28px" }}>Net</span>Porch
        </HeaderText>
        {list("left")}
      </Drawer>
    </div>
  );
};

export default Navbar;
