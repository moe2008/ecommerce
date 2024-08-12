import { Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { useDashboardContext } from "../context/DashboardContext";
import DefaultScreen from "./screens/DefaultScreen";
import ProductScreen from "./screens/ProductScreen";
import OrdersScreen from "./screens/OrdersScreen";
import ShopScreen from "./screens/ShopScreen";

const DashboardMainScreen = () => {
  const { dashboardState } = useDashboardContext();
  const [content, setContent] = useState();

  useEffect(() => {
    if (dashboardState === "products") {
      setContent(<ProductScreen></ProductScreen>);
    } else if (dashboardState === "default") {
      setContent(<DefaultScreen></DefaultScreen>);
    } else if (dashboardState === "orders") {
      setContent(<OrdersScreen></OrdersScreen>);
    } else if (dashboardState === "off") {
      setContent(<ShopScreen></ShopScreen>)
    }
  }, [dashboardState]);

  return (
    <Flex
      minHeight="100vh"
      minWidth="100vw"
      flexDir={["column", "row", "row"]}
      justifyContent="space-between"
    >
      {content}
      <DashboardNavbar />
    </Flex>
  );
};

export default DashboardMainScreen;
