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
      </Routes>
    </>
  );
}

export { App };
