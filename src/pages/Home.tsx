import React from "react";
import { AnimatedTypography } from "../components/Animation";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-132px)] md:h-[calc(100vh-160px)]">
      <p className="text-base font-serif md:text-xl pb-2">Isaiah Colson</p>

      <AnimatedTypography />
    </div>
  );
}

export { Home };
