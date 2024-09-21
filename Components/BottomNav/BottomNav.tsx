import { AiOutlineCreditCard } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import {
  MdCurrencyExchange,
  MdOutlineAccountBox,
  MdOutlinePayments,
} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

export default function BottomNav() {
  const links = [
   
    {
      icon: <MdCurrencyExchange size={22}/>,
      title: "Transactions",
      link: "transactions",
    },
    {
      icon: <BiTransfer size={28}/>,
      title: "Accounts",
      link: "/",
    },
    {
        icon: <RxDashboard size={30}/>,
        title: "Dahsboard",
        link: "",
      },
    {
      icon: <AiOutlineCreditCard size={27}/>,
      title: "Credit Card",
      link: "/",
    },
    {
      icon: <CiSettings size={32}/>,
      title: "Loan",
      link: "/",
    },
  ];
  return (
    <div className="h-[70px] drop-shadow-xl shadow-black border-t-2 w-full z-[50000] md:hidden fixed bottom-0 left-0 bg-white">
      <div className="grid  h-full justify-between grid-flow-col px-3 items-center">
        {links.map((el, key) => (
          <div className={`grid shrink-0 place-content-center h-12 w-12 rounded-full ${key === 2 ? 'shadow-lg bg-blue-600 text-white border-2' : ''}`}>{el.icon}</div>
        ))}
      </div>
    </div>
  );
}
