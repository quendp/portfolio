import React from "react";
import myImage from "../../assets/my-image.png";

const HeroSection = () => {
  return (
    <section className="flex-column relative m-0 flex h-screen w-full items-center justify-center bg-slate-900 p-0">
      <h2
        className="custom-text-stroke custom-ff-bold absolute top-10 left-1/2 m-0 w-full -translate-x-1/2 p-0 text-center uppercase leading-none text-transparent md:top-0"
        style={{ fontSize: "15vw" }}
      >
        Level Up
      </h2>
      <img
        className="min-w-96 absolute left-1/2 bottom-0 w-full max-w-screen-md -translate-x-1/2"
        src={myImage}
        alt="Quen Del Pilar"
      />
    </section>
  );
};

export default HeroSection;
