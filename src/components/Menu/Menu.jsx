import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ isLoading, changePageAnimation }) => {
  const menuStyle = {
    transition: "left 1000ms ease-in-out, right 1000ms ease-in-out",
  };

  const hideMenu = (page) => {
    changePageAnimation(page);
  };

  return (
    <>
      <div className="absolute h-screen w-full">
        <button className="absolute text-cyan-500">MENU</button>
      </div>
      <section
        style={menuStyle}
        className={`custom-ff-heading absolute top-40 text-xs ${
          !isLoading ? "left-0 md:left-20" : "-left-full"
        } md:text-md z-10 w-full -translate-y-1/2 p-5 text-center text-cyan-500 sm:top-1/2 sm:w-1/2`}
      >
        <nav>
          <ul className="flex flex-col items-center md:items-start">
            <Link to="/" onClick={() => hideMenu("home")}>
              <li className="custom-nav-item-left relative m-1.5 p-2 sm:m-2">
                Home
              </li>
            </Link>
            <Link to="/about" onClick={() => hideMenu("about")}>
              <li className="custom-nav-item-left relative m-1.5 p-2 sm:m-2">
                About
              </li>
            </Link>
            <Link to="portfolio" onClick={() => hideMenu("portfolio")}>
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
          !isLoading ? "right-0 md:right-20" : "-right-full"
        } md:text-md z-10 mt-1.5 w-full -translate-y-1/2 p-5 text-center text-cyan-500 sm:top-1/2 sm:mt-0 sm:w-1/2`}
      >
        <nav>
          <ul className="flex flex-col items-center md:items-end">
            <Link
              to="/curriculum-vitae"
              onClick={() => hideMenu("curriculum-vitae")}
            >
              <li className="custom-nav-item-right relative m-1.5 p-2 sm:m-2">
                Curriculum Vitae
              </li>
            </Link>
            <Link to="/experience" onClick={() => hideMenu("experience")}>
              <li className="custom-nav-item-right relative m-1.5 p-2 sm:m-2">
                Experience
              </li>
            </Link>
            <Link to="/contact" onClick={() => hideMenu("contact")}>
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
