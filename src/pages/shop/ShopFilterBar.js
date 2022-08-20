import * as React from "react";
import MuiAccordion from "@mui/material/Accordion";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiToggleButton from "@mui/material/ToggleButton";
import MuiToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {
  newestItems,
  highestItems,
  lowestItems,
  fetchProducts,
  fetchProductsByFilter,
} from "../../reducers/productSlice";
import { useDispatch } from "react-redux";
import { filters } from "../../utils/filter";

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
  const [brandArr, setBrandArr] = React.useState([])
  const [categoryArr, setCategoryArr] = React.useState([])
  const [action, setAction] = React.useState(false)
  const dispatch = useDispatch()

  const handleFormat = (event, newValue) => {
    setValue(newValue);
  };

  function handleBrandFilter(e){
    let data = e.target.value
    if(brandArr.find(item => item === data)){
      setBrandArr(prev => prev.filter(item => item !== data))
    }else{
      setBrandArr(prev => [...prev, data])
    }
    setAction(true)
  }

  function handleSort(e){
    if(e.target.value === 'newest'){
      dispatch(newestItems())
    }else if(e.target.value === 'lowest'){
      dispatch(lowestItems())
    }else if(e.target.value === 'highest'){
      dispatch(highestItems())
    }
  }

  function handleCatFilter(e){
    let data = e.target.value
    if(categoryArr.find(item => item === data)){
      setCategoryArr(prev => prev.filter(item => item !== data))
    }else{
      setCategoryArr(prev => [...prev, data])
    }
    setAction(true)
  }

  React.useEffect(() => {
    if(action){
      const meta = {
        "brand": brandArr,
        "category": categoryArr
      }
      if(meta["brand"].length > 0 || meta["category"].length > 0){
        dispatch(fetchProductsByFilter(meta))
      }else{
        dispatch(fetchProducts());
      }
    }
  // eslint-disable-next-line
  }, [action, brandArr, categoryArr])

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
            <ToggleButtonGroup
                key={index}
                onChange={handleFormat}
                aria-label="text formatting"
              >
                <ToggleButton onClick={(e) => handleCatFilter(e) }
                  value={filter.listValue} aria-label="bold">
                  {filter.listName}
                </ToggleButton>
               </ToggleButtonGroup>
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
            <ToggleButtonGroup
                key={index}
                value={value}
                exclusive
                onChange={handleFormat}
                aria-label="text formatting"
              >
                <ToggleButton onClick={(e) => handleSort(e) }
                    value={filter.listValue} aria-label="bold">
                  {filter.listName}
                </ToggleButton>
               </ToggleButtonGroup>
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
                <ToggleButton onClick={(e) => handleBrandFilter(e) } 
                  value={filter.listValue} aria-label="bold">
                  {filter.listName}
                </ToggleButton>
               </ToggleButtonGroup>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
