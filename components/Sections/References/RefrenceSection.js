import React, { forwardRef, useEffect, useRef } from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import HorizontalList from "../../UI/HorizontalList";
import HorizontalListItem from "../../UI/HorizontalListItem";
import referenceArr from "../../../helpers/reference";
import classes from "./ReferenceSection.module.css";
import { useInView, useAnimation } from "framer-motion";

const itemVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const referenceVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const RefrenceSection = React.forwardRef((props, ref) => {
  const [progress, setProgress] = useState("0%");
  const [content, setContent] = useState(
    <Image
      key="0"
      src="https://picsum.photos/200/300"
      width={["100%", "100%", "100%", "100%"]}
      height={["100%", "100%", "100%", "100%"]}
    />
  );
  const containerRef = useRef();
  const controls = useAnimation();
  const containerInView = useInView(containerRef, {
    once: true,
    margin: "0px 100px -50% 0px",
  });

  useEffect(() => {
    if (containerInView) {
      controls.start("visible");
    }
  }, [containerRef, containerInView]);

  const onClickHandler = (e) => {
    let progress;
    const text = e.target.outerText;
    const refArrLen = referenceArr.length;
    let c;

    for (let i = 0; i < refArrLen; i++) {
      if (text === referenceArr[i].name) {
        c = referenceArr[i].image;
        if (i === refArrLen - 1) {
          progress = 100;
        } else {
          progress = Math.round(((i + 1) / refArrLen) * 100);
        }
      }
    }
    setContent(c);
    setProgress(progress + "%");
  };

  return (
    <Flex
      transition="0.4s ease-out"
      backgroundColor="#F3F3F3"
      flexDirection="column"
      alignItems="space-around"
      ref={ref}
    >
      <Flex alignItems="center" justifyContent="center" marginTop="5">
        <Heading
          color="#343434"
          fontSize="3xl"
          marginBottom="5"
          className={classes.text}
          fontFamily={"open sans"}
          fontWeight={1000}
        >
          Gallery
        </Heading>
      </Flex>
      <Flex
        as={motion.div}
        variants={itemVariants}
        animate={controls}
        ref={containerRef}
        initial="hidden"
        flexDirection={["column", "column", "column", "row"]}
        marginBottom={["0", "0", "0", "5"]}
        marginRight={["0", "0", "0", "5"]}
        marginLeft={["0", "0", "0", "5"]}
        padding={["0", "0", "0", "5"]}
        backgroundColor={{ lg: "#343434" }}
        alignItems={{ lg: "center" }}
        justifyContent="space-between"
      >
        <HorizontalList>
          {referenceArr.map((ref) => (
            <motion.div variants={referenceVariants} key={referenceArr.name}>
              <HorizontalListItem
                itemName={ref.name}
                onClickHandler={onClickHandler}
              />
            </motion.div>
          ))}
        </HorizontalList>
        <Flex
          height={["5px", "70vh"]}
          width="7px"
          alignSelf="center"
          marginRight="0.5%"
          display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
        >
          <Box
            as={motion.div}
            bgColor="white"
            height={progress}
            width="100%"
            animate={{ height: progress }}
            transition="0.75s ease-out"
          ></Box>
        </Flex>
        <Flex
          height={["3px", "3px", "3px", "80%"]}
          width="80%"
          alignSelf="center"
          marginBottom="1%"
          marginTop="2"
          display={{ lg: "none" }}
        >
          <Box
            as={motion.div}
            backgroundColor="black"
            width={progress}
            height="100%"
            animate={{ width: progress }}
            transition="0.75s ease-out"
          ></Box>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          alignSelf="center"
          minHeight="50vh"
          maxH="80vh"
          minW={["80vw", "80vw", "80vw", "60vw"]}
          marginBottom="5"
          overflow="hidden"
          objectFit="cover"
        >
          {content}
        </Flex>
      </Flex>
    </Flex>
  );
});

export default RefrenceSection;
