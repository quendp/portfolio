import React from "react";
import myImage from "../../assets/my-image.png";

const About = ({ isLoading }) => {
  return (
    <>
      <div className="mb-10 flex w-full flex-col items-center justify-center border-b-2 border-cyan-900">
        <h1 className="custom-ff-bold mb-5 text-center text-xl text-cyan-500 md:text-5xl">
          Hi. I am Quen Del Pilar.
        </h1>
        <div className="mb-10 flex justify-center md:justify-start">
          <a
            className="m-1 sm:m-2"
            href="https://github.com/quendp/"
            target="blank"
          >
            <img src="https://img.shields.io/badge/-GitHub-083344?style=flat-square&logo=github" />
          </a>
          <a
            className="m-1 sm:m-2"
            href="https://linkedin.com/in/quendp/"
            target="blank"
          >
            <img src="https://img.shields.io/badge/-Linkedin-083344?style=flat-square&logo=linkedin" />
          </a>
          <a className="m-1 sm:m-2" href="mailto:hello@quendp.com">
            <img src="https://img.shields.io/badge/-Email-083344?style=flat-square&logo=gmail&logoColor=white" />
          </a>
          <a
            className="m-1 sm:m-2"
            href="https://www.facebook.com/itskendp"
            target="blank"
          >
            <img src="https://img.shields.io/badge/-Facebook-083344?style=flat-square&logo=facebook" />
          </a>
          <a
            className="m-1 sm:m-2"
            href="https://www.youtube.com/@quendp"
            target="blank"
          >
            <img src="https://img.shields.io/badge/-YouTube-083344?style=flat-square&logo=youtube" />
          </a>
        </div>
      </div>
      <div className="flex h-full flex-col items-center p-0 md:flex-row">
        <div className="custom-ff-heading md:text-md mb-10 flex w-full flex-col justify-center px-5 text-center text-sm leading-relaxed text-cyan-200 md:mb-0 md:w-1/2 md:pr-0 md:pl-2 md:text-left lg:pl-8 xl:pl-20 xl:text-xl">
          <p className="mb-10">
            I am a software engineer who specializes in full-stack web
            development using React JS and Node JS.
          </p>
          <p className="mb-20">
            I could also work on graphic design projects such as logo design,
            posters, mock-ups, and multimedia editing like images and videos. I
            am also a second-year BS in Electrical Engineering Undergraduate at
            the University of the Philippines Diliman.
          </p>

          <p className="mb-5">Languages and tools I've been using:</p>

          <div className="flex flex-wrap content-start justify-center md:justify-between">
            <img
              className="m-1"
              src="https://img.shields.io/badge/-JavaScript-083344?style=flat-square&logo=javascript"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-HTML-083344?style=flat-square&logo=html5"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-CSS-083344?style=flat-square&logo=css3"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-React JS-083344?style=flat-square&logo=react"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Node JS-083344?style=flat-square&logo=nodedotjs"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-MySql-083344?style=flat-square&logo=mysql"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-PHP-083344?style=flat-square&logo=php"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Laravel-083344?style=flat-square&logo=laravel"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Express JS-083344?style=flat-square&logo=express"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Python-083344?style=flat-square&logo=python"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Git-083344?style=flat-square&logo=git"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Bash-083344?style=flat-square&logo=gnubash"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Bootstrap-083344?style=flat-square&logo=bootstrap"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Tailwind-083344?style=flat-square&logo=tailwindcss"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-JWT-083344?style=flat-square&logo=jsonwebtokens"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Axios-083344?style=flat-square&logo=axios"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Sequelize-083344?style=flat-square&logo=sequelize"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-VS Code-083344?style=flat-square&logo=visualstudiocode"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-GitHub-083344?style=flat-square&logo=github"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Sass-083344?style=flat-square&logo=sass"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-AWS-083344?style=flat-square&logo=amazonaws"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Photoshop-083344?style=flat-square&logo=adobephotoshop"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Illustrator-083344?style=flat-square&logo=adobeillustrator"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Figma-083344?style=flat-square&logo=figma"
            />
          </div>
        </div>
        <div className="flex w-full justify-center pr-0 sm:w-3/4 md:w-1/2 md:pr-2 lg:pr-8 xl:pl-20">
          <img
            className={`h-auto w-full transition-opacity duration-1000 ease-in-out`}
            src={myImage}
            alt="Quen Del Pilar"
          />
        </div>
      </div>
    </>
  );
};

export default About;
