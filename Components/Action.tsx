import { BiBed, BiCalendar } from "react-icons/bi";
import { BsChevronDown, BsPerson } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import Locations from "./Locations";
import Children from "./Children";

export default function Action() {
  return (
    <div className="container text-black">
      <div className="h-16 grid grid-cols-[1.25fr_1fr_1fr_auto] gap-4 text-sm rounded-md p-2 bg-rose-500 w-full">
        <div className="flex rounded-md gap-2 group cursor-pointer relative justify-between p-2 bg-white items-center">
          <BiBed className="text-lg"/>
          <input type="text" className="flex-1 pl-2 outline-none border-none placeholder:text-black" placeholder="Where are you going to?"/>
          {/* <FaTimes className="absolute " /> */}
          <div className="rounded-t-lg w-full shadow-md bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 absolute bottom-14 left-0">
            <Locations />
          </div>
        </div>
        <div className="flex items-center bg-white cursor-pointer group relative p-2 rounded-md gap-3">
          <BiCalendar className="text-lg"/>
          <p className="font-semibold text-13">Sun 14 Apr - Wed 12 Apr</p>
          <div className="h-96 w-[200%] bg-emerald-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 absolute bottom-14 left-1/2 -translate-x-1/2"></div>
        </div>
        <div className="flex justify-between cursor-pointer relative p-2 group bg-white rounded-md items-center gap-3">
          <div className="flex items-center gap-3">
            <BsPerson className="text-xl"/>
            <p className="flex  font-semibold gap-2 items-center">2 adults <span className="h-1 w-1 rounded-full bg-black"></span> 0 Children  <span className="h-1 w-1 rounded-full bg-black"></span>  1 Room</p>
          </div>
          <BsChevronDown className="stroke-1"/>
          <div className="p-4 rounded-t-md w-full bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 absolute bottom-14 left-0">
            <Children />
          </div>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 shadow-md font-semibold rounded-md">Search</button>
      </div>
    </div>
  );
}
