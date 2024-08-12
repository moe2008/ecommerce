import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import ServiceCard from "./ServiceCard";

const ServiceSection = React.forwardRef((props, ref) => {
  return (
    <Flex  backgroundColor="#F3F3F3" flexDirection="column" ref={ref}>
      <Flex width="100vw" alignItems="center" justifyContent="center" marginTop="5" >
        <Heading color="#343434" fontSize="3xl" fontFamily={'open sans'}>Unser Service</Heading>
      </Flex>
      <Flex minHeight="50vh" alignItems="center" justifyContent="space-evenly" flexDirection={["column", "column", "column", "row"]} gap="5" marginRight="5" marginLeft="5" marginBottom={["5", "5", "5","5"]} marginTop={["5", "5", "5","5"]}>
        <ServiceCard title="Neuverlag"/>
        <ServiceCard title="Aufbereitung"/>
        <ServiceCard title="Pflege"/>
      </Flex>
    </Flex>
  );
});

export default ServiceSection;
