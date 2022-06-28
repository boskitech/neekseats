import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtons({ listName, listValue }) {
  const [value, setValue] = React.useState(() => []);

  const handleFormat = (event, newValue) => {
    setValue(newValue);
  };

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
