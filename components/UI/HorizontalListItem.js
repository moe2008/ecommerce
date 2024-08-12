import React from "react";
import { Box } from "@chakra-ui/react";
import classes from './HorizontalListItem.module.css'

const HorizontalListItem = (props) => {
  return (
    <Box
      onClick={props.onClickHandler}
      display="inline-block"
      padding="10px"
      color={["black", "black", "black", "white"]}
      fontSize="1.2em"
      _hover={{cursor: "pointer"}}
      className={classes.text}
    >
      {props.itemName}
    </Box>
  );
};

export default HorizontalListItem;
