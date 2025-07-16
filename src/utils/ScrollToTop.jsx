import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on every route change
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]); // Runs only when the path changes

  return null; // does not render anything
};

export default ScrollToTop;
