import React from "react";

const CurriculumVitae = ({ isLoading }) => {
  return (
    <div
      className={`test-div ${
        !isLoading ? "opacity-100" : "opacity-0"
      } transition-opacity delay-500 duration-1000 ease-in-out`}
    >
      Curriculum <br /> Vitae
    </div>
  );
};

export default CurriculumVitae;
