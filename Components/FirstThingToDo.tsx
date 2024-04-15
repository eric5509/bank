import Image from "next/image";

export default function FirstThingToDo() {
  return (
    <div className="container">
      <p className="title mb-1">Find things to do in...</p>
      <div className="grid grid-flow-col mt-2 overflow-x-auto gap-5 auto-cols-[270px]">
        {[1, 2, 3, 4, 5].map(() => (
          <div className="h-40 relative bg-red-500 rounded-md">
            <Image
              src={""}
              alt=""
              height={0}
              width={0}
              className="h-full w-full object-contain absolute top-0 left-0 z-[-1]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
