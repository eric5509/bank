"use client";
import { openDropdown } from "@/redux/reducer/Dashboard";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";

type Props = {
  link: {
    icon: any;
    title: string;
    color: string
  };
  track: number;
};

export default function Card({ link, track }: Props) {
  const darkmode = useAppSelector((state) => state.darkmode.value);
  const dispatch = useAppDispatch()
  return (
    <div
    style={{border: `2px solid ${link.color}`}}
    onClick={() => dispatch(openDropdown(track))}
      className={`flex cursor-pointer hover:scale-[1.02] active:scale-95 p-10 rounded-xl duration-300 shadow-lg flex-col gap-2 items-center justify-center text-center ${
        darkmode ? "bg-slate-900 shadow-gray-900 " : "  shadow-gray-400 bg-white"
      }`}
    >
      <span>{link.icon}</span>
      <p className="text-sm font-semibold mt-2">{link.title}</p>
    </div>
  );
}
