import { BiMinus, BiPlus } from "react-icons/bi";

export default function Children() {
  return (
    <div className="w-full">
      <div className="space-y-5">
        <div className="flex group justify-between items-center">
          <p className="font-semibold duration-300">Adult </p>
          <div className="h-12 w-32 border-2 border-gray-400 grid grid-cols-3 items-center gap-3 rounded-md">
            <div className="center">
              <BiPlus />
            </div>
            <div className="center">
              <span>1</span>
            </div>
            <div className="center">
              <BiMinus />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Children </p>
          <div className="h-12 w-32 border-2 border-gray-400 grid grid-cols-3 items-center gap-3 rounded-md">
            <div className="center">
              <BiPlus />
            </div>
            <div className="center">
              <span>1</span>
            </div>
            <div className="center">
              <BiMinus />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Room </p>
          <div className="h-12 w-32 border-2 border-gray-400 grid grid-cols-3 items-center gap-3 rounded-md">
            <div className="center">
              <BiPlus />
            </div>
            <div className="center">
              <span>1</span>
            </div>
            <div className="center">
              <BiMinus />
            </div>
          </div>
        </div>
      </div>
      <button className="py-4 mt-5 text-white bg-blue-600 w-full rounded-md shadow-md font-semibold text-sm">
        Done
      </button>
    </div>
  );
}
