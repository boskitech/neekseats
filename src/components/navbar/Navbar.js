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

const HeaderText = styled("h2")(({ theme }) => ({
  color: "#fff",
  fontWeight: "900",
  fontSize: "23px",
  [theme.breakpoints.down("md")]: {
    fontWeight: "800",
    fontSize: "20px",
  },
}));

const StyledToolBar = styled(Toolbar)({
  width: "90%",
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "0px",
});

const StyledMenuButton = styled(Button)({
  color: "#fff",
  fontWeight: 700,
  fontSize: "13px",
});

const StyledLoginButton = styled(Button)({
  color: "#333",
  fontWeight: 800,
  backgroundColor: "#fff",
  width: "120px",
  "&:hover": { backgroundColor: "#2f53a5", color: "white" },
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
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#07163a",
          boxShadow: "none",
          position: "fixed",
        }}
      >
        <StyledToolBar>
          <HeaderText>Consulta.io</HeaderText>
          <Box direction="row" sx={{ display: { xs: "none", md: "block" } }}>
            <StyledMenuButton onClick={() => navigate("/")} variant="body1">
              Home
            </StyledMenuButton>
            <StyledMenuButton
              onClick={() => navigate("/services")}
              variant="body1"
            >
              Services
            </StyledMenuButton>
            <StyledMenuButton onClick={() => navigate("/faq")} variant="body1">
              Question & Answer
            </StyledMenuButton>
            <StyledMenuButton
              onClick={() => navigate("/consult")}
              variant="body1"
            >
              Consultation
            </StyledMenuButton>
            <StyledMenuButton onClick={() => navigate("/blog")} variant="body1">
              Articles
            </StyledMenuButton>
          </Box>
          <Box>
            <StyledLoginButton
              onClick={() => navigate("/login")}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              Log in
            </StyledLoginButton>
            <IconButton
              onClick={toggleDrawer("left", true)}
              sx={{ display: { xs: "block", md: "none", color: "white" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </StyledToolBar>
      </AppBar>
      <Drawer open={state["left"]} onClose={toggleDrawer("left", false)}>
        {list("left")}
      </Drawer>
    </div>
  );
};

export default Navbar;
