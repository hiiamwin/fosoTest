"use client";
import React from "react";
import { motion } from "framer-motion";

type UpDownInfinityProps = {
  children?: React.ReactNode;
  duration: number;
  ease: "easeIn" | "easeOut" | "easeInOut" | "linear";
  className?: string;
};

function UpDownInfinity({
  children,
  duration,
  ease,
  className,
}: UpDownInfinityProps) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default UpDownInfinity;
