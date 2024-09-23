"use client";
import { RxDashboard } from "react-icons/rx";
import { MdCurrencyExchange } from "react-icons/md";
import { MdOutlineAccountBox } from "react-icons/md";
import { AiOutlineCreditCard } from "react-icons/ai";
import { MdOutlinePayments } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { TbMessage } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { PiSignOutFill } from "react-icons/pi";
import { TbClockRecord } from "react-icons/tb";

import LinkCard from "./LinkCard";
import { useAppSelector } from "@/redux/store/hook";
import { BsTicketDetailed } from "react-icons/bs";

export default function Sidenav() {
  const darkmode = useAppSelector((state) => state.darkmode.value);
  const links = [
    {
      icon: <RxDashboard size={20} />,
      title: "Dahsboard",
      link: "",
    },
    {
      icon: <MdOutlineAccountBox size={20} />,
      title: "Accounts",
      link: "/",
    },
    {
      icon: <AiOutlineCreditCard size={20} />,
      title: "Credit Cards",
      link: "credit-cards",
    },
    {
      icon: <MdOutlinePayments size={20} />,
      title: "Loan",
      link: "/",
    },

    {
      icon: <BiTransfer size={20} />,
      title: "Transfer",
      link: "/",
    },
    {
      icon: <TbMessage size={20} />,
      title: "Message and Inbox",
      link: "/",
    },
    {
      icon: <MdCurrencyExchange size={20} />,
      title: "Transactions",
      link: "transactions",
    },
  ];
  return (
    <div
      className={`h-screen w-full overflow-y-auto duration-300 border-r-2 flex justify-between flex-col ${
        darkmode ? "bg-[#01030c] border-gray-800" : "bg-gray-100"
      }  `}
    >
      <div className="h-20 flex items-center">
        <p className="text-[22px] font-bold mt-3 px-5">
          <span className="text-[red]">First</span>{" "}
          <span className="text-[blue]">Union</span>{" "}
          <span
            className={`${darkmode ? "text-white" : "text-black"} duration-300`}
          >
            Bank
          </span>
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-between px-3 py-2 overflow-y-auto ">
        <div className="">
          <div className="flex flex-col gap-2">
            {links.map((el) => (
              <LinkCard link={el.link} icon={el.icon} title={el.title} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <LinkCard
            link={"/settings"}
            icon={<FiSettings size={20} />}
            title={"Settings"}
          />
          <LinkCard
            link={"/signuot"}
            icon={<PiSignOutFill size={20} />}
            title={"Signout"}
          />
        </div>
      </div>
    </div>
  );
}
