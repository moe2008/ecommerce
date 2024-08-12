import { Flex, Image, Heading } from "@chakra-ui/react";
import React from "react";
import logo from "../../../public/Logo.png";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const DesktopNavbar = (props) => {
  return (
    <Flex
      width={["100%"]}
      height={["10vh"]}
      bgColor="#343434"
      position="fixed"
      display={["none", "none", "flex", "flex"]}
      zIndex={12}
    >
      <Flex
        as={motion.div}
        width="50%"
        alignItems="center"
        justifyContent="flex-start"
        marginLeft="2em"
        animate={{
          opacity: [0, 1],
          x: [-100, 0],
          transition: { delay: 0.3 },
        }}
      >
        <Image src={logo.src} width={["2em"]} height="2em" alt="Image" />
        <Heading fontSize="md" color="#f3f3f3" fontFamily={"open sans"}>
          CleanIT
        </Heading>
      </Flex>
      <Flex width="50%">
        <Flex
          as={motion.div}
          width="70%"
          alignItems="center"
          justifyContent="flex-end"
          gap="2em"
          variants={containerVariants}
          initial="hidden"
          animate={"visible"}
        >
          <motion.div variants={itemVariants}>
            <NavLinks
              fs={["0.5em", "0.5em", "0.65em", "md"]}
              name="Home"
              onClickS={props.onClickScroll}
              id={0}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <NavLinks
              fs={["0.5em", "0.5em", "0.65em", "md"]}
              name="Service"
              onClickS={props.onClickScroll}
              id={1}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <NavLinks
              fs={["0.5em", "0.5em", "0.65em", "md"]}
              name="Team"
              onClickS={props.onClickScroll}
              id={2}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <NavLinks
              fs={["0.5em", "0.5em", "0.65em", "md"]}
              name="Gallery"
              onClickS={props.onClickScroll}
              id={3}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <NavLinks
              fs={["0.5em", "0.5em", "0.65em", "md"]}
              name="Contact"
              onClickS={props.onClickScroll}
              id={4}
            />
          </motion.div>
        </Flex>
        <Flex
          as={motion.div}
          width="30%"
          alignItems="center"
          justifyContent="flex-end"
          marginRight="2em"
          animate={{
            opacity: [0, 1],
            x: [-100, 0],
            transition: { delay: 0.8 },
          }}
        >
          <NavLinks
            fs={["0.5em", "0.5em", "0.65em", "md"]}
            name="Shop"
            onClickS={props.onClickScroll}
            id="shop"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DesktopNavbar;
