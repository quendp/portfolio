import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import EntranceAnimation from "../entranceAnimation/entranceAnimation";
import Menu from "../Menu/Menu";

const Layout = ({ isLoading, endEntAnimation }) => {
  const currentLocation = useLocation().pathname;

  // const [currentLocation, setCurrentLocation] = useState(location.pathname);

  // useEffect(() => {
  //   setCurrentLocation(location.pathname);
  // }, [location]);

  const changePageAnimation = async () => {
    console.log("changePageAnimation is called");
  };

  return (
    <div className="custom-body-wrapper relative h-screen w-full overflow-hidden">
      <EntranceAnimation
        isLoading={isLoading}
        endEntAnimation={endEntAnimation}
        currentLocation={currentLocation}
      />
      <div className="h-screen w-full">
        <Outlet />
      </div>
      <Menu
        isLoading={isLoading}
        changePageAnimation={changePageAnimation}
        currentLocation={currentLocation}
      />
    </div>
  );
};

export default Layout;
