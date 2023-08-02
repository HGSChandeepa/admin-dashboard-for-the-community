import React from "react";
import { motion } from "framer-motion";

//modal interface
interface BackdropProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Backdrop({ onClick, children }: BackdropProps) {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
