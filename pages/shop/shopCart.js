import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import { Flex, Heading, Checkbox, Button, Box, Link } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import back from "../../public/back.png";
import stripe from "../../public/stripe.svg";
import ShoppingCartCard from "../../components/Shop/ShoppingCartCard";
import { useRouter } from "next/router";
import Footer from "../../components/UI/Footer";

const shopCart = () => {
  const cartCtx = useContext(CartContext);
  const [items, setItems] = useState({});
  const [total, setTotal] = useState(0);
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  const onMinusHandler = (item) => {
    cartCtx.removeFromCart(item);
  };
  const onPlusHandler = (item) => {
    cartCtx.addToCart(item);
  };

  useEffect(() => {
    setItems(cartCtx.cartItems);
  }, []);

  useEffect(() => {
    let price = 0;
    cartCtx.cartItems.map((item) => {
      const pricepp = item.quantity * item.price;
      price += pricepp;
    });

    price += 3.99;
    setTotal(price.toFixed(2));
  }, [cartCtx.cartItems]);

  const handleCheck = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const handleAgb = () => {
    window.open("/Agb");
  };

  const handleCheckout = async () => {
    if (!checked) {
      alert("Bitte bestätigen Sie die AGB's");
    } else {
      const data = items;
      try {
        const res = await fetch(`/api/checkout-session/123123`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const checkOutSession = await res.json();
        router.push(checkOutSession.url);
      } catch (err) {
        alert("Irgendwas ist schief gelaufen");
      }
    }
  };
  const content =
    cartCtx.cartItems.length !== 0 ? (
      <Flex
        direction="column"
        gap="5"
        marginBottom="5"
        marginTop="5"
        alignItems="center"
      >
        {cartCtx.cartItems.map((item) => (
          <ShoppingCartCard
            key={item.id}
            item={item}
            name={item.name}
            description={item.description}
            quantity={item.quantity}
            price={item.price}
            id={item.id}
            onMinusHandler={onMinusHandler}
            onPlusHandler={onPlusHandler}
          />
        ))}
        <Flex direction="column" width="50%" gap="3" margin="5">
          <Box display="inline-flex" gap="2">
            <Checkbox
              colorScheme="green"
              color="white"
              onChange={handleCheck}
            />
            <p style={{ color: "#F3F3F3" }}>
              Hiermit bestätigen Sie die{" "}
              <Link onClick={handleAgb}>
                allgemeinen Geschäftsbedingungen-AGB's
              </Link>
            </p>
          </Box>
          <Heading color="white" fontFamily={"open sans"} size="md">
            + 3.99 € Versandkosten
          </Heading>
          <Heading color="white" fontFamily={"open sans"}>
            Gesamtpreis {total} €
          </Heading>
          <Button
            variant="solid"
            color="#F3F3F3"
            backgroundColor="#867872"
            _hover={{ backgroundColor: "#726661" }}
            marginTop="2"
            size={["lg", "lg", "sm", "md"]}
            onClick={handleCheckout}
          >
            Bestellen
          </Button>
        </Flex>
        <Flex
          height="10%"
          alignItems="center"
          justifyContent={`center`}
          flexDirection="column"
        >
          <Heading fontSize="1rem" fontFamily="open sans" textColor="white">
            Weiterleitung zu unserem Zahlungsanbieter
          </Heading>
          <Image src={stripe.src} height={"4rem"} width={"4rem"} />
        </Flex>
      </Flex>
    ) : (
      <p style={{ color: "whitesmoke" }}>Keine Artikel im Warenkorb</p>
    );

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
              onClick={() => router.back()}
              _hover={{ cursor: "pointer" }}
            />
          </Flex>
        </Flex>

        <Flex
          background="#3434343"
          minHeight="90vh"
          flexDir="column"
          width="100%"
          alignItems="center"
          gap="5"
        >
          <Flex height="15%" marginTop="5">
            <Heading color="#F3F3F3">Warenkorb</Heading>
          </Flex>

          <h1>{content}</h1>
        </Flex>
      </Flex>
      <Footer />
    </React.Fragment>
  );
};

export default shopCart;
