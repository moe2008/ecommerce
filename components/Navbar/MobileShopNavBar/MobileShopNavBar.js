import React from 'react'

import {
  Flex,
  Image,
} from "@chakra-ui/react";
import logo from "../../../public/Logo.png";
import HamburgerMenu from "../MobileNavbar/HamburgerMenu";

const MobileShopNavBar = () => {
  return (
    <Flex width={["100%"]} height={["12vh"]} bgColor="#343434" position="fixed" display={["flex", "flex", "flex", "none"]} zIndex={12}>
      <Flex
        width={["50%"]}
        alignItems={["center"]}
        justifyContent={["flex-start"]}
        marginLeft={["2em"]}
      >
        <Image src={logo.src} width={["2em", "3em", "2em"]} height={["2em", "2em", "2em"]} alt="Image"/>
      </Flex>
      <Flex
        width={["50%"]}
        alignItems={["center"]}
        justifyContent={["flex-end"]}
        marginRight={["2em"]}
      >
        <HamburgerMenu/>
      </Flex>
    </Flex>
  )
}

export default MobileShopNavBar