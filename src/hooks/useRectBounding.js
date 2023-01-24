import React, { useEffect, useRef, useState } from "react";

function useRectBounding(ref) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function cback() {
      if (ref.current.getBoundingClientRect().top < 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    document.addEventListener("scroll", cback);
    return () => {
      document.addEventListener("scroll", cback);
    };
  }, []);
  return { isVisible };
}

export default useRectBounding;
