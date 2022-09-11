import React from "react";
import { AnimatedTypography } from "./components/Animation";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import "./index.css";
import "./scss/index.scss";

function App() {
  return (
    <div className="h-full min-h-screen flex flex-col">
      <NavBar />

      <div className="mb-auto flex flex-col justify-center items-center h-[calc(100vh-132px)]">
        <p className="text-white text-base font-serif">Isaiah Colson</p>

        <AnimatedTypography />
      </div>

      <Footer />
    </div>
  );
}

export { App };
