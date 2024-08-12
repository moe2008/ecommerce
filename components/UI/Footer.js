import React from "react";
import { Flex } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import classes from "./Footer.module.css"

const Footer = (props) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justfiyContent="center"
      flexGrow="1"
      width={props.width}
      backgroundColor={props.bgColor}
    >
      <Heading
        fontSize="sm"
        marginBottom="5"
        marginTop="10"
        className={classes.text}
        fontWeight="light"
        color={props.fontColor}
      >
        Copyright ©MODEV 2023
      </Heading>
    </Flex>
  );
};

export default Footer;
