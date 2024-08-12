import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Flex, Heading, Image, Button, Divider } from "@chakra-ui/react";
import back from "../../public/back.png";
import sc from "../../public/scBlack.png";
import Tut from "../../components/Shop/Tut";
import Info from "../../components/Shop/Info";
import Footer from "../../components/UI/Footer";
import IconStack from "../../components/Shop/IconStack";
import { CartContext } from "../../components/context/CartContext";
import { useContext, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useFetchProductID } from "../../components/hooks/useFetchProductID";

const product = () => {
  const router = useRouter();
  const { productID } = router.query;
  const cartCtx = useContext(CartContext);
  const controls = useAnimation();
  const { product, loading } = useFetchProductID(productID);

  const textRef = useRef();
  const textInView = useInView(textRef, { once: true });

  useEffect(() => {
    if (textInView) {
      controls.start("visible");
    }
  }, [textRef, textInView]);

  const textVar = {
    visible: { x: [-100, 0], opacity: [0, 1] },
    hidden: { opacity: 0, x: -100 },
  };

  const handleAddToCart = (product) => {
    cartCtx.addToCart(product);
  };

  return (
    <React.Fragment>
      <Flex width="100vw" backgroundColor="#343434" flexDirection="column">
        <Flex height="10vh" width="100%" padding="5" backgroundColor="#F3F3F3">
          <Flex
            width="50%"
            justifyContent="flex-start"
            height="100%"
            alignItems="center"
          >
            <Image
              src={back.src}
              color="#343434"
              height="2em"
              width="2em"
              _hover={{ cursor: "pointer" }}
              onClick={() => router.back()}
            />
          </Flex>

          <Flex width="50%" justifyContent="flex-end" alignItems="center">
            <Image
              src={sc.src}
              color="#343434"
              height="2em"
              width="2em"
              justifySelf="self-end"
              onClick={() => router.push("/shop/shopCart")}
              _hover={{ cursor: "pointer" }}
            />
            <Heading size="xs" color="black">
              {cartCtx.cartItems.length}
            </Heading>
          </Flex>
        </Flex>
        <Flex
          flexDirection={["column", "column", "row", "row"]}
          justifyContent={["center", "center", "space-evenly"]}
          padding={8}
          gap={5}
        >
          {loading ? (
            <div>Loading</div>
          ) : (
            <React.Fragment>
              <Flex
                alignItems={["center", "flex-start", "center", "center"]}
                width={["100%", "100%", "35%", "32%"]}
                justifyContent={["center", "center"]}
                bgColor={"#ffffff"}
              >
                <Image
                  src={product.imageUrl}
                  height={"70%"}
                  width={"32%"}
                  borderRadius="4"
                  as={motion.img}
                  animate={{ scale: [0, 1.1, 0.9, 1], opacity: [0, 1] }}
                  initial={{ scale: 0, opacity: 0 }}
                  transition={{ ease: "spring", stiffness: 10, damping: 100 }}
                  transitionDuration="0.1s"
                />
              </Flex>
              <Flex
                as={motion.div}
                ref={textRef}
                variants={textVar}
                animate={controls}
                transition="0.3s ease-out"
                flexDirection={["column", "column", "column", "column"]}
                alignItems={["center", "center", "flex-start", "flex-start"]}
                width={["100%", "100%", "25%"]}
                justifyContent={[
                  "flex-start",
                  "flex-start",
                  "flex-start",
                  "center",
                ]}
                gap={3}
              >
                <Heading fontSize={["2xl", "2xl", "xl", "3xl"]} color="#F3F3F3">
                  {product.name}
                </Heading>
                <Heading
                  fontSize={["sm", "sm", "sm", "md"]}
                  color="#F3F3F3"
                  fontWeight="light"
                  textAlign={["center", "center", "start"]}
                >
                  {product.description}
                </Heading>
                <Heading fontSize="sm" marginTop="2" color="#F3F3F3">
                  1 Liter
                </Heading>
                <Heading
                  fontSize="xl"
                  color="#F3F3F3"
                  fontWeight="bold"
                  marginTop="2"
                >
                  {product.price} €
                </Heading>
                <Heading fontSize="sm" marginTop="2" color="#F3F3F3">
                  Lieferzeit 3-5 Werktage
                </Heading>
                <IconStack />
                <Button
                  variant="solid"
                  color="#F3F3F3"
                  backgroundColor="#867872"
                  _hover={{ backgroundColor: "#726661" }}
                  marginTop="2"
                  size={["lg", "lg", "sm", "md"]}
                  onClick={() => handleAddToCart(product)}
                >
                  In den Warenkorb
                </Button>
              </Flex>
            </React.Fragment>
          )}
        </Flex>
      </Flex>
      <Info />
      <Divider />
      <Tut />
      <Footer bgColor="#343434" fontColor="#F3F3F3" width="100%" />
    </React.Fragment>
  );
};

export default product;
