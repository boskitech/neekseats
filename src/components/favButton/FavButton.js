import React from "react";
import Fab from "@mui/material/Fab";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { styled } from "@mui/system";

const FavButton = () => {
  const StyledFabButton = styled(Fab)(({ theme }) => ({
    background: "#fff",
    border: "1px solid #5fa5e3",
    position: "absolute",
    display: "flex",
    justifyContent: "flex-start",
    color: "#5fa5e3",
    margin: "15px",
    boxShadow: "none",
    "&:hover": {
      background: "#416cb7",
      border: "1px solid #416cb7",
      color: "#fff",
    },
    [theme.breakpoints.down("md")]: {
      margin: "8px",
    },
  }));
  return (
    <div>
      <StyledFabButton size="small" color="primary" aria-label="add">
        <FavoriteBorderOutlinedIcon
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "auto",
          }}
        />
      </StyledFabButton>
    </div>
  );
};

export default FavButton;
