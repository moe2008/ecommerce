import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "../components/context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import transition from "../helpers/transition";
import { DashboardProvider } from "../components/context/DashboardContext";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const AnimatedComponent = transition(Component, Component.key);

  return (
    <DashboardProvider>
      <CartProvider>
        <ChakraProvider>
          <AnimatePresence exitBeforeEnter>
            <AnimatedComponent {...pageProps} key={router.pathname} />
          </AnimatePresence>
        </ChakraProvider>
      </CartProvider>
    </DashboardProvider>
  );
}
