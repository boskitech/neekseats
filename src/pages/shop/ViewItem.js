import React from "react";
import { motion } from "framer-motion";
import { styled } from "@mui/system";

const ViewItem = () => {
  const ViewItemBody = styled("div")(({ theme }) => ({
    width: "70%",
    margin: "110px auto",
    [theme.breakpoints.up("xl")]: {
      width: "60%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "80%",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  }));

  return (
    <motion.div
      initial={{ opacity: 0.5, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.5, x: -100 }}
      transition={{ duration: 0.3 }}
    >
      <ViewItemBody>Hello</ViewItemBody>
    </motion.div>
  );
};

export default ViewItem;
