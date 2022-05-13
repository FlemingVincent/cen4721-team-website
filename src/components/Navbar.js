import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="px-4 py-8 shadow-md rounded-b-lg flex flex-row justify-between text-lg font-medium">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div className="flex flex-row gap-8">
        <Link to="ProjectOne">Project One</Link>
        <Link to="ProjectTwo">Project Two</Link>
        <Link to="ProjectThree">Project Three</Link>
      </div>
    </div>
  );
}

export default Navbar;
