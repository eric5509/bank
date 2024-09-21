import React, { Dispatch, SetStateAction } from "react";
import Input from "../Form/Input";
import Select from "../Form/Select";
import {
  dropdownParent,
  grid,
  resetBtn,
  submitBtn,
  title,
  titleParent,
  xIcon,
} from "./Style";
import { FaTimes } from "react-icons/fa";
import { closeDropdown } from "@/redux/reducer/Dashboard";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";

export default function CreditUserDropdown() {
  const dispatch = useAppDispatch()
  const dropdown = useAppSelector(state => state.dropdown.value)
    
  return (
    <div className={`duration-500 ${dropdown === 1 ? 'opacity-100 visible': 'opacity-0 invisible' } ${dropdownParent}`}>
      <div className={`${titleParent}`}>
        <p className={`${title}`}>Credit User's Account</p>
        <FaTimes onClick={() => dispatch(closeDropdown())} size={20} className={`${xIcon}`} />
      </div>
      <div className={`${grid}`}>
        <Select
          error=""
          value=""
          options={["Jamie Carragher", "Elison Pallete"]}
          title="Account to Credit"
          name="email"
        />
        <Input error="" value="" title="From" name="email" />
        <Input error="" value="" title="Amount" name="email" />
        <Input error="" value="" title="Description" name="email" />
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
