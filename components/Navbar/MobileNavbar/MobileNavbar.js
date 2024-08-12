import React from "react";
import {
  Flex,
  Image,
} from "@chakra-ui/react";
import logo from "../../../public/Logo.png";
import HamburgerMenu from "./HamburgerMenu";

const MobileNavbar = (props) => {
  
  return (
    <Flex width={["100%"]} height={["12vh"]} bgColor="#343434" position="fixed" display={["flex", "flex", "none", "none"]} zIndex={12}>
      <Flex
        width={["50%"]}
        alignItems={["center"]}
        justifyContent={["flex-start"]}
        marginLeft={["2em"]}
      >
        <Image src={logo.src} width={["2em", "2em", "3em"]} height={["2em", "2em", "3em"]} style={{ cursor: 'pointer'}} alt="Image" onClick={() => props.onClickScroll(0)}/>
      </Flex>
      <Flex
        width={["50%"]}
        alignItems={["center"]}
        justifyContent={["flex-end"]}
        marginRight={["2em"]}
      >
        <HamburgerMenu onClickScroll={props.onClickScroll}/>
      </Flex>
    </Flex>
  );
};

export default MobileNavbar;
