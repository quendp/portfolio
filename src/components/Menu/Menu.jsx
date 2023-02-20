import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <section className="custom-ff-bold text-md absolute top-60 left-0 z-10 w-full -translate-y-full p-5 pb-10 text-center text-cyan-500 md:top-1/2 md:w-1/2 md:-translate-y-1/2 md:text-left md:text-2xl">
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
      <section className="custom-ff-bold text-md absolute top-60 right-0 z-10 w-full -translate-y-1/2 p-5 text-center text-cyan-500  md:top-1/2 md:w-1/2 md:text-right md:text-2xl">
        <nav>
          <ul>
            <li className="p-2 pt-10 md:pt-2">
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
