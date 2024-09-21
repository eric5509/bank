"use client";
import { motion } from "framer-motion";
import Form from "./Form";
import { variant } from "@/lib/variants";
import { useAppSelector } from "@/redux/store/hook";

export default function Base() {
  const darkmode = useAppSelector((state) => state.darkmode.value);
  return (
    <motion.div
      variants={variant}
      initial="initial"
      animate="animate"
      className={`p-5 pb-8 duration-300 ${
        darkmode && "bg-slate-950 text-white"
      }`}
    >
      <p className="font-semibold mb-6 text-2xl">Create User Account</p>
      <Form />
    </motion.div>
  );
}
