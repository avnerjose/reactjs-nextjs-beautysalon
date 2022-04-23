import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useInViewAnimation() {
  const [ref, inView] = useInView({
    threshold: [0.25],
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return { ref, controls, inView };
}
