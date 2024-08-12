import React from "react";
import {
  Flex,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
} from "@chakra-ui/react";

import useFetchOrders from "../../hooks/useFetchOrders";
import DetailsModal from "./DetailsModal";
import ShipModal from "./ShipModal";

const OrderTable = () => {
  const { lastOrders } = useFetchOrders(5);

  const handleLoadMore = () => {
    // TODO
  };
  return (
    <Flex
      height={"90%"}
      width={"90%"}
      flexDir={"column"}
      marginTop={5}
      padding={5}
      backgroundColor={"#343434"}
      borderRadius={7}
    >
      <Flex overflowX="auto" width={"100%"}>
        <Table variant="simple" marginTop={"3"}>
          <Thead>
            <Tr>
              <Th color={"#F3F3F3"}>Name</Th>
              <Th color={"#F3F3F3"}>Adresse</Th>
              <Th color={"#F3F3F3"}>Bestellung</Th>
              <Th color={"#F3F3F3"}>Preis</Th>
              <Th color={"#F3F3F3"}>Status</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {lastOrders.map((order, index) => (
              <Tr key={index}>
                <Td color={"#F3F3F3"}>{order.name}</Td>
                <Td color={"#F3F3F3"}>
                  {order.address.postal_code + " " + order.address.city}
                </Td>
                <Td color={"#F3F3F3"}>{order.product.data[0].description}</Td>
                <Td color={"#F3F3F3"}>{order.amount}</Td>
                <Td color={"#F3F3F3"}>{order.shipping_status}</Td>
                <Td></Td>
                <Td>
                  <Flex gap={2}>
                    <ShipModal />

                    <DetailsModal orders={lastOrders} />
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
      <Button onClick={handleLoadMore} margin={3}>
        weitere Laden
      </Button>
    </Flex>
  );
};

export default OrderTable;
