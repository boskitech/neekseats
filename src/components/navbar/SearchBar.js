import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
  productStatus,
} from "../../reducers/productSlice";

const StyledSearchUl = styled("ul")(({ theme }) => ({
  textDecoration: "none",
  listStyleType: "none",
  padding: "15px",
  margin: "0px",
  height: "15px",
  "&:hover": {
    backgroundColor: "#ebebeb",
    cursor: "pointer",
  },
}));

const StyledSearchLi = styled("li")(({ theme }) => ({
  textDecoration: "none",
  height: "15px",
  listStyleType: "none",
  paddingLeft: "0",
  "&:hover": {
    cursor: "pointer",
  },
}));

const StyledGridLoginInput = styled(TextField)(({ theme }) => ({
  width: "400px",
  height: "50px",
  margin: "0px auto 0 auto",
  fontSize: "14px",
  backgoundColor: "white",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledLoginButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: 800,
  backgroundColor: "#416cb7",
  width: "120px",
  marginLeft: "10px",
  "&:hover": { backgroundColor: "#2f53a5", color: "white" },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [focus, setFocus] = useState(false);
  const allProducts = useSelector(selectAllProducts);
  const status = useSelector(productStatus);
  const handleBlur = () => {
    setTimeout(() => {
      setFocus(false);
      setSearchValue("");
    }, [200]);
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  });

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    const userInput = e.target.value;

    const data = allProducts.filter(
      (searchitem) =>
        searchitem.productName.toLowerCase().indexOf(userInput.toLowerCase()) >
        -1
    );

    if (userInput) setSearchResults(data.slice(0, 8));
  };

  return (
    <Box
      direction="row"
      sx={{ marginTop: "15px", display: { xs: "none", md: "block" } }}
    >
      <StyledGridLoginInput
        onChange={handleChange}
        onFocus={() => setFocus(true)}
        onBlur={handleBlur}
        size="small"
        placeholder="Search Items"
        value={searchValue}
      />
      <StyledLoginButton
        sx={{ width: "40px", marginLeft: "5px", height: "40px" }}
      >
        <SearchIcon />
      </StyledLoginButton>
      {searchValue !== " " && searchValue !== "" && focus && (
        <Box
          sx={{
            width: "400px",
            backgroundColor: "#fff",
            position: "absolute",
            border: "1px solid #dfdfdf",
            color: "black",
            overflow: "auto",
          }}
        >
          {searchResults.map((results, index) => (
            <StyledSearchUl key={index}>
              <StyledSearchLi onClick={() => navigate("/shop")}>
                {results.productName.substr(0, 20)}
              </StyledSearchLi>
            </StyledSearchUl>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
