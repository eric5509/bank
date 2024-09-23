"use client";
import { useAppSelector } from "@/redux/store/hook";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

type Props = {
  error: string;
  label: string;
  leaveBlack?: boolean
  value: string;
  name: string;
  password?: boolean;
  onChange: (e: any) => void;
};

export default function Input({
  error,
  onChange,
  label,
  value,
  name,
  password,
}: Props) {
  const [isPassword, setIsPassword] = useState(true);
  const darkmode = useAppSelector(state => state.darkmode.value)
  return (
    <div className={`${darkmode ? 'text-white' : 'text-black'} `}>
      <p className={`font-semibold duration-300 text-sm mb-2`}>{label}</p>
      <div
        className={`input bg-white ${
          error ? "border-red-500" : `${darkmode ? 'border-white' : 'border-gray-300'}`
        }`}
      >
        <input
          value={value}
          name={name}
          type={password ? `${isPassword ? "password" : "text"}` : "text"}
          onChange={onChange}
          autoComplete="off"
          className={`h-full text-black rounded-lg w-full px-2 bg-transparent outline-none border-none text-sm`}
        />
        {password && (
          <div className="">
            {isPassword ? (
              <BsEye
                onClick={() => setIsPassword(!isPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
                size={15}
              />
            ) : (
              <BsEyeSlash
                onClick={() => setIsPassword(!isPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
                size={15}
              />
            )}
          </div>
        )}
      </div>
      <div
        className={`mt-2 ${error ? "h-5" : "h-0"} duration-500 overflow-hidden`}
      >
        <p className="text-red-500">{error}</p>
      </div>
    </div>
  );
}
