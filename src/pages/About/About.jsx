import React from "react";

const About = ({ isLoading }) => {
  return (
    <div
      className={`test-div ${
        !isLoading ? "opacity-100" : "opacity-0"
      } transition-opacity delay-500 duration-1000 ease-in-out`}
    >
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam
        excepturi dicta dolorem tenetur omnis modi reiciendis earum nesciunt
        soluta, voluptates doloremque molestiae molestias vel cum esse a
        incidunt rem consectetur fugiat, sequi repellendus similique ducimus
        quo. Praesentium, voluptatibus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quos quibusdam excepturi dicta dolorem tenetur omnis
        modi reiciendis earum nesciunt soluta, voluptates doloremque molestiae
        molestias vel cum esse a incidunt rem consectetur fugiat, sequi
        repellendus similique ducimus quo. Praesentium, voluptatibus.
      </p>
    </div>
  );
};

export default About;
