import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

import React from "react";

interface ModalProps {
  onclick: () => void;
  children: React.ReactNode;
}

const DropletVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export default function Modal({ onclick, children }: ModalProps) {
  return (
    <Backdrop onClick={onclick}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal-conainer"
        variants={DropletVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className=" flex items-start w-full text-left p-5 ">
          {children}
        </div>
      </motion.div>
    </Backdrop>
  );
}
