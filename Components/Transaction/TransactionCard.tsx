import { useAppSelector } from "@/redux/store/hook";
import { useEffect, useState } from "react";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";

type Props = {
  zIndex?: number;
  transaction: {
    sender: string;
    beneficiaryName: string;
    beneficiaryAccountNumber: string;
    beneficiaryBankName: string;
    beneficiaryBalance: number;
    amountTransferred: string;
    transferType: string;
    date: string;
    transactionStatus: string;
  };
  track: number
};
export default function TransactionCard({ zIndex, transaction, track }: Props) {
  const darkmode = useAppSelector(state => state.darkmode.value)

  const [active, setActive] = useState(-1)

  useEffect(() => {


  },[active])
  
  return (
    <div
      style={{ zIndex: zIndex }}
      className={`duration-300 rounded-md relative shadow-md  p-5 ${darkmode ? "bg-[#01030c] text-white shadow-gray-900" : "shadow-gray-400 bg-blue-50"}`}
    >
      <div className="flex justify-between  items-center">
        <p className="text-xl font-semibold">
          {transaction.sender}{" "}
          <span className="text-xs font-normal">(sender)</span>
        </p>
        <div className="relative z-[2000]" onClick={() => setActive(track)}>
          <BsThreeDotsVertical size={17} />
          <div className={`${active === track ? "h-32" :"h-0"} duration-300 z-[100000] bg-red-500 absolute top-full right-0 w-40`}></div>
        </div>
      </div>
      <div className="grid grid-cols-1 text-13 sm:grid-cols-2 gap-4 lg:grid-cols-4 mt-4">
        <p>
          Beneficiary Name <span className="font-semibold block mt-2">{transaction.beneficiaryName}</span>
        </p>
        <p>
          Beneficiary Account Number
          <span className="font-semibold block mt-2">{transaction.beneficiaryAccountNumber}</span>
        </p>
        <p>
          Beneficiary Bank Name <span className="font-semibold block mt-2">{transaction.beneficiaryBankName}</span>
        </p>
        <p>
          Beneficiary Balance <span className="font-semibold block mt-2">${transaction.beneficiaryBalance.toLocaleString()}.00</span>
        </p>
      </div>
      <div className="grid grid-cols-1 text-13 sm:grid-cols-2 gap-4 lg:grid-cols-4 mt-4">
        <p>
          Amount Transfered <span className="font-semibold block mt-2">{transaction.amountTransferred}</span>
        </p>
        <p>
          Transfer Type <span className="font-semibold block mt-2">{transaction.transferType}</span>
        </p>
        <p>
          Date <span className="font-semibold block mt-2">{transaction.date}</span>
        </p>
        <p
          className={`p-2 rounded-full w-full text-white flex items-center justify-center  font-semibold
            ${transaction.transactionStatus === "Pending" && "bg-amber-500"}
            ${transaction.transactionStatus === "Successful" && "bg-green-500"}
            ${transaction.transactionStatus === "Failed" && "bg-red-500"}
            `}
        >
          {transaction.transactionStatus}
        </p>
      </div>
    </div>
  );
}
