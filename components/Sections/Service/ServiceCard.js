import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import muster from "../../../public/check.png";
import classes from "./ServiceCard.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const imgVar = {
  visible: { y: [-100, 0], opacity: [0, 1] },
  hidden: { opacity: 0, y: -100 },
};
const ServiceCard = (props) => {
  const controls = useAnimation();

  const imgRef = useRef();
  const imgInView = useInView(imgRef, { once: true, margin: "0px 100px -50px 0px"  });

  useEffect(() => {
    if (imgInView) {
      controls.start("visible");
    }
  }, [imgRef, imgInView]);
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      maxHeight="50%"
      padding="5"
      maxWidth={["90%", "80%", "80%", "90%"]}
    >
      <Flex
        as={motion.div}
        ref={imgRef}
        variants={imgVar}
        marginBottom="8"
        alignItems="center"
        justifyContent="center"
        animate={controls}
        transition="0.4s ease-out"
        opacity="0"
        minHeight="10rem"
        minWidth="8rem"
      >
        <img src={muster.src} className={classes.image} />
      </Flex>
      <Flex
        as={motion.div}
        direction="column"
        textAlign="center"
        animate={{ x: [-100, 0] }}
        transition="1.2s ease-out"
      >
        <Heading
          color="#343434"
          marginBottom="2"
          fontSize={["md", "md", "md", "lg"]}
          fontFamily={"open sans"}
          fontWeight={1000}
        >
          {props.title}
        </Heading>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </Flex>
    </Flex>
  );
};

export default ServiceCard;
