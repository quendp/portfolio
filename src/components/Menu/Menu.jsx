import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ isLoading }) => {
  const menuStyle = {
    transition: "left 800ms ease-in-out, right 800ms ease-in-out",
  };

  return (
    <>
      <section
        style={menuStyle}
        className={`custom-ff-heading absolute top-60 text-sm ${
          !isLoading ? "left-0 sm:left-20" : "-left-full"
        } z-10 w-full -translate-y-full p-5 pb-10 text-center text-cyan-500 sm:top-1/2 sm:w-1/2 sm:-translate-y-1/2 sm:text-left sm:text-lg`}
      >
        <nav>
          <ul>
            <li className="p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2">
              <Link to="/about">About</Link>
            </li>
            <li className="p-2">
              <Link to="portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section
        style={menuStyle}
        className={`custom-ff-heading absolute top-60 text-sm ${
          !isLoading ? "right-0 sm:right-20" : "-right-full"
        } z-10 w-full -translate-y-1/2 p-5 text-center text-cyan-500  sm:top-1/2 sm:w-1/2 sm:text-right sm:text-lg`}
      >
        <nav>
          <ul>
            <li className="p-2 pt-10 sm:pt-2">
              <Link to="/curriculum-vitae">Curriculum Vitae</Link>
            </li>
            <li className="p-2">
              <Link to="/experience">Experience</Link>
            </li>
            <li className="p-2">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Menu;
