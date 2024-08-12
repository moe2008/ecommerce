import React from "react";
import { Box } from "@chakra-ui/react";

const HorizontalList = (props) => {
  return (
    <Box
      display="flex"
      overflowX={["scroll", "scroll", "hidden", "hidden"]}
      whiteSpace={["nowrap", "nowrap", "wrap", "wrap"]}
      gap="1em"
      flexDirection={["row", "row", "row", "column"]}
      marginRight={["0", "0", "0", "5"]}
    >
      {props.children}
    </Box>
  );
};

export default HorizontalList;
