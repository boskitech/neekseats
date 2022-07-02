import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: "1px 3px 1px 1px",
    border: 0,
    padding: "1px 10px",
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  fontSize: "13px",
  textTransform: "capitalize",
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "#666",
    backgroundColor: "#ffff",
    boxShadow: "0 0 5px #dfdfdf",
  },
  "&.Mui-selected:hover": {
    color: "#777",
    backgroundColor: "#fff",
  },
  "&:hover": {
    color: "#444",
    backgroundColor: "#fff",
  },
}));

const StyledSubTotal = styled("div")(({ theme }) => ({
  marginTop: "20px",
  borderTop: "1px solid #f2f2f2",
}));

const StyledSubTotalHeader = styled("div")(({ theme }) => ({
  fontSize: "14px",
  color: "#666",
  fontWeight: 390,
  padding: "15px 0px 7px 0px",
  display: "flex",
  direction: "row",
  justifyContent: "space-between",
}));

const StyledSubTotalText = styled("div")(({ theme }) => ({
  fontSize: "12px",
  color: "#888",
  fontWeight: 370,
  padding: "7px 0px",
  display: "flex",
  direction: "row",
  justifyContent: "space-between",
}));

const StyledBannerCartButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#c73217",
  color: "white",
  width: "100%",
  height: "33px",
  textTransform: "capitalize",
  margin: "10px 0 15px 0",
  padding: "10px",
  fontSize: "14px",
  boxShadow: "0 0 5px #dfdfdf",
  marginRight: "10px",
  "&:hover": {
    backgroundColor: "#416cb7",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "38px",
    fontWeight: 500,
    fontSize: "15px",
  },
}));

export default function DeliveryBar() {
  const [alignment, setAlignment] = React.useState("free");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box sx={{ padding: { xs: "0px", md: "0px 15px" } }}>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          height: "30px",
          background: "#f2f2f2",
          border: "1px solid #efefef",
        }}
      >
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <StyledToggleButton value="free" aria-label="paid">
            Free
          </StyledToggleButton>
          <StyledToggleButton value="paid" aria-label="paid">
            Express: $9.99
          </StyledToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
      <StyledSubTotal>
        <StyledSubTotalHeader>
          <span>SubTotal</span>
          <span>$80.96</span>
        </StyledSubTotalHeader>
        <StyledSubTotalText>
          <span>Discount</span>
          <span>$1.46</span>
        </StyledSubTotalText>
        <StyledSubTotalText>
          <span>Delivery</span>
          <span>$0.00</span>
        </StyledSubTotalText>
        <StyledSubTotalText>
          <span>Tax</span>
          <span>$14.00</span>
        </StyledSubTotalText>
        <StyledSubTotalHeader sx={{ paddingBottom: "20px" }}>
          <span>Total</span>
          <span>$78.76</span>
        </StyledSubTotalHeader>
        <StyledBannerCartButton>Proceed to checkout</StyledBannerCartButton>
      </StyledSubTotal>
    </Box>
  );
}
