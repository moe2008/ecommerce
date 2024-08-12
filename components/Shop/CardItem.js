import React from "react";
import {
  Heading,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import classes from "./CardItem.module.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const CardItem = (props) => {
  const cartCtx = useContext(CartContext);
  const router = useRouter();

  const handleAddToCart = (pro) => {
    cartCtx.addToCart(pro);
  };
  return (
    <React.Fragment key={props.id}>
      <Card maxW="sm" minH={"33rem"} bg="#343434" key={props.id} display={"flex"}>
        <CardBody display={"flex"} flexDir={"column"}>
          <Image
            src={props.imageURL}
            display={"flex"}
            alignSelf={"center"}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            height={[200]}
            width={100}
          />
          <Stack mt="6" spacing="3">
            <Heading size={["md", "md", "sm"]} className={classes.text}>
              {props.name}
            </Heading>
            <Text fontSize={["md", "md", "xs"]} className={classes.text}>
              {props.description}
            </Text>
            <Text color="#f3f3f3" fontSize="xl" className={classes.text}>
              {props.price} €
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              color="#F3F3F3"
              size={["md", "md", "md"]}
              className={classes.text}
              backgroundColor="#bdb29b"
              _hover={{ backgroundColor: "#8f8674" }}
              onClick={() => router.push(`/shop/${props.id}`)}
            >
              Mehr erfahren
            </Button>
            <Button
              variant="ghost"
              color="#F3F3F3"
              className={classes.text}
              _hover={{ border: "1px solid #F3F3F3" }}
              size={["md", "md", "md"]}
              onClick={() => handleAddToCart(props)}
            >
              in den Warenkorb
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
};

export default CardItem;
