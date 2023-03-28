import React from "react";

const Portfolio = ({ isLoading }) => {
  return (
    <div
      className={`main-content__wrapper ${
        !isLoading ? "opacity-100" : "opacity-0"
      } transition-opacity delay-500 duration-1000 ease-in-out`}
    >
      Portfolio
    </div>
  );
};

export default Portfolio;
