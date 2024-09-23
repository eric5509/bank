"use client";
import { motion } from "framer-motion";
import { MdAddChart } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import { MdAddCard } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { BsTicketDetailed } from "react-icons/bs";
import { TbMessage2Down } from "react-icons/tb";
import Card from "./Card";
import QuickLinks from "./QuickLinks";
import { useState } from "react";
import { useAppSelector } from "@/redux/store/hook";
import { variant1 } from "@/lib/variants";
import Dropdown from "./Dropdown";

export default function () {
  const darkmode = useAppSelector((state) => state.darkmode.value);
  const links = [
    {
      icon: <MdAddChart size={50} color="blue" />,
      title: "Add Transaction History",
      color: "blue"
    },
    {
      icon: <MdAddCard size={50} color="#0ef522" />,
      title: "Credit User Account",
      color: "#0ef522"
    },
    {
      icon: <BsCreditCard size={50} color="red" />,
      title: "Debit User Account",
      color: 'red'
    },
    {
      icon: <GrUserAdmin size={50} color="#f5f00e" />,
      title: "Edit Admin Details",
      color: '#f5f00e'
    },
    {
      icon: <BsTicketDetailed size={50} color="#d1066c" />,
      title: "View Tickets",
      color: '#d1066c'
    },
    {
      icon: <TbMessage2Down size={50} color="#a90ef5" />,
      title: "Messages",
      color: '#a90ef5'
    },
  ];
  const [opened, setOpened] = useState(false);
  return (
    <motion.div
      variants={variant1}
      initial="initial"
      animate="animate"
      className={`p-4 ${
        darkmode ? "bg-slate-950 text-white" : "bg-gray-50"
      } h-full w-full duration-300`}
    >
    <Dropdown />
      <QuickLinks setOpened={setOpened} darkmode={darkmode} />
      <div className="grid mt-8 gap-5 grid-cols-3">
        {links.map((el, key) => (
          <Card link={el} track={key} />
        ))}
      </div>
    </motion.div>
  );
}
