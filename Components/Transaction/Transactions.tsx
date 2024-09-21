"use client";
import { variant } from "@/lib/variants";
import TransactionCard from "./TransactionCard";
import { motion } from "framer-motion";
import { transactions } from "@/lib/data";
import { useAppSelector } from "@/redux/store/hook";
export default function Transactions() {
    const darkmode = useAppSelector(state => state.darkmode.value)
    return (
    <motion.div
      variants={variant}
      initial="initial"
      animate="animate"
    >
      <p className={`duration-300 ${darkmode ? "text-white": "text-black"} text-2xl mb-3 font-semibold`}>All Transactions</p>
      <div className="flex flex-col gap-5">
        {transactions.map((transaction, key) => (
          <TransactionCard zIndex={1000 - (key + 10) * 20} track={key} transaction={transaction}/>
        ))}
      </div>
    </motion.div>
  );
}
