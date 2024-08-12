import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import ProductTabel from "../UI/ProductTabel";

const ProductScreen = () => {
  return (
    <Flex
      width={["100%", "75%"]}
      height="100%"
      order={[1, 2]}
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        height="10%"
        width={["100%", "100%, 75%"]}
        justifyContent="center"
        alignItems="center"
      >
        <Heading size="lg" justifySelf="center" color="#343434">
          Produkte
        </Heading>
      </Flex>
      <ProductTabel />
    </Flex>
  );
};

export default ProductScreen;
