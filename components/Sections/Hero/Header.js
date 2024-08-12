import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import header2 from "../../../BB_Paper_5.jpg"
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
      <Image src={header2.src} width="100%" height="100%" />
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1, delay: 1.4 }} 
      >
        <h1 className={classes.headerText}>
          Clean your floors.
        </h1>
      </motion.div>
    </Flex>
  );
});
export default Header;
