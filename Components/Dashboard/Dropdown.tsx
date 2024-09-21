"use client";
import { useAppSelector } from "@/redux/store/hook";
import AddCreditDebithistory from "./AddCreditDebitHistory";
import CreditUserDropdown from "./CreditUserDropdown";
import DebitUserDropdown from "./DebitUserDropdown";

export default function Dropdown() {
  const dropdown = useAppSelector((state) => state.dropdown.value);
  const darkmode = useAppSelector((state) => state.darkmode.value);
  return (
      <div
        className={`h-screen duration-300 ${
          dropdown === 0 || dropdown === 1 || dropdown === 2
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        } overflow-y-auto w-screen z-[5000000000] fixed top-0 left-0 bg-black/50 ${
          darkmode && "text-black"
        }`}
      >
        <div className="h-full w-full relative">
          <AddCreditDebithistory />
          <CreditUserDropdown />
          <DebitUserDropdown />
        </div>
      </div>
  );
}
