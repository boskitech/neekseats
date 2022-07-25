import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { formatToCurrency } from "../../utils/currencyFormatter";

const StyledCartItems = styled("div")(({ theme }) => ({
  width: "96%",
  height: "200px",
  borderRadius: "5px",
  padding: "15px 0px 15px 15px",
  [theme.breakpoints.down("md")]: {
    width: "96%",
    boxShadow: "0 0 2px #cfcfcf",
    margin: "15px 0",
    height: "auto",
  },
}));

const StyledCartImageDiv = styled("div")(({ theme }) => ({
  width: "100%",
  margin: "auto",
  height: "auto",
  borderRadius: "5px",
  backgroundColor: "#f1f1f1",
}));

const StyledCartImage = styled("img")(({ theme }) => ({
  width: "50%",
  height: "auto",
  margin: "10px",
  borderRadius: "5px",
}));

const StyledItemName = styled("div")(({ theme }) => ({
  fontSize: "16px",
  color: "#444",
  fontWeight: 400,
  padding: "15px 0px",
  [theme.breakpoints.down("md")]: {
    marginBottom: "5px",
    padding: "0px",
  },
}));

const StyledItemPrice = styled("div")(({ theme }) => ({
  fontSize: "16px",
  color: "#222",
  fontWeight: 400,
  padding: "15px 10px",
  [theme.breakpoints.down("md")]: {
    padding: "0px 15px 0 10px",
  },
}));

const StyledShippingText = styled("span")(({ theme }) => ({
  fontSize: "13px",
  color: "#666",
  fontWeight: 400,
  padding: "10px 0",
  [theme.breakpoints.down("md")]: {
    paddingTop: "10px",
  },
}));

const ItemBar = ({ itemImage, itemName, itemPrice }) => {
  return (
    <StyledCartItems>
      <Grid container direction="row" spacing="20">
        <Grid item xs={3}>
          <StyledCartImageDiv>
            <StyledCartImage
              src={`http://localhost:5200/uploads/${itemImage}`}
            ></StyledCartImage>
          </StyledCartImageDiv>
        </Grid>
        <Grid item xs={9}>
          <Grid container direction="column">
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <StyledItemName>{itemName}</StyledItemName>
              <StyledItemPrice>
                {formatToCurrency(parseInt(itemPrice))}
              </StyledItemPrice>
            </Grid>
            <Grid item>
              <StyledShippingText>
                Shipping - {formatToCurrency(parseInt(itemPrice))}
              </StyledShippingText>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledCartItems>
  );
};

export default ItemBar;
