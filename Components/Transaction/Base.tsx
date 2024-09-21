'use client'
import { useAppSelector } from "@/redux/store/hook";
import Transactions from "./Transactions";

export default function Base() {
    const darkmode = useAppSelector(state => state.darkmode.value)
  return (
    <div className={`h-full w-full p-4 pb-20 md:pb-4 duration-300 ${darkmode ? "bg-slate-950": "bg-white"}`}>
        <Transactions />
    </div>
  )
}
