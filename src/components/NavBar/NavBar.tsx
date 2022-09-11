import React from "react";
import { ICLogo } from "../Icons";

function NavBar() {
  return (
    <div className="py-4 px-6 md:py-6 md:px-8">
      <ICLogo className="w-auto h-6 md:h-8" />
    </div>
  );
}

export { NavBar };
