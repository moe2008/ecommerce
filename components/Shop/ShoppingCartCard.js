import React from "react";
import { Flex, Image, Heading, Text, Button } from "@chakra-ui/react";
import loba from "../../public/loba.png";

const ShoppingCartCard = (props) => {
  const price = props.price * props.quantity;
  return (
    <Flex
      width="80%"
      gap="5"
      alignItems="center"
      justifyContent="center"
      marginLeft="10%"
      marginRight="10%"
      flexDirection={["column", "column", "row", "row"]}
    >
      <Image src={loba.src} />
      <Flex direction="column" gap="3">
        <Heading color="#F3F3F3">{props.name}</Heading>
        <Text color="#F3F3F3">{props.description}</Text>
        <Text color="#F3F3F3">{price} €</Text>
        <Text color="F3F3F3">{props.id}</Text>
      </Flex>
      <Flex flexDirection="row" gap="2" alignItems="center">
        <Button onClick={() => props.onPlusHandler(props.item)}>+</Button>
        <Heading size="sm" color="#F3F3F3">
          {props.quantity > 0 ? props.quantity : 0}
        </Heading>
        <Button onClick={() => props.onMinusHandler(props.item)}>-</Button>
      </Flex>
    </Flex>
  );
};

export default ShoppingCartCard;
