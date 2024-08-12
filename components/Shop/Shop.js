import React, { useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import CardItem from "./CardItem";
import classes from "./Shop.module.css";
import { motion } from "framer-motion";
import Footer from "../UI/Footer";
import useFetchProducts from "../hooks/useFetchProducts";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const Shop = () => {
  const { products, loading } = useFetchProducts(null);

  return (
    <Flex
      width="100vw"
      minHeight="100vh"
      backgroundColor="#F3F3F3"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Heading
        color="#343434"
        marginTop="15vh"
        marginBottom="5"
        fontSize="4xl"
        className={classes.text}
      >
        Shop
      </Heading>

      <motion.div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          minHeight: "60vh",
          width: "90%",
          gap: "4rem",
          justifyContent: "center",
          marginBottom: "4rem",
        }}
        variants={containerVariants}
        initial="hidden"
        animate={loading ? "hidden" : "visible"} //
      >
        {loading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              width: "100%",
              height: "100%",
            }}
          >
            loading...
          </div>
        ) : (
          products.map((product) => (
            <motion.div variants={itemVariants} key={product.id}>
              <CardItem
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageURL={product.imageUrl}
              />
            </motion.div>
          ))
        )}
      </motion.div>
      <Footer bgColor="#343434" fontColor="#F3F3F3" width="100%" />
    </Flex>
  );
};

export default Shop;
