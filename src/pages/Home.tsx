import React from "react";
import { AnimatedTypography } from "../components/Animation";

function Home() {
  return (
    <div className="mb-auto flex flex-col justify-center items-center h-[calc(100vh-132px)] md:h-[calc(100vh-160px)]">
      <p className="text-white text-base font-serif md:text-xl">
        Isaiah Colson
      </p>

      <AnimatedTypography />
    </div>
  );
}

export { Home };
