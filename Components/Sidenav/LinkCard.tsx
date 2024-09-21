"use client"
import { useAppSelector } from "@/redux/store/hook";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiTwotoneDashboard } from "react-icons/ai";

type Props = {
  link: string;
  icon: any;
  title: string;
};

export default function LinkCard({ link, title, icon }: Props) {
  const pathname = usePathname()
  const darkmode = useAppSelector(state => state.darkmode.value)
  return (
    <div>
      <Link
        href={`/${link}`}
        className={`flex duration-300 ${pathname === `/${link}`? ` font-semibold ${darkmode ? " bg-blue-600 text-white": "text-white bg-blue-600"}` : `${darkmode ? 'text-white hover:text-white hover:bg-blue-500' : 'text-black hover:text-white hover:bg-blue-500'}` } cursor-pointer  gap-2 items-center text-sm text-wxhite px-3 py-[10px] rounded-md`}
      >
        {icon}
        <p>{title}</p>
      </Link>
      {/* <div className="h-40 w-full bg-red-500"></div> */}
    </div>
  );
}
