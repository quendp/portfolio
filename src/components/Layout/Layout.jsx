import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import EntranceAnimation from "../EntranceAnimation/EntranceAnimation";
import Menu from "../Menu/Menu";

const Layout = ({ isLoading, endEntAnimation }) => {
  const currentLocation = useLocation().pathname;
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShowMenu(false);
    } else if (currentLocation !== "/") {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }, [isLoading, currentLocation]);

  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <AnimatePresence>
      <div className="custom-body-wrapper relative h-screen w-full overflow-hidden">
        <EntranceAnimation
          isLoading={isLoading}
          endEntAnimation={endEntAnimation}
          currentLocation={currentLocation}
        />
        <motion.main
          className=" h-screen w-full"
          key={currentLocation}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          exit={{ opacity: 0 }}
        >
          <Outlet />
        </motion.main>
        <Menu
          showMenu={showMenu}
          toggleMenu={toggleMenu}
          currentLocation={currentLocation}
          isLoading={isLoading}
        />
      </div>
    </AnimatePresence>
  );
};

export default Layout;
