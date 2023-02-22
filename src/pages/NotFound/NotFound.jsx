import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="custom-ff-reg flex h-screen w-full flex-col items-center justify-center p-10 text-center">
      <h1 className="mb-20 text-5xl font-bold text-cyan-500">Oops!</h1>
      <p className="mb-8 text-xl text-cyan-300">
        Sorry, an unexpected error has occurred. <br />
        <Link className="text-cyan-600" to="/">
          Go back to Homepage
        </Link>
      </p>
      <p className="mb-3 text-xl text-cyan-300">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFound;
