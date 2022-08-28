import * as React from "react";
import MuiToggleButton from "@mui/material/ToggleButton";
import MuiToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/system";
// import {
//   fetchProductsByFilter,
// } from "../../reducers/productSlice";
// import { useDispatch } from "react-redux";

  const ToggleButton = styled(MuiToggleButton)(({ theme }) => ({
    display: "block",
    width: "100%",
    border: "none",
    textAlign: "left",
    fontSize: "13px",
    color: "#444",
    textTransform: "capitalize",
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "#805a0f",
      fontWeight: 600,
      backgroundColor: "#fff9eb",
    },
    "&.Mui-selected:hover": {
      color: "#dfac47",
      fontWeight: 600,
      backgroundColor: "#fff9eb",
    },
    "&:hover": {
      fontWeight: 600,
      color: "#444",
      backgroundColor: "#fff9eb",
    },
  }));

  const ToggleButtonGroup = styled(MuiToggleButtonGroup)(({ theme }) => ({
    backgroundColor: "#fff9eb",
    display: "block",
    width: "100%",
    color: "#333",
    marginTop: "-5px",
  }));


export default function ToggleButtons({ listName, listValue, tab }) {
  const [value, setValue] = React.useState(() => []);
  // const [brandArr, setBrandArr] = React.useState(() => [])
  const [brandArr, setBrandArr] = React.useState([])

  const handleFormat = (event, newValue) => {
    setValue(newValue);
  };

  function handleFilter({listValue, tab}){

    const meta = {
        "brand": [],
        "category": []
    }

    if(tab === "brand"){
      setBrandArr([...brandArr, listValue])
        meta["brand"].push(brandArr)
    }else{
        meta["category"].push(listValue)
    }

    
  }

  return (
    <ToggleButtonGroup
      value={value}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton onClick={() => handleFilter({listValue, listName, tab})} value={listValue} aria-label="bold">
        {listName}
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
