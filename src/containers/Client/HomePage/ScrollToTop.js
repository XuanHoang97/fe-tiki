import { useEffect } from "react";
import { useLocation, withRouter } from "react-router-dom";

export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    
    scrollTop();
  }, [pathname]);

  return null;
}

export default withRouter(ScrollToTop);