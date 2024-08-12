import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import header from "../../../public/headerbg.jpg";
import classes from "./Header.module.css";
import { motion } from "framer-motion";
const Header = React.forwardRef((props, ref) => {
  return (
    <Flex
      height="40vh"
      width="100%"
      alignItems="center"
      justifyContent="center"
      position="relative"
      ref={ref}
    >
      <Image src={header.src} width="100%" height="100%" />
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1, delay: 1.4 }} 
      >
        <h1 className={classes.headerText}>
          Ihr Fachbetrieb für Parkettarbeiten
        </h1>
      </motion.div>
    </Flex>
  );
});
export default Header;
