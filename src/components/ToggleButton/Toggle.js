import * as React from "react";
import MuiToggleButton from "@mui/material/ToggleButton";
import MuiToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/system";

export default function ToggleButtons({ listName, listValue }) {
  const [value, setValue] = React.useState(() => []);

  const handleFormat = (event, newValue) => {
    setValue(newValue);
  };

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

  return (
    <ToggleButtonGroup
      value={value}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value={listValue} aria-label="bold">
        {listName}
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
