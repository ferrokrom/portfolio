import React, { useEffect, useRef, useState } from "react";

export default function useInView(ref) {
  const [isVisible, setIsVisible] = useState(false);
  console.log(ref);
  const options = {
    rootmargin: "0px",
    root: null,
    threshold: 1,
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);

      const entry = entries[0];
      console.log("entry:", entry);
      if (entry.isVisible) {
        console.log("ref", isVisible, ref);
      }
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [isVisible, ref]);

  return { isVisible };
}
