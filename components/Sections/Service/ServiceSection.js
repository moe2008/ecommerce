import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import ServiceCard from "./ServiceCard";
import Deliver from "../../../Delivery.png"
import Good from "../../../Good.png"
import Order from "../../../Order.png"

const ServiceSection = React.forwardRef((props, ref) => {
  return (
    <Flex backgroundColor="#F3F3F3" flexDirection="column" ref={ref}>
      <Flex width="100vw" alignItems="center" justifyContent="center" marginTop="5" >
        <Heading color="#343434" fontSize="3xl" fontFamily={'open sans'}>Service</Heading>
      </Flex>
      <Flex minHeight="50vh" alignItems="center" justifyContent="space-evenly" flexDirection={["column", "column", "column", "row"]} gap="5" marginRight="5" marginLeft="5" marginBottom={["5", "5", "5", "5"]} marginTop={["5", "5", "5", "5"]}>
        <ServiceCard title="Easy Order" img={Order.src} text="Enjoy a hassle-free shopping experience with just a few clicks. Our user-friendly system makes ordering quick and easy, giving you more time for what matters most." />
        <ServiceCard title="Fast Delivery" img={Deliver.src} text="We ensure your order arrives swiftly and reliably. With our express shipping, your products are at your doorstep in no time." />
        <ServiceCard title="Good Rating" img={Good.src} text="Our customers love us! Thanks to our high-quality products and excellent service, we've earned consistently positive reviews."/>
      </Flex>
    </Flex>
  );
});

export default ServiceSection;
