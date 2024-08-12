import { Link, textDecoration } from "@chakra-ui/react";
import React from "react";

const NavLinks = (props) => {
  return (
    <Link
      fontSize={props.fs}
      fontFamily={"open sans"}
      _hover={{ textDecoration: "none", color: "#8E8B82" }}
      color="#F3F3F3"
      onClick={() => props.onClickS(props.id)}
    >
      {props.name}
    </Link>
  );
};

export default NavLinks;
