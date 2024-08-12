import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { auth } from "../firebase";
import order from "../../public/bestellungicon.png";
import products from "../../public/producticon.png";
import logout from "../../public/logout.png";
import off from "../../public/off.svg"
import { useDashboardContext } from "../context/DashboardContext";
import DashboardNavLink from "./UI/DashboardNavLink";

const DashboardNavbar = () => {
  const { setDashboardView } = useDashboardContext();
  return (
    <Flex
      position={["fixed", "sticky"]}
      bottom="0"
      left="0"
      flexDirection={["row", "column"]}
      alignItems={["center", "center", "flex-start"]}
      justifyContent="flex-start"
      width={["100%", "25%", "25%"]}
      minHeight={["5rem", "100vh"]}
      backgroundColor="#343434"
      padding="1rem"
      gap={["5", "2"]}
      overflowX={{ base: "scroll", md: "visible" }}
      whiteSpace="nowrap"
      order={[2, 1]}
    >
      <Box
        marginBottom={["0rem", "0rem", "2rem"]}
        _hover={{ cursor: "pointer" }}
        onClick={() => setDashboardView("default")}
      >
        <Text fontWeight="bold" color="#F3F3F3" fontSize={["1rem", "1.3rem"]}>
          Dashboard
        </Text>
      </Box>
      <DashboardNavLink
        img={products.src}
        setView={() => setDashboardView("products")}
        name="Produkte verwalten"
      />
      <DashboardNavLink
        img={order.src}
        setView={() => setDashboardView("orders")}
        name="Bestellungen verwalten"
      />
      <DashboardNavLink
        img={off.src}
        setView={() => setDashboardView("off")}
        name="Shop"
      />
      <DashboardNavLink
        img={logout.src}
        setView={() => auth.signOut()}
        name="Abmelden"
      />
    </Flex>
  );
};

export default DashboardNavbar;
