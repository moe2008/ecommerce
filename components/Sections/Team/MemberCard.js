import { Flex } from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useAnimation } from "framer-motion";
import classes from "./MemberCard.module.css"

const imgVar = {
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
};

const textVar = {
  show: { x: 0, opacity: 1 , transition: { duration: 0.8 } },
};

const MemberCard = (props) => {
  const controls = useAnimation();
  const imgRef = useRef();
  const textRef = useRef();

  const textInView = useInView(textRef, { once: true });
  const imgInView = useInView(imgRef, { once: true, margin: "0px 100px -50px 0px" });

  useEffect(() => {
    if (imgInView) {
      controls.start("visible");
      controls.start("show")
    }
  }, [imgRef, imgInView, textInView]);

  return (
    <Flex
      minHeight="40%"
      flexDir="column"
      alignItems="center"
      minWidth={["0%", "0%", "40%", "0%"]}
    >
      <Flex
        as={motion.div}
        variants={imgVar}
        animate={controls}
        initial={{ opacity: 0, scale: 0.5 }}
        minHeight="60%"
        marginBottom="4"
        ref={imgRef}
      >
        <Avatar
          src="https://bit.ly/ryan-florence"
          height={["8em", "8em", "8em", "10em"]}
          width={["8em", "8em", "8em", "10em"]}
        />
      </Flex>
      <Flex
        as={motion.div}
        variants={textVar}
        animate={controls}
        initial={{ x: -1000, opacity: 0 }}
        minHeight="40%"
        flexDir="column"
        alignItems="center"
        textAlign="center"
      >
        <Heading marginBottom="3" fontSize={["md", "md", "md", "md"]} color="#f3f3f3" fontFamily={'open sans'} fontWeight={1000}>
          {props.name}
        </Heading>
        <p className={classes.desc}>{props.description}</p>
      </Flex>
    </Flex>
  );
};

export default MemberCard;
