import React from "react";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const ShopOffline = () => {
  const router = useRouter();
  return (
    <Flex
      width="100vw"
      minHeight="100vh"
      backgroundColor="#F3F3F3"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading>Shop is currently offline</Heading>
      <Button onClick={() => router.back()}>Back to Homepage</Button>
    </Flex>
  );
};

export default ShopOffline;
