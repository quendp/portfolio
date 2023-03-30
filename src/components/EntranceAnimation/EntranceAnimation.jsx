import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/icon-cyan-glow.png";

const EntranceAnimation = ({ isLoading, endEntAnimation, currentLocation }) => {
  const [logoOpacity, setLogoOpacity] = useState("0");
  const [logoDisplay, setLogoDisplay] = useState("block");
  const [devOpacity, setDevOpacity] = useState("0");
  const [devBottom, setDevBottom] = useState("46%");
  const [dpLeft, setdpLeft] = useState("1.7");
  const [eveloOpacity, setEveloOpacity] = useState("0");
  const [devFontSize, setDevFontSize] = useState("inherit");

  const animationDelay = (time) => {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  };

  const startAnimation = async () => {
    try {
      await animationDelay(500);
      setLogoOpacity("100");
      setDevOpacity("100");
      await animationDelay(1000);
      setLogoOpacity("0");
      await animationDelay(500);
      setDevBottom("50%");
      await animationDelay(500);
      setdpLeft("0");
      await animationDelay(400);
      setEveloOpacity("1");
      await animationDelay(500);
      setLogoDisplay("hidden");
      setDevFontSize("19.5vw");
      setDevBottom("8vw");
    } catch (error) {
      console.log(error);
    } finally {
      if (currentLocation !== "/") {
        setDevBottom("-8vw");
        setDevOpacity("0");
      }
      endEntAnimation();
    }
  };

  useEffect(() => {
    if (isLoading) {
      startAnimation();
    } else if (currentLocation !== "/") {
      setDevBottom("-8vw");
      setDevOpacity("0");
      endEntAnimation();
    } else {
      setDevBottom("8vw");
      setDevOpacity("100");
      endEntAnimation();
    }
  }, [currentLocation]);

  return (
    <>
      <img
        className={`absolute w-10 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-in-out md:w-20 opacity-${logoOpacity} ${logoDisplay}`}
        src={logo}
        alt="Quen DP Logo"
        style={{ top: "45%", left: "50%" }}
      />
      <div
        className={`custom-ff-bold custom-text-shadow-cyan absolute -translate-x-1/2 -translate-y-1/2 text-center text-cyan-500 transition-opacity duration-500 ease-in-out opacity-${logoOpacity} ${logoDisplay}`}
        style={{ top: "52%", left: "50%" }}
      >
        <span>Q</span>
        <span>U</span>
        <span>E</span>
        <span>N</span>
      </div>
      <div
        className={`custom-ff-bold custom-text-shadow-cyan pointer-events-none absolute -translate-x-1/2 translate-y-1/2 text-center text-cyan-500 opacity-${devOpacity}`}
        style={{
          bottom: devBottom,
          left: "50%",
          transition:
            "opacity 500ms ease-in-out, bottom 1000ms ease-in-out, font-size 1000ms ease-in-out",
          fontSize: devFontSize,
        }}
      >
        <span
          className="relative"
          style={{ left: `${dpLeft}rem`, transition: "left 400ms ease-in-out" }}
        >
          D
        </span>
        <span
          style={{
            opacity: eveloOpacity,
            transition: "opacity 400ms ease-in-out",
          }}
        >
          E
        </span>
        <span
          style={{
            opacity: eveloOpacity,
            transition: "opacity 400ms ease-in-out",
          }}
        >
          V
        </span>
        <span
          style={{
            opacity: eveloOpacity,
            transition: "opacity 400ms ease-in-out",
          }}
        >
          E
        </span>
        <span
          style={{
            opacity: eveloOpacity,
            transition: "opacity 400ms ease-in-out",
          }}
        >
          L
        </span>
        <span
          style={{
            opacity: eveloOpacity,
            transition: "opacity 400ms ease-in-out",
          }}
        >
          O
        </span>
        <span
          className="relative"
          style={{
            left: `-${dpLeft}rem`,
            transition: "left 400ms ease-in-out",
          }}
        >
          P
        </span>
      </div>
    </>
  );
};

export default EntranceAnimation;
