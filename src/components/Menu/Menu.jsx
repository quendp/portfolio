import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ showMenu, toggleMenu, currentLocation, isLoading }) => {
  const menuStyle = {
    transition: "left 1000ms ease-in-out, right 1000ms ease-in-out",
  };

  const clickMenuHandler = () => {
    toggleMenu();
  };

  return (
    <>
      <div
        className={`custom-ff-heading md:text-md absolute top-0 left-0 z-10 h-screen w-full text-center text-xs transition-transform duration-500 ease-in-out ${
          currentLocation !== "/" && !isLoading
            ? "-translate-x-0"
            : "translate-x-full"
        } ${currentLocation !== "/" && showMenu ? "backdrop-blur-xl" : ""}`}
      >
        <button
          className="custom-nav-item-right absolute right-5 top-5 p-2 text-cyan-500 sm:m-2"
          onClick={clickMenuHandler}
        >
          {!showMenu ? "Menu" : "Close Menu"}
        </button>
      </div>
      <section
        style={menuStyle}
        className={`custom-ff-heading absolute top-40 text-xs ${
          showMenu ? "left-0 md:left-20" : "-left-full"
        } md:text-md z-10 w-full -translate-y-1/2 p-5 text-center text-cyan-500 sm:top-1/2 sm:w-1/2`}
      >
        <nav>
          <ul className="flex flex-col items-center md:items-start">
            <Link to="/">
              <li className="custom-nav-item-left relative m-1.5 p-2 sm:m-2">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="custom-nav-item-left relative m-1.5 p-2 sm:m-2">
                About
              </li>
            </Link>
            <Link to="portfolio">
              <li className="custom-nav-item-left relative m-1.5 p-2 sm:m-2">
                Portfolio
              </li>
            </Link>
          </ul>
        </nav>
      </section>
      <section
        style={menuStyle}
        className={`custom-ff-heading absolute top-72 text-xs ${
          showMenu ? "right-0 md:right-20" : "-right-full"
        } md:text-md z-10 mt-1.5 w-full -translate-y-1/2 p-5 text-center text-cyan-500 sm:top-1/2 sm:mt-0 sm:w-1/2`}
      >
        <nav>
          <ul className="flex flex-col items-center md:items-end">
            <Link to="/curriculum-vitae">
              <li className="custom-nav-item-right relative m-1.5 p-2 sm:m-2">
                Curriculum Vitae
              </li>
            </Link>
            <Link to="/experience">
              <li className="custom-nav-item-right relative m-1.5 p-2 sm:m-2">
                Experience
              </li>
            </Link>
            <Link to="/contact">
              <li className="custom-nav-item-right relative m-1.5 p-2 sm:m-2">
                Contact
              </li>
            </Link>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Menu;
