import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import muster2 from "../../../Bottle7.png"
import classes from "./HeroContent.module.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import { useRouter } from "next/router";


const HeroContent = (props) => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const router = useRouter()

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
            FloorGleam
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
            Keep your floors looking their best with FloorGleam. This versatile cleaner and conditioner is designed for all types of flooring, from hardwood to laminate and tiles. It gently cleans while adding a protective layer that enhances shine and guards against wear and scratches.
          </Text>
          <Button
            marginTop="0.5em"
            size={["md", "md", "sm", "md"]}
            className={classes.text}
            backgroundColor="#DFBF95"
            fontFamily={"open sans"}
            _hover={{ backgroundColor: "#DFBF91" }}
            onClick={() => router.push("/shop")}
          >
            Visit Shop
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
          src={muster2.src}
          color="white"
          backgroundColor="black"
          className={classes.image}
        />
      </Flex>
    </Flex>
  );
};
export default HeroContent;
