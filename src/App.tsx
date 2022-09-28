import { Route, Routes } from "react-router-dom";
import { Article, Articles, Home } from "./pages";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import ArticleOne from "./articles/001.mdx";
import "./index.css";
import "./scss/index.scss";

function App() {
  return (
    <div className="h-full min-h-screen flex flex-col max-w-7xl my-0 mx-auto">
      <div className="px-6 md:px-8">
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
      </div>
    </div>
  );
}

export { App };
