"use client";
import { variant } from "@/lib/variants";
import { useAppSelector } from "@/redux/store/hook";
import { motion } from "framer-motion";
import { BiDotsVertical } from "react-icons/bi";

type Props = {
  track: number;
};

export default function Card({ track }: Props) {
  const darkmode = useAppSelector((state) => state.darkmode.value);
  return (
    <motion.div
      variants={variant}
      initial="initial"
      animate="animate"
      viewport={{ once: true }}
      custom={track}
    >
      <div
        className={`flex h-52 flex-col shadow-lg 
        ${track === 0 && "card"}
        ${track === 1 && "card1"}
        ${track === 2 && "card2"}
        ${track === 3 && "card3"}
        ${
          darkmode ? "text-white shadow-gray-400" : "text-black shadow-black"
        } justify-between rounded-xl p-4 shadow-md shadow-black backdrop-blur-2xl`}
      >
        <div className="flex justify-between items-center">
          <img src="/chip.png" className="h-16 w-20 -translate-x-4" alt="" />
          <p className="flex items-center gap-2">
            Active
            <BiDotsVertical size={18} className="cursor-pointer" />
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="mt-2 text-15 font-semibold ">5123 1234 6788 1234 </p>
          <p>
            PIN: <b>911</b>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="">05 / 27</p>
          <p>
            CVV: <b>911</b>
          </p>
        </div>
        <div className="flex justify-between  items-center">
          <p className="font-semibold">Karen Williams Page</p>
          <p>Mastercard</p>
        </div>
      </div>
    </motion.div>
  );
}
