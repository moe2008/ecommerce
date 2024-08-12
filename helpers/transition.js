import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import logo from "../public/Logo.png";

const transition = (OgComponent, key) => {
  const router = useRouter();

  const TransitionComponent = () => {
    return (
      <>
        <OgComponent />

        <>
          <motion.div
            className="slide-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={logo.src} width="8rem" height="8rem" />
          </motion.div>
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        </>
      </>
    );
  };

  return TransitionComponent;
};
export default transition;
