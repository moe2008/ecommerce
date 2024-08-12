import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const TutItem = (props) => {
  return (
    <Flex direction={"column"} gap={5} textAlign={"center"}>
      <Heading
        textAlign="center"
        color="#343434"
        fontSize="2xl"
        fontWeight="bold"
        fontFamily={"open sans"}
      >
        {props.title}
      </Heading>
      <Heading
        fontSize="lg"
        fontFamily={"open sans"}
        color="#343434"
        fontWeight="light"
      >
        {props.description}
      </Heading>
    </Flex>
  );
};

export default TutItem;
