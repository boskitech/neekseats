import { styled } from "@mui/system";

const Cart = () => {
  const CartBody = styled("div")(({ theme }) => ({
    width: "70%",
    margin: "130px auto",
    [theme.breakpoints.up("xl")]: {
      width: "60%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "80%",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "40px auto",
    },
  }));
  return <div>Cart</div>;
};

export default Cart;
