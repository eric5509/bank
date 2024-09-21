"use client";
import { useState } from "react";
import * as EmailValidator from "email-validator";
import Input from "../Form/Input";
import Select from "../Form/Select";
import { SubmitForm, ValidateForm } from "./Submit";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { startLoading, stopLoading } from "@/redux/reducer/Loading";
import { BiCheck, BiCheckCircle } from "react-icons/bi";

export default function Form() {
  const [created, setCreated] = useState(false);
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loading.value);
  const [values, setValues] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    username: "",
    password: "",
    occupation: "",
    phoneNumber: "",
    emailAddress: "",
    dateOfBirth: "",
    maritalStatus: "",
    gender: "",
    residentialAddress: "",
    accountType: "",
    registrationDate: "",
    totalBalance: "",
    availableBalance: "",
    accountNumber: "",
    accountCurrency: "",
    cotCode: "",
    taxCode: "",
    imfCode: "",
    loginPin: "",
    domesticTransferPin: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    occupation: "",
    phoneNumber: "",
    emailAddress: "",
    dateOfBirth: "",
    maritalStatus: "",
    gender: "",
    residentialAddress: "",
    accountType: "",
    registrationDate: "",
    totalBalance: "",
    availableBalance: "",
    accountNumber: "",
    accountCurrency: "",
    cotCode: "",
    taxCode: "",
    imfCode: "",
    loginPin: "",
    domesticTransferPin: "",
  });
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

  const Submit = async () => {
    const validationPassed = ValidateForm({ values, setErrors });
    if (validationPassed) dispatch(startLoading());
    dispatch(stopLoading());
    setValues({
      firstName: "",
      middleName: "",
      lastName: "",
      username: "",
      password: "",
      occupation: "",
      phoneNumber: "",
      emailAddress: "",
      dateOfBirth: "",
      maritalStatus: "",
      gender: "",
      residentialAddress: "",
      accountType: "",
      registrationDate: "",
      totalBalance: "",
      availableBalance: "",
      accountNumber: "",
      accountCurrency: "",
      cotCode: "",
      taxCode: "",
      imfCode: "",
      loginPin: "",
      domesticTransferPin: "",
    });
    setCreated(validationPassed ? true : false);
  };

  return (
    <div className="relative">
      <div
        className={`h-screen text-black ${
          created ? "visible opacity-100" : "invisible opacity-0"
        } duration-300 z-40 w-screen fixed top-0 left-0 bg-black/50 grid place-content-center`}
      >
        <div className="p-10 w-80 bg-white rounded-md font-semibold text-lg shadow-lg flex flex-col gap-5 items-center justify-center text-center">
          <BiCheckCircle className="text-green-600" size={100} />
          <p>Account Created Successfully</p>
          <p
            onClick={() => setCreated(false)}
            className="bg-blue-600 px-7 py-2 font-normal rounded-md duration-300 hover:bg-blue-700 active:scale-90 shadow-md text-white cursor-pointer"
          >
            Ok
          </p>
        </div>
      </div>
      <div className="grid relative z-30 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <Input
          error={errors.firstName}
          name="firstName"
          value={values.firstName}
          title="First Name"
          onChange={onChange}
        />
        <Input
          error=""
          name="middleName"
          value={values.middleName}
          title="Middle Name(optional)"
          onChange={onChange}
        />
        <Input
          error={errors.lastName}
          name="lastName"
          value={values.lastName}
          title="Last Name"
          onChange={onChange}
        />
        <Input
          error={errors.username}
          name="username"
          value={values.username}
          title="Username"
          onChange={onChange}
        />
        <Input
          error={errors.password}
          name="password"
          value={values.password}
          title="Password"
          onChange={onChange}
          password={true}
        />
        <Input
          error={errors.occupation}
          name="occupation"
          value={values.occupation}
          title="Occupation"
          onChange={onChange}
        />
        <Input
          error={errors.phoneNumber}
          name="phoneNumber"
          value={values.phoneNumber}
          title="Phone Number"
          onChange={onChange}
        />
        <Input
          error={errors.emailAddress}
          name="emailAddress"
          value={values.emailAddress}
          title="Email Address"
          onChange={onChange}
        />
        <Input
          error={errors.dateOfBirth}
          name="dateOfBirth"
          value={values.dateOfBirth}
          title="Date of Birth(dd-mm-yy)"
          onChange={onChange}
        />
        <Select
          error={errors.maritalStatus}
          name="maritalStatus"
          value={values.maritalStatus}
          title="Marital Status"
          options={["", "Single", "Married"]}
          onChange={onChange}
        />
        <Select
          error={errors.gender}
          name="gender"
          value={values.gender}
          title="Gender"
          options={["", "Male", "Female", "Other"]}
          onChange={onChange}
        />
        <Input
          error={errors.residentialAddress}
          name="residentialAddress"
          value={values.residentialAddress}
          title="Residential Address"
          onChange={onChange}
        />
        <Select
          error={errors.accountType}
          name="accountType"
          value={values.accountType}
          title="Account Type"
          options={["", "Checking"]}
          onChange={onChange}
        />
        <Input
          error={errors.registrationDate}
          name="registrationDate"
          value={values.registrationDate}
          title="Registration Date (dd-mm-yy)"
          onChange={onChange}
        />
        <Input
          error={errors.totalBalance}
          name="totalBalance"
          value={values.totalBalance}
          title="Total Balance"
          onChange={onChange}
        />
        <Input
          error={errors.availableBalance}
          name="availableBalance"
          value={values.availableBalance}
          title="Available Balance"
          onChange={onChange}
        />
        <Input
          error={errors.accountNumber}
          name="accountNumber"
          value={values.accountNumber}
          title="Select Account Number"
          onChange={onChange}
        />
        <Select
          error={errors.accountCurrency}
          name="accountCurrency"
          value={values.accountCurrency}
          title="Account Currency"
          options={["", "Dollar", "Pound", "Euro"]}
          onChange={onChange}
        />
        <Input
          error={errors.cotCode}
          name="cotCode"
          value={values.cotCode}
          title="COT Code"
          onChange={onChange}
        />
        <Input
          error={errors.taxCode}
          name="taxCode"
          value={values.taxCode}
          title="Tax Code"
          onChange={onChange}
        />
        <Input
          error={errors.imfCode}
          name="imfCode"
          value={values.imfCode}
          title="IMF Code"
          onChange={onChange}
        />
        <Input
          error={errors.loginPin}
          name="loginPin"
          value={values.loginPin}
          title="Login PIN / ATM PIN"
          password={true}
          onChange={onChange}
        />
        <Input
          error={errors.domesticTransferPin}
          name="domesticTransferPin"
          value={values.domesticTransferPin}
          password={true}
          title="Domestic Transfer PIN"
          onChange={onChange}
        />
      </div>
      <button
        disabled={loading}
        onClick={Submit}
        className={`h-12 flex mt-5 duration-300  w-full rounded-lg items-center justify-center ${
          loading
            ? "bg-blue-300 cursor-auto shadow"
            : "bg-blue-600 shadow-lg active:scale-[.98] cursor-pointer"
        } text-white font-semibold`}
      >
        {loading ? (
          <span className="loader"></span>
        ) : (
          <span>Create Account</span>
        )}
      </button>
    </div>
  );
}
