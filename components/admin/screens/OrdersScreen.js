import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import OrderTable from "../UI/OrderTable";

const OrdersScreen = () => {
  return (
    <Flex
      width={["100%", "70%"]}
      height="100%"
      order={[1, 2]}
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        height="10%"
        width={["100%", "100%", "75%"]}
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          size={["sm", "md", "lg", "lg"]}
          justifySelf="center"
          color="#343434"
        >
          Bestellungen
        </Heading>
      </Flex>
      <OrderTable/>
    </Flex>
  );
};

export default OrdersScreen;
