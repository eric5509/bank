export default function ExploreCountry() {
  return (
    <div className="container">
        <p className="title">Explore Nigeria</p>
        <p className="text-sm">These popular destinations have a lot to offer</p>
        <div className="grid grid-flow-col mt-2 overflow-x-auto gap-5 auto-cols-[200px]">
            {[1,2,3,4,5,5,5,5,].map(() => (
                <div className="">
                    <div className="h-32 bg-emerald-500 rounded-md"></div>
                    <p className="text-sm mt-1 font-semibold">Ikeja</p>
                    <p className="text-gray-500">100 properties</p>
                </div>
            ))}
        </div>
    </div>
  )
}
