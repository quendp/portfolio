import React from "react";
import myImage from "../../assets/my-image-2.png";
import techImage from "../../assets/tech-bg-blue.png";

const HeroSection = ({ isLoading }) => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden opacity-20">
        <img
          className="h-full animate-pulse"
          style={{ animationDuration: "5000ms" }}
          src={techImage}
          alt="Techno background"
        />
        <img
          className="h-full animate-pulse"
          style={{ animationDuration: "5000ms" }}
          src={techImage}
          alt="Techno background"
        />
        <img
          className="h-full animate-pulse"
          style={{ animationDuration: "5000ms" }}
          src={techImage}
          alt="Techno background"
        />
      </div>
      <svg
        className={`${
          !isLoading ? "opacity-100" : "opacity-0"
        } custom-ff-bold absolute top-5 left-1/2 m-0 w-full -translate-x-1/2 p-0 text-center uppercase leading-none transition-opacity duration-500 ease-in-out `}
        width="100%"
        height="19vw"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" y1="0" y2="1.5">
            <stop stopColor="#06b6d4" offset="0" />
            <stop stopColor="#00000000" offset="2" />
          </linearGradient>
        </defs>
        <g>
          <text
            id="text"
            x="50%"
            y="50%"
            fontFamily="Gajraj One"
            fontSize="19vw"
            fontWeight="400"
            strokeWidth="2"
            stroke="url(#gradient)"
            fill="transparent"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            Level Up
          </text>
        </g>
      </svg>
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 overflow-hidden"
        style={{
          width: "47vw",
          minWidth: "20rem",
        }}
      >
        <img
          className={`${
            !isLoading ? "opacity-100" : "opacity-0"
          } w-full transition-opacity duration-500 ease-in-out`}
          src={myImage}
          alt="Quen Del Pilar"
        />
      </div>
    </>
  );
};

export default HeroSection;
