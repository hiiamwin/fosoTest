"use client";
import React from "react";
import { motion } from "framer-motion";

type TextRevealProps = {
  content: string;
  className: string;
};
function TextReveal({ content, className }: TextRevealProps) {
  const words = content.split(" ");

  // Variants cho container
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04,
      },
    },
  };

  // Variants cho mỗi từ
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.p
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block" variants={child}>
          {word}
          {index < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default TextReveal;
