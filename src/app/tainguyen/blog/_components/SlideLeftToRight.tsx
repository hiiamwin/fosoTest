"use client";
import React from "react";
import { motion } from "framer-motion";

type SlideLeftToRightProps = {
  children: React.ReactNode;
  duration: number;
  ease: "easeIn" | "easeOut" | "easeInOut" | "linear";
  className?: string;
};

function SlideLeftToRight({
  children,
  duration,
  ease,
  className,
}: SlideLeftToRightProps) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
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

export default SlideLeftToRight;
