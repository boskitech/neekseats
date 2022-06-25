import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

const HeaderText = styled("h2")(({ theme }) => ({
  color: "#000",
  fontWeight: "900",
  fontSize: "23px",
  [theme.breakpoints.down("md")]: {
    fontWeight: "800",
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
}));

const StyledMenuButton = styled(Button)({
  color: "#000",
  fontWeight: 600,
  fontSize: "15px",
});

const StyledLoginButton = styled(Button)({
  color: "#fff",
  fontWeight: 800,
  backgroundColor: "#416cb7",
  width: "120px",
  marginLeft: "10px",
  "&:hover": { backgroundColor: "#2f53a5", color: "white" },
});

const StyledAppBAr = styled(AppBar)({
  backgroundColor: "#fff",
  boxShadow: "none",
  position: "fixed",
  paddingTop: "10px",
});

const Navbar = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({ left: false });

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
        <ListItem onClick={() => navigate("/services")} disablePadding>
          <ListItemButton>
            <ListItemText primary="Services" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem onClick={() => navigate("/faq")} disablePadding>
          <ListItemButton>
            <ListItemText primary="Question and Answer" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem onClick={() => navigate("/consult")} disablePadding>
          <ListItemButton>
            <ListItemText primary="Consultation" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem onClick={() => navigate("/blog")} disablePadding>
          <ListItemButton>
            <ListItemText primary="Articles" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <StyledAppBAr position="fixed">
        <StyledToolBar>
          <HeaderText>
            <span style={{ color: "orange", fontSize: "28px" }}>Net</span>Porch
          </HeaderText>
          <Box direction="row" sx={{ display: { xs: "none", md: "block" } }}>
            <StyledMenuButton onClick={() => navigate("/")} variant="body1">
              Home
            </StyledMenuButton>
            <StyledMenuButton
              onClick={() => navigate("/services")}
              variant="body1"
            >
              Shop
            </StyledMenuButton>
            <StyledMenuButton onClick={() => navigate("/faq")} variant="body1">
              About
            </StyledMenuButton>
            <StyledMenuButton
              onClick={() => navigate("/consult")}
              variant="body1"
            >
              Product
            </StyledMenuButton>
            <StyledMenuButton onClick={() => navigate("/blog")} variant="body1">
              Contact
            </StyledMenuButton>
          </Box>
          <Box>
            <IconButton
              onClick={() => navigate("/login")}
              sx={{ color: "black" }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              onClick={() => navigate("/login")}
              sx={{ color: "black" }}
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <StyledLoginButton onClick={() => navigate("/login")}>
              Login
            </StyledLoginButton>
            <IconButton
              onClick={toggleDrawer("left", true)}
              sx={{ display: { xs: "block", md: "none", color: "white" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </StyledToolBar>
      </StyledAppBAr>
      <Drawer open={state["left"]} onClose={toggleDrawer("left", false)}>
        {list("left")}
      </Drawer>
    </div>
  );
};

export default Navbar;
