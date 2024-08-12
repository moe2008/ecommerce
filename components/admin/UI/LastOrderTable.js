import React from "react";
import {
  Flex,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Heading,
  Button,
} from "@chakra-ui/react";
import useFetchOrders from "../../hooks/useFetchOrders";

const LastOrderTable = () => {
  const { lastOrders } = useFetchOrders(5);
  return (
    <Flex
      backgroundColor={"#343434"}
      width={["100%", "75%", "75%"]}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      borderRadius={7}
      overflow={"hidden"}
    >
      <Heading size={"lg"} color={"#F3F3F3"}>
        Letzte Bestellungen
      </Heading>
      <Flex overflowX="auto" width={"100%"}>
        <Table variant="simple" marginTop={"3"}>
          <Thead>
            <Tr>
              <Th color={"#F3F3F3"}>Order Num</Th>
              <Th color={"#F3F3F3"}>First Name</Th>
              <Th color={"#F3F3F3"}>Status</Th>
              <Th color={"#F3F3F3"}>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {lastOrders.map((order) => (
              <Tr key={order.orderNum}>
                <Td color={"#F3F3F3"}>{order.id}</Td>
                <Td color={"#F3F3F3"}>{order.name}</Td>
                <Td color={"#F3F3F3"}>{order.shipping_status}</Td>
                <Td color={"#F3F3F3"}>{order.amount}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
      <Button margin={3}>zu allen Bestellungen</Button>
    </Flex>
  );
};

export default LastOrderTable;
