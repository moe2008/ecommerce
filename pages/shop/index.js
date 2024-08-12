import React from "react";
import DesktopShopNavBar from "../../components/Navbar/DesktopShopNavBar/DesktopShopNavBar";
import Shop from "../../components/Shop/Shop";
import ShopOffline from "../../components/Shop/ShopOffline";
import useShopState from "../../components/hooks/useShopState";

const index = () => {
  const { isOnline, loading } = useShopState();

  return (
    <React.Fragment>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          {isOnline ? (
            <div>
              <DesktopShopNavBar />
              <Shop />
            </div>
          ) : (
            <ShopOffline></ShopOffline>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default index;
