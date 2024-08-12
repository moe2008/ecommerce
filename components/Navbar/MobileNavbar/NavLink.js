import React from "react";
import { Link } from "@chakra-ui/react";

const NavLink = (props) => {
  return (
    <Link
      fontSize="3xl"
      color="#F3F3F3"
      _hover={{ textDecoration: "none", color: "#8E8B82" }}
      onClick={() => {
        props.onClickScroll(props.id);
        props.onClick();
      }}
    >
      {props.name}
    </Link>
  );
};

export default NavLink;
