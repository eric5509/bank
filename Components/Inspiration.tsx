export default function Inspiration() {
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <p className="title mb-2">Get inspiration for your next trip</p>
        <p>More</p>
      </div>
      <div className="">
        <div className="grid grid-flow-col mt-2 overflow-x-auto gap-5 auto-cols-[270px]">
          {[1, 2, 3, 4, 5].map(() => (
            <div className="">
              <div className="h-40 bg-red-500 rounded-md"></div>
              <p className="font-semibold mt-5 text-black ">6 best ryokans in Japan to rejuvenate yourself</p>
              <p className="text-gray-600 mt-2">Discover unmissable ryokans to relax and unwind in style.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
