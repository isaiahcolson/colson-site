import React from "react";
import { Route, Routes } from "react-router-dom";
import { Article, Articles, Home } from "./pages";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import "./index.css";
import "./scss/index.scss";

function App() {
  return (
    <div className="h-full min-h-screen flex flex-col max-w-7xl my-0 mx-auto text-black">
      <div className="px-6 md:px-8">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:id" element={<Article />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export { App };
