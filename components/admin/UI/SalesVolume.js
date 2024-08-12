import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const SalesVolume = () => {
  const [money, setMoney] = useState("0");

  useEffect(() => {
    const fetchStripeData = async () => {
      try {
        const response = await fetch("/api/stripe30DayVolume"); // Rufen Sie die Stripe-API-Route auf
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMoney(data.totalAmountInEUR.toFixed(2) + " €");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStripeData();
  }, []);
  return (
    <Flex
      backgroundColor="#343434"
      height="15rem"
      width={["100%", "45%"]}
      flexDir="column"
      alignItems="center"
      justifyContent="space-around"
      borderRadius={7}
    >
      <Flex>
        <Heading size="lg" color="#F3F3F3">
          30 Tage Umsatz
        </Heading>
      </Flex>
      <Flex>
        <Heading size="lg" color="#F3F3F3">
          {money}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default SalesVolume;
