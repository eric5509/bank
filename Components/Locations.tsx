import { FaLocationPin } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";

export default function Locations() {
  return (
    <div>
      <p className="px-4 py-2 font-semibold text-lg">Popular nearby Locations</p>
      <div className="flex flex-col">
        {[1, 2, 3, 4, 5].map(() => (
          <div className="flex px-4 py-1 duration-300 border-b items-center gap-1 hover:bg-black hover:text-white font-semibold">
            <ImLocation className="text-2xl"/>
            <div className="">
              <p className="font-semibold">Ikeja</p>
              <p className="text-11">Nigeria</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
