import { motion, useScroll, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopContainerVariants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ScrollToTopButton() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.5) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });

  return (
    <motion.button
      className="fixed bottom-10 right-0 p-10 z-[1000]"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </motion.button>
  );
}
