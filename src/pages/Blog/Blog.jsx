import React from "react";

const Blog = ({ isLoading }) => {
  return (
    <>
      <div className="mb-10 flex w-full flex-col items-center justify-center border-b-2 border-cyan-900">
        <h1 className="custom-ff-bold mb-5 text-center text-xl text-cyan-500 md:text-5xl">
          Blog
        </h1>
      </div>
      <div className="flex h-1/2 w-full items-center justify-center text-sm md:text-2xl">
        <h2 className="custom-ff-heading text-center text-cyan-500">
          Updates Coming Soon!
        </h2>
      </div>
    </>
  );
};

export default Blog;
