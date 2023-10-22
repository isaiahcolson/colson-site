import { Route, Routes } from "react-router-dom";
import { Article, Articles, Home, RiveTest } from "./pages";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import ArticleOne from "./articles/001.mdx";
import "./index.css";
import "./scss/index.scss";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="articles" element={<Articles />} />
        <Route
          path="articles/001"
          element={<Article article={<ArticleOne />} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export { App };
