import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "../components/context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import transition from "../helpers/transition";
import { DashboardProvider } from "../components/context/DashboardContext";
import Script from "next/script";
import { useEffect } from "react";

const GA_TRACKING_ID = "G-70Q6RSN1ER";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const AnimatedComponent = transition(Component, Component.key);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-70Q6RSN1ER`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-70Q6RSN1ER}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <DashboardProvider>
        <CartProvider>
          <ChakraProvider>
            <AnimatePresence exitBeforeEnter>
              <AnimatedComponent {...pageProps} key={router.pathname} />
            </AnimatePresence>
          </ChakraProvider>
        </CartProvider>
      </DashboardProvider>
    </>
  );
}
