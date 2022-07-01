import styled from "@emotion/styled";
import { Button } from "@mui/material";

const BuyButton = styled(Button)(({ theme }) => ({
  fontSize: "13px",
  color: "white",
  marginTop: "10px",
  backgroundColor: "#b43e3a",
  "&:hover": {
    background: "#f85321",
  },
}));
export default BuyButton;
