import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/icon-white.png";

const EntranceAnimation = () => {
  const [mainBG, setMainBG] = useState("1");
  const [logoOpacity, setLogoOpacity] = useState("0");
  const [logoImgOpacity, setLogoImgOpacity] = useState("1");
  const [logoTextTransform, setLogoTextTransform] = useState("0");
  const [titleDTransform, setTitleDTransform] = useState("-100");
  const [titlePTransform, setTitlePTransform] = useState("0");
  const [titleDisplay, setTitleDisplay] = useState("none");
  const [titleOpacity, setTitleOpacity] = useState("0");
  const [titleFontSize, setTitleFontSize] = useState("inherit");

  const mainWrapStyle = {
    backgroundColor: mainBG,
    transition: "background-color 1000ms ease-in-out",
  };

  const logoStyle = {
    opacity: logoOpacity,
  };

  const logoImgStyle = {
    opacity: logoImgOpacity,
  };

  const logoTextStyle = {
    transform: `translateY(${logoTextTransform}rem)`,
    fontSize: titleFontSize,
    transition: `transform 1000ms ease-in-out, font-size 1000ms ease-in-out`,
  };

  const titleStyle = {
    transition: "opacity 400ms ease-in-out",
    display: titleDisplay,
    opacity: titleOpacity,
  };

  const titleDStyle = {
    transform: `translate(${titleDTransform}%, -51%)`,
  };

  const titlePStyle = {
    transform: `translate(${titlePTransform}%, -51%)`,
  };

  const animationDelay = (time) => {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  };

  const startAnimation = async () => {
    try {
      await animationDelay(500);
      setLogoOpacity("1");
      await animationDelay(2500);
      setLogoImgOpacity("0");
      await animationDelay(500);
      setLogoTextTransform("-3");
      await animationDelay(1500);
      setTitleDisplay("inline-block");
      setTitleDTransform("-320");
      setTitlePTransform("245");
      await animationDelay(800);
      setTitleOpacity("1");
      await animationDelay(800);
      setLogoTextTransform("13");
      setTitleFontSize("9vw");
      await animationDelay(800);
      setMainBG("transparent"); //change to zero later
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div
      className="fixed bottom-0 left-1/2 z-10 flex h-screen w-full -translate-x-1/2 items-center justify-center bg-slate-900"
      style={mainWrapStyle}
    >
      <div
        className="custom-ff-bold flex w-full flex-col items-center text-center text-sm uppercase text-red-50 transition-opacity duration-500 ease-in-out md:text-lg"
        style={logoStyle}
      >
        <img
          className="mb-3 w-10 transition-opacity duration-500 ease-in-out md:w-16"
          src={logo}
          alt="Quen DP Logo"
          style={logoImgStyle}
        />
        <div
          className="custom-text-shadow-rose mb-2 flex justify-center tracking-widest transition-opacity duration-500 ease-in-out"
          style={logoImgStyle}
        >
          <span>q</span>
          <span>u</span>
          <span>e</span>
          <span>n</span>
        </div>
        <div
          className="custom-text-shadow-rose relative z-10 flex max-w-full justify-evenly tracking-widest"
          style={logoTextStyle}
        >
          <span
            style={titleDStyle}
            className="absolute top-1/2 left-1/2 text-center transition-transform duration-500 ease-in-out"
          >
            d
          </span>
          <span className="text-center" style={titleStyle}>
            e
          </span>
          <span className="text-center" style={titleStyle}>
            v
          </span>
          <span className="text-center" style={titleStyle}>
            e
          </span>
          <span className="text-center" style={titleStyle}>
            l
          </span>
          <span className="text-center" style={titleStyle}>
            o
          </span>
          <span
            style={titlePStyle}
            className="absolute top-1/2 left-1/2 text-center transition-transform duration-500 ease-in-out"
          >
            p
          </span>
        </div>
      </div>
    </div>
  );
};

export default EntranceAnimation;
