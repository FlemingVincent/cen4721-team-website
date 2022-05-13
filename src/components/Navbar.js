import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="px-4 py-8 shadow-lg flex flex-row justify-between text-lg font-medium">
      <div>
        <Link to="/" className="hover:text-[#0021A5]">
          Home
        </Link>
      </div>
      <div className="flex flex-row gap-8">
        <Link to="ProjectOne" className="hover:text-[#0021A5]">
          Project One
        </Link>
        <Link to="ProjectTwo" className="hover:text-[#0021A5]">
          Project Two
        </Link>
        <Link to="ProjectThree" className="hover:text-[#0021A5]">
          Project Three
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
