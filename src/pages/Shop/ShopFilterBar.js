import * as React from "react";
import MuiAccordion from "@mui/material/Accordion";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ToggleButtons from "../../components/ToggleButton/Toggle";

export default function ShopFilterBar() {
  const filters = {
    categories: [
      { listName: "Apple Series 2", listValue: "appleSeries6" },
      { listName: "Apple Series 3", listValue: "appleSeries6" },
      { listName: "Apple Series 4", listValue: "appleSeries6" },
      { listName: "Apple Series 5", listValue: "appleSeries6" },
      { listName: "Apple Series 6", listValue: "appleSeries6" },
      { listName: "Custom Smart Watches", listValue: "customSmartWatches" },
      {
        listName: "Gorilla Face Smart Watches",
        listValue: "gorillaFaceSmartWatches",
      },
      { listName: "Water Resitant", listValue: "waterResitant" },
    ],
    sortBy: [
      { listName: "Newest", listValue: "newest" },
      { listName: "Lowest Price", listValue: "lowesrPrice" },
      { listName: "Most Purchased", listValue: "mostPurchased" },
      { listName: "Most Reviewed", listValue: "mostReviewed" },
    ],
    availability: [
      { listName: "Current Available", listValue: "currently" },
      { listName: "Pre-Order", listValue: "preOrder" },
      { listName: "2 weeks", listValue: "twoweeks" },
      { listName: "4 weeks", listValue: "fourweeks" },
      { listName: "2 months", listValue: "twomonths" },
    ],
    specification: [
      { listName: "LV Strip", listValue: "lvstrip" },
      { listName: "Gucci Strip", listValue: "guccistrip" },
      { listName: "Dior Strip", listValue: "diorstrip" },
      { listName: "Quartz Leather Strip", listValue: "quartzleatherstrip" },
      { listName: "Quartz Chain Strip", listValue: "quartzchainstrip" },
    ],
  };

  console.log(filters);
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: "#fff9eb",
    flexDirection: "row",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(180deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const StyledFilterBarHeader = styled("div")(({ theme }) => ({
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#444",
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    backgroundColor: "#fff9eb",
    padding: theme.spacing(2),
  }));

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <StyledFilterBarHeader>Categories</StyledFilterBarHeader>
        </AccordionSummary>
        <AccordionDetails>
          {filters.categories.map((filter, index) => (
            <ToggleButtons
              key={index}
              listName={filter.listName}
              listValue={filter.listValue}
            />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <StyledFilterBarHeader>Sort by</StyledFilterBarHeader>
        </AccordionSummary>
        <AccordionDetails>
          {filters.sortBy.map((filter, index) => (
            <ToggleButtons
              key={index}
              listName={filter.listName}
              listValue={filter.listValue}
            />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <StyledFilterBarHeader>Availabity</StyledFilterBarHeader>
        </AccordionSummary>
        <AccordionDetails>
          {filters.availability.map((filter, index) => (
            <ToggleButtons
              key={index}
              listName={filter.listName}
              listValue={filter.listValue}
            />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <StyledFilterBarHeader>Specifications</StyledFilterBarHeader>
        </AccordionSummary>
        <AccordionDetails>
          {filters.specification.map((filter, index) => (
            <ToggleButtons
              key={index}
              listName={filter.listName}
              listValue={filter.listValue}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
