'use client'
import { FaBars } from "react-icons/fa";
import PictureName from "./PictureName";
import SearchSettingsBell from "./SearchSettingsBell";
import { useAppSelector } from "@/redux/store/hook";

export default function Topnav() {
const darkmode = useAppSelector(state => state.darkmode.value)
  return (
    <div className={`h-full duration-300 border-b-2 ${darkmode ? "bg-slate-950 border-gray-800 text-white": "bg-gray-50 text-black"}`}>
      <div className="h-full hidden md:flex justify-between items-center px-4 w-full">
        <PictureName />
        <SearchSettingsBell darkmode={darkmode}/>
      </div>
      <div className="flex md:hidden gap-3 items-center px-3 border-b-2 h-16 w-full justify-between">
        <p className="text-[22px] font-bold mt-3">
          <span className="text-[red]">First</span>{" "}
          <span className="text-[blue]">Union</span> Bank
        </p>
        <FaBars size={22}/>
      </div>
    </div>
  );
}
