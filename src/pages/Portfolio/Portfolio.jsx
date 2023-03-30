import React, { useState, useEffect } from "react";
import ProjectCards from "./ProjectCards";
import { projects } from "./projects";

const Portfolio = ({ isLoading }) => {
  const [projectList, setProjectList] = useState(projects);
  const [filterValue, setFilterValue] = useState("all");
  const [sortValue, setSortValue] = useState("rel-desc");

  const filterProjects = (value, array) => {
    if (value === "all") {
      return array;
    } else {
      return array.filter((proj) => proj.type == value);
    }
  };
  const sortByRelDesc = (a, b) => {
    return b.relevance > a.relevance ? 1 : -1;
  };
  const sortByRelAsc = (a, b) => {
    return a.relevance > b.relevance ? 1 : -1;
  };
  const sortByDateDesc = (a, b) => {
    const aDate = a.date.split("-").join("");
    const bDate = b.date.split("-").join("");
    return bDate > aDate ? 1 : -1;
  };
  const sortByDateAsc = (a, b) => {
    const aDate = a.date.split("-").join("");
    const bDate = b.date.split("-").join("");
    return aDate > bDate ? 1 : -1;
  };
  const sortProjects = (value, array) => {
    let newArr = array;
    switch (value) {
      case "rel-desc":
        newArr = newArr.sort(sortByRelDesc);
        break;
      case "rel-asc":
        newArr = newArr.sort(sortByRelAsc);
        break;
      case "date-desc":
        newArr = newArr.sort(sortByDateDesc);
        break;
      case "date-asc":
        newArr = newArr.sort(sortByDateAsc);
        break;
      default:
        return newArr;
    }
    return newArr;
  };

  useEffect(() => {
    const filteredArr = filterProjects(filterValue, projects);
    const sortedArr = sortProjects(sortValue, filteredArr);
    setProjectList([...sortedArr]);
  }, [filterValue, sortValue]);

  return (
    <>
      <div className="mb-10 flex w-full flex-col items-center justify-center border-b-2 border-cyan-900">
        <h1 className="custom-ff-bold mb-5 text-center text-xl text-cyan-500 md:text-5xl">
          Portfolio
        </h1>
        <div className="mb-10 flex justify-center text-center md:justify-start">
          <p className="custom-ff-heading text-sm text-cyan-200">
            Below are some of my latest projects. Click "Read more" to see
            further information.
          </p>
        </div>
      </div>
      <div className="custom-ff-heading mb-6 flex w-full flex-col justify-center text-xs text-cyan-200 sm:flex-row md:text-sm">
        <div className="m-3 flex flex-col">
          <label className="mb-3 text-center" htmlFor="filters">
            Filter Projects
          </label>
          <select
            className="w-50 rounded-md border-0 bg-cyan-900 px-3 py-2 outline-0"
            name="filters"
            id="filters"
            onChange={(e) => setFilterValue(e.target.value)}
          >
            <option className="m-3" value="all">
              All
            </option>
            <option className="m-3" value="full-stack">
              Full-Stack
            </option>
            <option className="m-3" value="front-end">
              Front-End &nbsp;&nbsp; only
            </option>
            <option className="m-3" value="back-end">
              Back-End &nbsp;&nbsp; only
            </option>
          </select>
        </div>
        <div className="m-3 flex flex-col">
          <label className="mb-3 text-center" htmlFor="sorts">
            Sort Projects by
          </label>
          <select
            className="w-50 rounded-md border-0 bg-cyan-900 px-3 py-2 outline-0"
            name="sorts"
            id="sorts"
            onChange={(e) => setSortValue(e.target.value)}
          >
            <option className="m-3" value="rel-desc">
              Most Relevant
            </option>
            <option className="m-3" value="rel-asc">
              Least Relevant
            </option>
            <option className="m-3" value="date-desc">
              Newest First
            </option>
            <option className="m-3" value="date-asc">
              Oldest First
            </option>
          </select>
        </div>
      </div>
      <div className="flex flex-col flex-wrap lg:flex-row">
        {projectList.length > 0 &&
          projectList.map((proj) => <ProjectCards key={proj.id} proj={proj} />)}
      </div>
      {projectList.length === 0 && (
        <div className="custom-ff-heading my-6 flex h-1/4 w-full items-center justify-center text-center text-xs text-cyan-200 md:text-sm">
          <h2>No Projects found.</h2>
        </div>
      )}
    </>
  );
};

export default Portfolio;
