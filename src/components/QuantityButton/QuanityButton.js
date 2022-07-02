import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const QuanityButton = () => {
  const [quantity, SetQuantity] = useState(1);

  const StyledQuantityBar = styled("div")(({ theme }) => ({
    height: "28px",
    width: "auto",
    borderRadius: "4px",
    border: "1px solid #bfbfbf",
    margin: "20px 10px",
    color: "#777",
    fontSize: "15px",
  }));

  const QuantityDiv = styled("div")(({ theme }) => ({
    fontSize: "15px",
    padding: "1px",
  }));
  return (
    <StyledQuantityBar>
      <QuantityDiv>
        <IconButton size="small" onClick={() => SetQuantity(quantity - 1)}>
          <RemoveIcon
            sx={{
              fontSize: "17px",
              marginRight: "6px",
              marginLeft: "6px",
              marginBottom: "3px",
            }}
          />
        </IconButton>
        {quantity}
        <IconButton size="small" onClick={() => SetQuantity(quantity + 1)}>
          <AddIcon
            sx={{
              fontSize: "17px",
              marginRight: "6px",
              marginLeft: "6px",
              marginBottom: "3px",
            }}
          />
        </IconButton>
      </QuantityDiv>
    </StyledQuantityBar>
  );
};

export default QuanityButton;
