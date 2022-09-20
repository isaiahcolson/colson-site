import React from "react";
import { Link } from "react-router-dom";
import { ICLogo } from "../Icons";

function NavBar() {
  return (
    <div className="py-4 px-6 md:py-6 md:px-8">
      <ICLogo className="w-auto h-6 md:h-8" />

      <Link to="/articles">Articles</Link>
    </div>
  );
}

export { NavBar };
