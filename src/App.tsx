import { Route, Routes } from "react-router-dom";
import { Article, Articles, Bookmark, Home } from "./pages";
import ArticleOne from "./articles/001.mdx";
import "./index.css";
import "./scss/index.scss";
import {
  DesignSystem,
  HelpCenter,
  PhoneVerification,
  PricingChart,
  TaxLeadQuality,
} from "./pages/Work";
import { Rive002 } from "./articles/Rive002";
import { Rive006 } from "./articles/Rive006";
import { RiveFaces } from "./articles/RiveFaces";
import { RockMeter } from "./Rive";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="articles" element={<Articles />} />
        <Route path="bookmark" element={<Bookmark />} />
        <Route path="work/tax-lead-quality" element={<TaxLeadQuality />} />
        <Route path="work/phone-verification" element={<PhoneVerification />} />
        <Route path="work/design-system" element={<DesignSystem />} />
        <Route path="work/help-center" element={<HelpCenter />} />
        <Route path="work/pricing-chart" element={<PricingChart />} />
        <Route
          path="articles/001"
          element={<Article article={<ArticleOne />} />}
        />
        <Route
          path="articles/rive002"
          element={<Article article={<Rive002 />} />}
        />
        <Route
          path="articles/rive006"
          element={<Article article={<Rive006 />} />}
        />
        <Route path="articles/rive-faces" element={<RiveFaces />} />
        <Route path="prototypes/rock-meter" element={<RockMeter />} />
      </Routes>
    </>
  );
}

export { App };
