import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import muster from "../../../public/ad.png";
import classes from "./HeroContent.module.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const HeroContent = (props) => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  useEffect(() => {
    controlsLeft.start({ opacity: [0, 1], x: [-100, 0] });
    controlsRight.start({ opacity: [0, 1], x: [100, 0] });

    return () => {
      controlsLeft.start({ opacity: [0, 1], x: [-100, 0] });
      controlsRight.start({ opacity: [0, 1], x: [100, 0] });
    };
  }, [controlsLeft, controlsRight]);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      direction={["column", "column", "column", "row"]}
      gap="10"
      backgroundColor="#343434"
    >
      <Flex
        as={motion.div}
        direction="column"
        alignItems={["center", "center", "center", "flex-start"]}
        marginTop="7"
        marginBottom="5"
        marginLeft={["5", "5", "10", "20"]}
        marginRight={["5", "5", "10", "5"]}
        maxWidth={{ lg: "45vw", sm: "80%" }}
        animate={controlsLeft}
        initial={{ opacity: 0, x: -100 }}
        transition="0.5s ease-out"
        transitionDelay="0.5s"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          textAlign={["center", "center", "left", "left"]}
          backgroundColor="#343434"
          marginBottom="5"
        >
          <Heading
            fontSize={["2xl", "2xl", "2xl", "3xl"]}
            className={classes.text}
            fontFamily={"open sans"}
          >
            Parkett, Laminat und Co
          </Heading>
        </Flex>
        <Flex
          alignItems={["center", "center", "center", "flex-start"]}
          justifyContent="flex-start"
          textAlign={["center", "center", "center", "left"]}
          direction="column"
        >
          <Text
            fontSize={["sm", "sm", "sm", "md"]}
            marginBottom="5"
            className={classes.text}
          >
            Willkommen bei Dierker Parkett, Ihrem Experten für erstklassige
            Parkettböden. Wir sind stolz darauf, eine große Auswahl an
            hochwertigen Parkettböden in verschiedenen Designs und für
            verschiedene Nutzungen anzubieten.
          </Text>
          <Button
            marginTop="0.5em"
            size={["md", "md", "sm", "md"]}
            className={classes.text}
            backgroundColor="#867872"
            fontFamily={"open sans"}
            _hover={{ backgroundColor: "#726661" }}
            onClick={() => props.onClickScroll(3)}
          >
            Mehr erfahren
          </Button>
        </Flex>
      </Flex>
      <Flex
        as={motion.div}
        alignItems="center"
        justifyContent="center"
        marginLeft="5"
        marginRight="5"
        marginBottom={["5", "5", "5", "0"]}
        animate={controlsRight}
        initial={{ opacity: 0, x: 100 }}
        transition="0.5s ease-out"
        transitionDelay="0.5s"
      >
        <img
          src={muster.src}
          color="white"
          backgroundColor="black"
          className={classes.image}
        />
      </Flex>
    </Flex>
  );
};
export default HeroContent;
