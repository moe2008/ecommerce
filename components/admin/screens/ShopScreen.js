// ShopScreen.js
import React, { useState } from "react";
import { Flex, Button } from "@chakra-ui/react";
import ProofModal from "../UI/ProofModal";
import useShopState from "../../hooks/useShopState";
import { fetchAndUpdateStatus } from "../../../helpers/updateShopState";

const ShopScreen = () => {
  const { loading, isOnline } = useShopState();
  const [message, setMessage] = useState("");

  const changeShopState = async () => {
    const msg = await fetchAndUpdateStatus();
    setMessage(msg);
  };

  return (
    <React.Fragment>
      <Flex
        width={["100%", "75%"]}
        height="100vh"
        order={[1, 2]}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          height="90%"
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <div>
              {loading ? (
                <h1>Loading...</h1>
              ) : (
                <div>
                  {message ? (
                    <h2>{message}</h2>
                  ) : (
                    <h1>Shop is currently {isOnline ? "online" : "offline"}</h1>
                  )}
                </div>
              )}
            </div>
            <Button >
              <ProofModal onClick={changeShopState}/>
            </Button>
          </div>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default ShopScreen;
