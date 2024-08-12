import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import fIcon from "../../supply-chain.png";
import pIcon from "../../product.png"
import {
  TableContainer,
  Table,
  Th,
  Tr,
  Thead,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";

const Info = () => {
  return (
    <Flex
      width="100%"
      justifyContent="space-evenly"
      backgroundColor="#F3F3F3"
      padding="6"
      
    >
      <Flex
        direction="column"
        width={["80%", "80%", "50%"]}
        alignItems="center"
        gap="3"
        textAlign="center"
      >
        <img src={pIcon.src} style={{ height: "60px" }} />
        <Heading
          fontFamily={"open sans"}
          color="#343434"
          fontSize="3xl"
          fontWeight="bold"
        >
          Produkt Information
        </Heading>
        <TableContainer>
          <Table variant="striped" colorScheme="brown">
            <Thead>
              <Tr>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Hersteller</Td>
                <Td>Loba</Td>
              </Tr>
              <Tr>
                <Td>Herstellernummer</Td>
                <Td>123954329523</Td>
              </Tr>
              <Tr>
                <Td>Menge pro Einheit</Td>
                <Td>500ml</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              
            </Tfoot>
          </Table>
        </TableContainer>
      </Flex>
      <Flex
        width={["80%", "80%", "35%"]}
        direction="column"
        alignItems="center"
        gap="3"
        textAlign="center"
      >
        <img src={fIcon.src} style={{ height: "60px" }} />
        <Heading
          fontFamily={"open sans"}
          color="#343434"
          fontSize="3xl"
          fontWeight="bold"
        >
          Einsatzbereich
        </Heading>
        <Text fontFamily={"open sans"}>
          Geeignet für die Reinigung und Pflege von lackiertem und geöltem
          Parkett, Holzfußböden, PVC-, CV-, Polyolefin-, Kork-, Linoleum- und
          Gummibeläge sowie Natur- und Kunststein. Erhält den
          Gleitreibungsbeiwert für Sportböden gem. DIN 18032. Zertifiziertes
          FIBA Produkt.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Info;
