import React from "react";
import { Link } from "react-router-dom";
import { ICLogo } from "../Icons";

function NavBar() {
  return (
    <div className="py-5 px-6 md:py-6 md:px-8 flex justify-between items-center">
      <Link to="/">
        <ICLogo className="w-auto h-6 md:h-8" />
      </Link>

      <Link
        className="text-white text-lg md:text-xl hover:underline leading-[1rem]"
        to="/articles"
      >
        Articles
      </Link>
    </div>
  );
}

export { NavBar };
