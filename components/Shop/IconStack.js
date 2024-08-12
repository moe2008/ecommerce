import React from 'react'
import { Flex, Image } from '@chakra-ui/react';
import paypal from "../../public/paypal.svg";
import master from "../../public/mastercard.svg";
import visa from "../../public/visa.svg";
const IconStack = () => {
  return (
    <Flex>
        <Image src={paypal.src} height={"2rem"} width={"2rem"}/>
        <Image src={master.src} height={"2rem"} width={"2rem"}/>
        <Image src={visa.src} height={"2rem"} width={"2rem"}/>
    </Flex>
  )
}

export default IconStack