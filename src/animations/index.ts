import { Variants } from "framer-motion";

const slideFromLeft: Variants = {
  visible: (i: boolean = false) => ({
    x: "0",
    opacity: 1,
    transition: {
      delay: i ? 0.5 : 0,
    },
  }),
  hidden: { x: "-10vh", opacity: 0 },
};

const slideFromRight: Variants = {
  visible: (i: boolean = false) => ({
    x: "0",
    opacity: 1,
    transition: {
      delay: i ? 0.5 : 0,
    },
  }),
  hidden: { x: "10vh", opacity: 0 },
};

const slideFromTop: Variants = {
  visible: { y: "0", opacity: 1 },
  hidden: { y: "10vh", opacity: 0 },
};

const slideFromBottom: Variants = {
  visible: { y: "0", opacity: 1 },
  hidden: { y: "-10vh", opacity: 0 },
};

const parent: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.5,
    },
  },
};

const child: Variants = {
  hidden: { y: "-10vh", opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
};

export {
  slideFromLeft,
  slideFromRight,
  slideFromTop,
  slideFromBottom,
  parent,
  child,
};
