import React from "react";
import { Link } from "react-router-dom";

const CurriculumVitae = ({ isLoading }) => {
  return (
    <>
      <div className="mb-10 flex w-full flex-col items-center justify-center border-b-2 border-cyan-900">
        <h1 className="custom-ff-bold mb-5 text-center text-xl text-cyan-500 md:text-5xl">
          Curriculum Vitae
        </h1>
      </div>
      <div className="flex w-full flex-col items-center justify-start">
        <Link
          className="mb-6"
          to="https://drive.google.com/file/d/1BbE-pufN-GD0KsyMrBVveBIrQsLYjtJz/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="custom-clip-path__button custom-ff-heading w-30 my-3 mx-0 bg-cyan-600 px-5 py-4 text-sm tracking-wider text-cyan-100 hover:bg-cyan-700 md:mx-3 md:w-80">
            Download My CV
          </button>
        </Link>

        <div className="custom-ff-heading w-full text-cyan-600 lg:w-3/4">
          <h2 className="custom-ff-bold mb-8 text-center text-lg text-cyan-400 sm:text-start sm:text-2xl md:mb-16 md:text-4xl">
            Experience
          </h2>
          <div className="mb-16">
            <div className="custom-ff-heading mb-6 ml-3 border-l-8 border-cyan-400 pl-3">
              <h3 className=" text-md  font-bold text-cyan-400 md:text-lg">
                2022 - 2023
              </h3>
              <h4 className="text-xs md:text-lg">
                Entered Kodego Coding Bootcamp for Full-Stack Web Development
              </h4>
            </div>
            <div className="pl-2 text-xs md:pl-20 md:text-lg">
              <p className="mb-3">
                <span className="mr-3 text-xl font-bold text-cyan-400">-</span>{" "}
                Best Capstone Project Award (Lakbay Travel Agency v3)
              </p>
              <p className="mb-3">
                <span className="mr-3 text-xl font-bold text-cyan-400">-</span>{" "}
                Best Mini Project 1 Award (Lakbay Travel Agency v1)
              </p>
              <p className="mb-3">
                <span className="mr-3 text-xl font-bold text-cyan-400">-</span>{" "}
                Top Student Award
              </p>
              <p className="mb-3">
                <span className="mr-3 text-xl font-bold text-cyan-400">-</span>{" "}
                Leadership Award
              </p>
            </div>
          </div>
          <div className="mb-16">
            <div className="custom-ff-heading mb-6 ml-3 border-l-8 border-cyan-400 pl-3">
              <h3 className=" text-md  font-bold text-cyan-400 md:text-lg">
                2021 - 2022
              </h3>
              <h4 className="text-xs md:text-lg">
                Freelance Web Developer and Designer (Wordpress)
              </h4>
            </div>
            <div className="pl-2 text-xs md:pl-20 md:text-lg">
              <p className="mb-3">
                <span className="mr-3 text-xl font-bold text-cyan-400">-</span>{" "}
                Created a Wordpress website (https://juanasafe.com) which is
                designed to help women and children report cases of abuse with
                just a click of a button.
              </p>
              <p className="mb-3">
                <span className="mr-3 text-xl font-bold text-cyan-400">-</span>{" "}
                Developed a dashboard system for police officers to monitor the
                reports sent to them by victims of violence against women and
                children.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurriculumVitae;
