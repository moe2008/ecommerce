import React from "react";
import {
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Drawer } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import NavLink from "./NavLink";

const HamburgerMenu = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Link>
      <IconButton width={["2em", "2em", "3em"]} height={["2em", "2em", "3em"]}>
        <HamburgerIcon
          onClick={onOpen}
          width={["1em", "1em", "2em"]}
          height={["1em", "2em", "2em"]}
        />
      </IconButton>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />
        <DrawerContent bgColor="#343434">
          <DrawerHeader fontFamily="monospace" color="#F3F3F3">Menu</DrawerHeader>
          <IconButton onClick={onClose} height={["2.2em", "2.2em", "2.2em"]}>
            <HamburgerIcon
              width={["1em", "2em", "3em"]}
              height={["1em", "2em", "3em"]}
            />
          </IconButton>
          <DrawerBody>
            <Flex
              height="100%"
              width="100%"
              justifyContent="flex-start"
              direction="column"
              alignItems="center"
              gap="8"
            >
              <NavLink
                name="Home"
                onClick={onClose}
                onClickScroll={props.onClickScroll}
                id={0}
              />
              <NavLink
                name="Service"
                onClickScroll={props.onClickScroll}
                id={1}
                onClick={onClose}
              />
              <NavLink
                name="Team"
                onClick={onClose}
                onClickScroll={props.onClickScroll}
                id={2}
              />
              <NavLink
                name="Gallery"
                onClickScroll={props.onClickScroll}
                onClick={onClose}
                id={3}
              />
              <NavLink
                name="Contact"
                onClickScroll={props.onClickScroll}
                id={4}
                onClick={onClose}
              />
              <NavLink
                name="Shop"
                onClickScroll={props.onClickScroll}
                id="shop"
                onClick={onClose}
              />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Link>
  );
};

export default HamburgerMenu;
