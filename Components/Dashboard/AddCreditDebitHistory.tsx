'use client'
import React, { Dispatch, SetStateAction, useState } from "react";
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
  const initalValues = {
    account: "",
    amount: "",
    type: "",
    username: "",
    description: "",
    date: "",
    time: "",
  }
  const [values, setValues] = useState(initalValues);
  const [errors, setErrors] = useState(initalValues);
  const onChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  
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
          error={errors.account}
          value={values.account}
          onChange={onChange}
          options={["", "Jamie Carragher", "Elison Pallete"]}
          label="Select User"
          name="account"
        />
        <Select
          error={errors.type}
          value={values.type}
          onChange={onChange}
          options={["", "Credit", "Debit"]}
          label="Trasaction Type"
          name="type"
        />
        <Select
          error={errors.username}
          value={values.username}
          onChange={onChange}
          options={["", "Jamie Carragher", "Elison Pallete"]}
          label="To / From"
          name="username"
        />
        <Input
          error={errors.amount}
          value={values.amount}
          onChange={onChange}
          label="Amount"
          name="amount"
        />
        <Input
          error={errors.description}
          value={values.description}
          onChange={onChange}
          label="Description"
          name="description"
        />
        <Input
          error={errors.date}
          value={values.date}
          onChange={onChange}
          label="Date (dd-mm-yy)"
          name="date"
        />
        <Input
          error={errors.time}
          value={values.time}
          onChange={onChange}
          label="Time (hh:mm:ss)"
          name="time"
        />
      </div>
      <div className="flex justify-between mt-5 w-full">
        <button className={`${resetBtn}`}>Reset</button>
        <button className={`${submitBtn}`}>Debit Account</button>
      </div>
    </div>
  );
}
