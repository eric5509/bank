import * as EmailValidator from "email-validator";

import { TValues } from "./Type";
import { Dispatch, SetStateAction } from "react";

type Props = {
  values: TValues;
  setErrors: Dispatch<SetStateAction<TValues>>;
};

export const ValidateForm = ({ values, setErrors }: Props) => {
  const newErrors = {
    firstName: values.firstName.trim() ? "" : "Please input your first name",
    lastName: values.lastName.trim() ? "" : "Please input your last name",
    username: values.username.trim() ? "" : "Please input your username",
    password: values.password.trim() ? "" : "Please input your password",
    occupation: values.occupation.trim() ? "" : "Please input your occupation",
    phoneNumber: values.phoneNumber.trim()
      ? ""
      : "Please input your phone number",
    emailAddress: values.emailAddress.trim()
      ? EmailValidator.validate(values.emailAddress)
        ? ""
        : "Please enter a valid email"
      : "Please input your email address",
    dateOfBirth: values.dateOfBirth.trim()
      ? ""
      : "Please input your birth date",
    maritalStatus: values.maritalStatus.trim()
      ? ""
      : "Please select your marital status",
    gender: values.gender.trim() ? "" : "Please select your gender",
    residentialAddress: values.residentialAddress.trim()
      ? ""
      : "Please input your address",
    accountType: values.accountType.trim()
      ? ""
      : "Please select your account type",
    registrationDate: values.registrationDate.trim()
      ? ""
      : "Please input a registration date",
    totalBalance: values.totalBalance.trim()
      ? ""
      : "Please input your total balance",
    availableBalance: values.availableBalance.trim()
      ? ""
      : "Please input your available balance",
    accountNumber: values.accountNumber.trim()
      ? ""
      : "Please input your account number",
    accountCurrency: values.accountCurrency.trim()
      ? ""
      : "Please select your account currency",
    cotCode: values.cotCode.trim() ? "" : "Please input your COT Code",
    taxCode: values.taxCode.trim() ? "" : "Please input your Tax Code",
    imfCode: values.imfCode.trim() ? "" : "Please input your IMF Code",
    loginPin: values.loginPin.trim() ? "" : "Please create a Login PIN",
    domesticTransferPin: values.domesticTransferPin.trim()
      ? ""
      : "Please create a Transfer Pin",
  };
  setErrors(newErrors);
  return Object.values(newErrors).every((error) => error === "");
};
type Props2 = {
  values: TValues;
};
export const SubmitForm = async ({ values }: Props2) => {
  return false;
};
