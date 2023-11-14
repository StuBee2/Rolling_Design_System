import { useEffect } from "react";

export const useAuthTopScroll = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
