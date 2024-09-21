"use client";
import { toggleMode } from "@/redux/reducer/Darkmode";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { CgDarkMode } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";

export default function SearchSettingsBell({
  darkmode,
}: {
  darkmode: boolean;
}) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-5 items-center">
      <div
        className={`h-11 w-64 border-2 rounded-full relative duration-300 ${
          darkmode ? "border-blue-600" : "border-gray-400"
        }`}
      >
        <input
          type="text"
          className="h-full w-full border-none outline-none pl-10 text-sm rounded-full"
          placeholder="Search"
        />
        <BiSearch
          className="top-1/2 text-black -translate-y-1/2 left-3 pointer-events-none absolute"
          size={22}
        />
      </div>
      <CiSettings size={24} className="cursor-pointer" />
      <CgDarkMode
        onClick={() => dispatch(toggleMode())}
        size={24}
        className={`${
          darkmode ? "text-blue-600" : "text-black"
        } duration-300 cursor-pointer`}
      />
    </div>
  );
}
