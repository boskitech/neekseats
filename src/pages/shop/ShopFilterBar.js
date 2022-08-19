import * as React from "react";
import MuiAccordion from "@mui/material/Accordion";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ToggleButtons from "../../components/toggleButton/Toggle";
import MuiToggleButton from "@mui/material/ToggleButton";
import MuiToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {
  fetchProductsByFilter,
} from "../../reducers/productSlice";
import { useDispatch } from "react-redux";

 


const filters = {
    categories: [
      { listName: "Smart Watches", listValue: "smart" },
      { listName: "Chain Watches", listValue: "chain" },
      { listName: "Leather Watches", listValue: "leather" },
      { listName: "Rubber Watch", listValue: "rubber" },
      { listName: "Chronograph", listValue: "chronograph" },
    ],
    sortBy: [
      { listName: "Newest", listValue: "newest" },
      { listName: "Lowest To High", listValue: "lowest" },
      { listName: "Higest To Lowest", listValue: "highes" },
    ],
    brand: [
      { listName: "APPLE", listValue: "Apple" },
      { listName: "LIGE", listValue: "LIGE" },
      { listName: "SENBONO", listValue: "SENBONO" },
      { listName: "IWO", listValue: "IWO" },
    ],
  };

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
    "&:hover": {
      fontWeight: 600,
      color: "#444",
      backgroundColor: "#fff9eb",
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
    "&:hover": {
      fontWeight: 600,
      color: "#444",
      backgroundColor: "#fff9eb",
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    backgroundColor: "#fff9eb",
    padding: "5px 0px 0px 20px",
  }));


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

export default function ShopFilterBar() {

  const [value, setValue] = React.useState(() => []);
  const [filterArr, setFilterArr] = React.useState([])
  const [action, setAction] = React.useState(false)
  const [type, setType] = React.useState('')
  const dispatch = useDispatch()

  const handleFormat = (event, newValue) => {
    setValue(newValue);
  };

  function handleFilter(e){
    let data = e.target.value
    setFilterArr(prev => [...prev, data])
    setAction(true)

  }

  React.useEffect(() => {
    if(action){
      const meta = {
        "brand": filterArr,
        "category": []
      }

      if(type === 'brand'){
        // meta["brand"].push(JSON.stringify(filterArr)) 
        dispatch(fetchProductsByFilter(meta))
      }else if(type === 'category'){
        meta["category"].push(filterArr)
        dispatch(fetchProductsByFilter(meta))
      }


      console.log(meta)
    }
  // eslint-disable-next-line
  }, [action,filterArr])

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
              tab="categories"
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
              tab="sort"
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
          <StyledFilterBarHeader>Brand</StyledFilterBarHeader>
        </AccordionSummary>
        <AccordionDetails>
          {filters.brand.map((filter, index) => (
            <ToggleButtonGroup
                key={index}
                value={value}
                onChange={handleFormat}
                aria-label="text formatting"
              >
                <ToggleButton onClick={(e) => 
                    {
                      setType('brand')
                      handleFilter(e)
                    }
                  } value={filter.listValue} aria-label="bold">
                  {filter.listName}
                </ToggleButton>
               </ToggleButtonGroup>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
