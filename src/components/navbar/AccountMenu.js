import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Logout from "@mui/icons-material/Logout";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { checkUser } from "../../reducers/usersSlice";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Favorite, Person } from "@mui/icons-material";

export default function AccountMenu({ user }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    localStorage.clear();
    if (dispatch(checkUser())) window.location.href = "/";
  };
  return (
    <React.Fragment>
      <Tooltip title="Account">
        <Button
          onClick={handleClick}
          size="small"
          sx={{
            ml: "7px",
            color: "#000",
            textTransform: "capitalize",
            fontSize: "16px",
          }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <PersonOutlineOutlinedIcon sx={{ fontSize: "28px" }} />
          {user}
          <KeyboardArrowDownIcon sx={{ color: "#888" }} />
        </Button>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={{ width: "500px", paddingRight: "50px" }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to="/wishlist" style={{ textDecoration: "none", color: "#333" }}>
          <MenuItem>
            <ListItemIcon>
              <Favorite fontSize="small" />
            </ListItemIcon>
            Wish List
          </MenuItem>
        </Link>
        <Link to="/orders" style={{ textDecoration: "none", color: "#333" }}>
          <MenuItem>
            <ListItemIcon>
              <ShoppingBasketIcon fontSize="small" />
            </ListItemIcon>
            Orders
          </MenuItem>
        </Link>
        <Link to="/account" style={{ textDecoration: "none", color: "#333" }}>
          <MenuItem>
            <ListItemIcon>
              <Person fontSize="small" />
            </ListItemIcon>
            My Account
          </MenuItem>
        </Link>
        <Divider />
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
