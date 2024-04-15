'use client'
import React, { useEffect, useState } from "react";
import { BiBrightness } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import Menu from "./Menu";

export default function Nav() {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [over100, setOver100] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setOver100(true);
      } else {
        setOver100(false);
      }
    });
  }, []);
  return (
    <div className={`fixed w-screen top-0 left-0 z-[5000] h-20 border-b-2 items-center flex duration-300 ${isOpen ? 'bg-black' : `${over100 ? 'bg-black shadow-md border-gray-300': 'bg-transparent border-transparent'}`} `}>
      <div className="flex text-base text-white font-semibold justify-between container items-center">
        <div className="flex font-normal items-center gap-2">
          <BiBrightness />
          <p>32</p>|<p>17:42</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex text-3xl font-semibold text-center italic ">
            <p>Book My Stay</p>
          </div>
        </div>
        {!isOpen && <FaBars className="cursor-pointer" onClick={() => setIsOpen(true)}/>}
        {isOpen && <FaTimes className="cursor-pointer" onClick={() => setIsOpen(false)}/>}
      </div>
      <div className={`fixed top-20 w-screen left-0 bg-white duration-500 menuHeight z-[60000] ${isOpen ? 'opacity-100 visible blur-0': 'blur-3xl invisible opacity-0'}`}>
        <Menu />
      </div>
    </div>
  );
}
