import React from "react";
import ProjectCards from "./ProjectCards";
import { projects } from "./projects";

const Portfolio = ({ isLoading }) => {
  return (
    <>
      <div className="mb-10 flex w-full flex-col items-center justify-center border-b-2 border-cyan-900">
        <h1 className="custom-ff-bold mb-5 text-center text-xl text-cyan-500 md:text-5xl">
          Portfolio
        </h1>
        <div className="mb-10 flex justify-center text-center md:justify-start">
          <p className="custom-ff-heading text-sm text-cyan-200">
            Below are some of my latest projects. Click one to view more
            information.
          </p>
        </div>
      </div>
      <div className="h-100 w-100 flex flex-col flex-wrap lg:flex-row">
        {projects.map((proj) => (
          <ProjectCards key={proj.id} proj={proj} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
