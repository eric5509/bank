import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { BiUser } from "react-icons/bi";
import { MdOutlinePendingActions } from "react-icons/md";

type Props = {
  setOpened: Dispatch<SetStateAction<boolean>>;
  darkmode: boolean
};

export default function QuickLinks({ setOpened, darkmode }: Props) {
  const links = [
    {
      title: "Total Accounts",
      number: 35,
    },
    {
      title: "Tickets",
      number: 6,
    },
    {
      title: "Transfer Made",
      number: 12,
    },
    {
      title: "Total Pending Accounts",
      number: 0,
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">Quick Links</p>
        <div className="flex gap-4">
          <div className="flex items-center cursor-pointer text-white bg-[rgb(46,13,236)] active:scale-95 hover:scale-[1.02] p-3 rounded-full duration-300 shadow-md gap-2">
            <MdOutlinePendingActions size={20} />
            <p className="text-sm font-semibold text-white">Pending Accounts</p>
          </div>
          <Link href={'/create-user'} className="flex items-center cursor-pointer text-white bg-[#66c106] active:scale-95 hover:scale-[1.02] duration-300 text-xs p-3 h-fit rounded-full shadow-md gap-2">
            <BiUser size={20} />
            <p className="text-sm font-semibold text-white">
              Create User Account
            </p>
          </Link>
        </div>
      </div>
      <div className="flex items-center text-center mt-7 justify-between">
        {links.map((el, key) => (
          <div className="" key={key}>
            <p className="text-2xl font-semibold">{el.number}</p>
            <p className={`text-sm font-semibold duration-300 ${darkmode ? 'text-white': 'text-gray-600'}`}>{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
