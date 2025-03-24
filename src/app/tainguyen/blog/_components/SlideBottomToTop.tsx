"use client";
import React from "react";
import { motion } from "framer-motion";

type SlideBottomToTopProps = {
  children: React.ReactNode;
  ease: "easeIn" | "easeOut" | "easeInOut" | "linear";
  duration: number;
  className?: string;
};
function SlideBottomToTop({
  children,
  ease,
  duration,
  className,
}: SlideBottomToTopProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: duration,
        ease: ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default SlideBottomToTop;
