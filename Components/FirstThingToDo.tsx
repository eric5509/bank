export default function FirstThingToDo() {
  return (
    <div className="container">
        <p className="title mb-1">Find things to do in...</p>
        <div className="grid grid-flow-col mt-2 overflow-x-auto gap-5 auto-cols-[270px]">
            {[1,2,3,4,5].map(() => (
                <div className="">
                    <div className="h-40 bg-red-500 rounded-md"></div>
                </div>
            ))}
        </div>
    </div>
  )
}
