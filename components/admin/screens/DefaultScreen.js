import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import SalesChart from "../charts/SalesChart";
import LastOrderTable from "../UI/LastOrderTable";
import SalesVolume from "../UI/SalesVolume";

const DefaultScreen = () => {
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
          size="lg"
          justifySelf="center"
          color="#343434"
        >
          Willkommen im Dashboard
        </Heading>
      </Flex>
      <Flex
        height="90%"
        width="100%"
        justifyContent="space-between"
        flexDir={["column", "column"]}
        alignItems="center"
        marginTop={5}
        padding={5}
        gap={3}
      >
        <LastOrderTable />
        <SalesVolume />
      </Flex>
      <Flex height="20rem" width="100%" justifyContent="center">
        <SalesChart />
      </Flex>
    </Flex>
  );
};

export default DefaultScreen;
