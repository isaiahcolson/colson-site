import React from "react";
import { AnimatedTypography } from "./components/Animation";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import "./index.css";
import "./scss/index.scss";

function App() {
  return (
    <div className="h-full min-h-screen flex flex-col max-w-7xl my-0 mx-auto">
      <NavBar />

      <div className="mb-auto flex flex-col justify-center items-center h-[calc(100vh-132px)] md:h-[calc(100vh-160px)]">
        <p className="text-white text-base font-serif md:text-xl">
          Isaiah Colson
        </p>

        <AnimatedTypography />
      </div>

      <Footer />
    </div>
  );
}

export { App };
