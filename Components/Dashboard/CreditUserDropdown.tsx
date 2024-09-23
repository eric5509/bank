import React, { Dispatch, SetStateAction, useState } from "react";
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
  const dispatch = useAppDispatch();
  const dropdown = useAppSelector((state) => state.dropdown.value);
  const initalValues = {
    account: "",
    amount: "",
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

  const submit = () => {
    if (
      !values.account.trim() ||
      !values.amount.trim() ||
      !values.username.trim() ||
      !values.description.trim() ||
      !values.date.trim() ||
      !values.time.trim()
    ) {
      setErrors({
        ...errors,
        account: values.account.trim() ? "" : "Please select an Account",
        amount: values.amount.trim() ? "" : "Please input an ammount",
        username: values.username.trim() ? "" : "Please select an Username",
        description: values.description.trim()
          ? ""
          : "Please fill the description",
        date: values.date.trim() ? "" : "Please input a Date ",
        time: values.time.trim() ? "" : "Please input the Time",
      });
    }
  };

  return (
    <div
      className={`duration-500 ${
        dropdown === 1 ? "opacity-100 visible" : "opacity-0 invisible"
      } ${dropdownParent}`}
    >
      <div className={`${titleParent}`}>
        <p className={`${title}`}>Credit User's Account</p>
        <FaTimes
          onClick={() => {  
            dispatch(closeDropdown());
            setValues(initalValues);
            setErrors(initalValues);
          }}
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
          label="Account to Credit"
          name="account"
        />
        <Select
          error={errors.username}
          value={values.username}
          onChange={onChange}
          options={["", "Jamie Carragher", "Elison Pallete"]}
          label="From"
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
        <button onClick={submit} className={`${submitBtn}`}>
          Debit Account
        </button>
      </div>
    </div>
  );
}
