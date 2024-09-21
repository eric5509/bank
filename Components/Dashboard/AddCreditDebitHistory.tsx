import React, { Dispatch, SetStateAction } from "react";
import Input from "../Form/Input";
import Select from "../Form/Select";
import {
  dropdownParent,
  grid,
  titleParent,
  title,
  xIcon,
  resetBtn,
  submitBtn,
} from "./Style";
import { FaTimes } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { closeDropdown } from "@/redux/reducer/Dashboard";

export default function AddCreditDebithistory() {
  const dispatch = useAppDispatch();
  const dropdown = useAppSelector((state) => state.dropdown.value);
  return (
    <div
      className={`duration-500 ${
        dropdown === 0 ? "opacity-100 visible" : "opacity-0 invisible"
      } ${dropdownParent}`}
    >
      {" "}
      <div className={`${titleParent}`}>
        <p className={`${title}`}>Add Credit/Debit History</p>
        <FaTimes
          onClick={() => dispatch(closeDropdown())}
          size={20}
          className={`${xIcon}`}
        />
      </div>
      <div className={`${grid}`}>
        <Select
          error=""
          value=""
          options={["Larry Elison", "Nick Jonas"]}
          title="Select User"
          name="email"
        />
        <Select
          error=""
          value=""
          options={["Credit", "Debit"]}
          title="Transaction Type"
          name="email"
        />
        <Input error="" value="" title="Amount" name="email" />
        <Input error="" value="" title="Description" name="email" />
        <Input error="" value="" title="To / From" name="email" />
        <Input error="" value="" title="Date (dd-mm-yy)" name="date" />
        <Input error="" value="" title="Time (hh:mm:ss)" name="time" />
      </div>
      <div className="flex justify-between mt-5 w-full">
        <button className={`${resetBtn}`}>Reset</button>
        <button className={`${submitBtn}`}>Debit Account</button>
      </div>
    </div>
  );
}
