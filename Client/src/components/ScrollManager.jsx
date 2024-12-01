import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolla till toppen när pathname ändras (navigering till en ny sida)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
