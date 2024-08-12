import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import classes from "./Tut.module.css";
import TutItem from "./TutItem";
import tutArray from "../../helpers/tut";
import userGuide from "../../user-guide.png";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react";

const Tut = () => {
  return (
    <Flex
      width={["100%", "100%", "100%", "100%"]}
      backgroundColor="#F3F3F3"
      justifyContent="center"
      padding={"6"}
    >
      <Flex
        width={["100%", "100%", "50%", "50%"]}
        backgroundColor="#F3F3F3"
        flexDirection="column"
        gap="5"
        padding="5"
        alignItems={"center"}
      >
        <img src={userGuide.src} style={{ height: "60px", width: "60px" }} />
        <Heading
          textAlign="center"
          color="#343434"
          fontSize="3xl"
          fontFamily={"open sans"}
          fontWeight="bold"
          className={classes.text}
        >
          Allgemeine Anwendungsbeschreibung
        </Heading>
        <Accordion>
          {tutArray.map((item, index) => (
            <AccordionItem width="50vw">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {index+1 + " " + item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.description}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </Flex>
  );
};

export default Tut;
