// Need a track isScrolling down which can be determined with currentScroll - prevScroll > 0
// event listener in useEffectHook which fires every time user scrolls
// need to know if element is visible of if became visible

import { useState, useEffect, useRef } from "react";

const useAnimateOnScrollDown = () => {
  const [scrollY, setScrollY] = useState(0);
  const [elementIsVisible, setElementIsVisible] = useState();
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [didAnimate, setDidAnimate] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setElementIsVisible(entry.isIntersecting);
      if (!entry.isIntersecting) {
        setDidAnimate(false);
      }
    });

    observer.observe(ref.current);

    const scrollListener = window.addEventListener("scroll", (event) => {
      if (scrollY < window.scrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setScrollY(window.scrollY);
    });

    return removeEventListener("scroll", scrollListener);
  }, []);

  const shouldAnimate = elementIsVisible && isScrollingDown && !didAnimate;
  if (shouldAnimate) setDidAnimate(true);

  return { shouldAnimate, ref };
};

export default useAnimateOnScrollDown;
