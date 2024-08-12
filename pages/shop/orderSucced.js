import React from "react";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import CheckMark from "../../components/UI/CheckMark";
const orderSucced = () => {
  const router = useRouter();

  return (
    <Flex
      minHeight="100vh"
      backgroundColor="#343434"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <CheckMark />
      <Heading fontFamily="open sans" color="#F3F3F3">
        Hat alles geklappt!
      </Heading>
      <Text fontFamily="open sans" color="#F3F3F3">
        Sie werden in kürze eine Email mit der Rechnung und den Bestellstatus
        erhalten
      </Text>
      <Flex gap={6} marginTop={5}>
        <Button onClick={() => router.push("/shop")}>zum Shop</Button>
        <Button onClick={() => router.push("/")}>zur Homepage</Button>
      </Flex>
    </Flex>
  );
};

export default orderSucced;
