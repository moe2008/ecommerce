import { Flex, Image, Heading, Box } from "@chakra-ui/react";
import logo from "../../../public/Logo.png";
import icon from "../../../public/scicon.png";
import { useRouter } from "next/router";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const DesktopShopNavBar = () => {
  const cartCtx = useContext(CartContext);

  const router = useRouter();
  return (
    <Flex
      width={["100%"]}
      height={["10vh"]}
      bgColor="#343434"
      position="fixed"
      display={["flex", "flex", "flex", "flex"]}
      zIndex={12}
    >
      <Flex
        width="50%"
        alignItems="center"
        justifyContent="flex-start"
        marginLeft="2em"
        onClick={() => router.push("/")}
        _hover={{ cursor: "pointer" }}
      >
        <Image src={logo.src} width="2em" height="2em" alt="Image" />
        <Heading fontSize="md" color="#F3F3F3">
          CleanIT
        </Heading>
      </Flex>
      <Flex width="50%">
        <Flex
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          marginRight="2em"
        >
          <Box
            onClick={() => router.push("/shop/shopCart")}
            _hover={{ cursor: "pointer" }}
          >
            <Image src={icon.src} height="1.8em" width="1.8em" />
            <Heading marginLeft="2.5" size="xs" color="#F3F3F3">
              {cartCtx.cartItems ? cartCtx.cartItems.length : 0}
            </Heading>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DesktopShopNavBar;
