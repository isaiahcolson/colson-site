import React from "react";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import "./index.css";
import "./scss/index.scss";

function App() {
  return (
    <div className="h-full min-h-screen flex flex-col">
      <NavBar />

      <p className="mb-auto">Isaiah Colson</p>

      <Footer />
    </div>
  );
}

export { App };
