import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProjectCards = ({ proj }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const handlePrev = () => {
    if (currentImg === 0) {
      setCurrentImg(proj.images.length - 1);
    } else {
      setCurrentImg(currentImg - 1);
    }
  };
  const handleNext = () => {
    if (currentImg === proj.images.length - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  };
  return (
    <div className="w-full px-0 py-3 sm:p-4 md:p-6 lg:w-1/2 xl:p-8">
      <div className="custom-clip-path__card flex bg-cyan-400 p-px hover:bg-cyan-500/70">
        <div className="custom-clip-path__card flex flex-col justify-between bg-slate-900/90 p-3 hover:bg-slate-900/80 md:p-8">
          <h2 className=" custom-ff-bold text-md mb-3 border-b-2 border-cyan-700 pl-8 pb-3 text-end font-bold tracking-wider text-cyan-200 sm:pl-0 sm:text-center md:text-lg lg:text-2xl">
            {proj.title}
          </h2>
          <div>
            <div className="custom-ff-heading mb-6 text-xs text-cyan-200 md:text-sm">
              <span className="block font-bold">Description : </span>
              <p className="p-3 text-cyan-400">{proj.description}</p>
            </div>
            <div className="custom-ff-heading mb-5 text-sm text-cyan-200">
              <span className="block font-bold">Languages and tools : </span>
              <div className="flex flex-wrap justify-center p-3 md:justify-start">
                {proj.tech.map((tool) => (
                  <img
                    key={tool[0]}
                    className="m-1 rounded"
                    src={`https://img.shields.io/badge/-${tool[0]}-155e75?style=flat-square&logo=${tool[1]}`}
                  />
                ))}
              </div>
            </div>
            <div className="custom-ff-heading mb-6 text-center text-xs text-cyan-200 md:text-sm">
              <span
                className="block cursor-pointer font-bold text-cyan-200 hover:text-cyan-400"
                onClick={() => setIsOpen(!isOpen)}
              >
                {!isOpen ? "Read More" : "See Less"}{" "}
                <FontAwesomeIcon
                  className="mx-2"
                  icon={!isOpen ? faChevronDown : faChevronUp}
                />
              </span>
            </div>
            {isOpen && (
              <>
                <div className="custom-ff-heading mb-6 text-xs text-cyan-200 md:text-sm">
                  <span className="block py-3 font-bold">Role : </span>
                  {proj.role.map((role, idx) => (
                    <p key={role} className="px-3 py-1 text-cyan-400">
                      <span className="mr-2 font-bold">
                        {idx + 1}
                        {". "}
                      </span>{" "}
                      {role}
                    </p>
                  ))}
                </div>
                <div className="custom-ff-heading mb-6 text-xs text-cyan-200 md:text-sm">
                  <span className="block py-3 font-bold">Features : </span>
                  {proj.features.map((feature) => (
                    <p key={feature} className="px-3 py-px text-cyan-400">
                      <span className="mr-2 font-bold">{" - "}</span> {""}{" "}
                      {feature}
                    </p>
                  ))}
                </div>
                <div className="custom-ff-heading mb-6 text-xs md:text-sm">
                  <p className="p-3 text-cyan-400">
                    <span className="mr-3 font-bold text-cyan-200">
                      Date Finished :{" "}
                    </span>
                    {proj.date}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="custom-clip-path__card relative mb-6 bg-cyan-600 p-px sm:mb-0">
            <img
              className="custom-clip-path__card"
              src={proj.images[currentImg].file}
              alt={proj.title}
            />
            <div
              className="absolute top-0 left-0 flex h-full w-10 items-center justify-center bg-cyan-900/50 text-2xl text-cyan-200 hover:text-cyan-400"
              onClick={handlePrev}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div
              className="absolute top-0 right-0 flex h-full w-10 items-center justify-center bg-cyan-900/50 text-2xl text-cyan-200 hover:text-cyan-400"
              onClick={handleNext}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <div className="custom-ff-heading mt-0 text-sm text-cyan-100 md:mt-5">
            <div className="flex flex-col flex-wrap items-center justify-center p-2 text-xs md:flex-row md:p-3 md:text-sm">
              <Link
                to={proj.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="custom-clip-path__button my-3 mx-0 w-56 bg-cyan-700 px-5 py-2 hover:bg-cyan-800 md:mx-3">
                  View Live
                </button>
              </Link>
              <Link
                to={proj.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="custom-clip-path__button my-3 mx-0 w-56 bg-cyan-700 px-5 py-2 hover:bg-cyan-800 md:mx-3">
                  GitHub Repo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
