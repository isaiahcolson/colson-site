import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToId = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
};

export default useScrollToId;

const ScrollToTop = () => {
  useScrollToId();

  return null;
};

export { ScrollToTop, useScrollToId };
