import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/icon-cyan-glow.png";

const EntranceAnimation = ({ endEntAnimation }) => {
  const [logoOpacity, setLogoOpacity] = useState("0");
  const [logoDisplay, setLogoDisplay] = useState("block");
  const [devOpacity, setDevOpacity] = useState("0");
  const [devBottom, setDevBottom] = useState("45%");
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
      await animationDelay(2500);
      setLogoOpacity("0");
      await animationDelay(500);
      setDevBottom("50%");
      await animationDelay(500);
      setdpLeft("0");
      await animationDelay(800);
      setEveloOpacity("1");
      await animationDelay(500);
      setLogoDisplay("hidden");
      setDevFontSize("19vw");
      setDevBottom("10vw");
    } catch (error) {
      console.log(error);
    } finally {
      endEntAnimation();
    }
  };

  useEffect(() => {
    startAnimation();
  }, []);

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
        className={`custom-ff-bold custom-text-shadow-cyan absolute -translate-x-1/2 translate-y-1/2 text-center text-cyan-500 opacity-${devOpacity}`}
        style={{
          bottom: devBottom,
          left: "50%",
          transition:
            "opacity 500ms ease-in-out, bottom 800ms ease-in-out, font-size 800ms ease-in-out",
          fontSize: devFontSize,
        }}
      >
        <span
          className="relative"
          style={{ left: `${dpLeft}rem`, transition: "left 800ms ease-in-out" }}
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
            transition: "left 800ms ease-in-out",
          }}
        >
          P
        </span>
      </div>
    </>
  );
};

export default EntranceAnimation;
