import React from "react";
import { Link } from "react-router-dom";
const PageHeader = ({ pagename }) => {
  return (
    <h1 className="sm:mx-4 lg:mx-44 my-2 p-4">
      <Link to="/">
        <span className="pr-2">Home</span>
      </Link>
      /<span className="px-2">{pagename}</span>
    </h1>
  );
};

export default PageHeader;
