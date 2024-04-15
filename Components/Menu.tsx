export default function Menu() {
  return (
    <div className="container">
        <div className="flex p-1 mt-4 items-center  border-2 rounded-full">
            <input type="text" className="h-12 text-sm pl-5 outline-none rounded-full flex-1"/>
            <button className="py-4 px-7 uppercase text-white bg-blue-500 font-semibold rounded-full">Search</button>
        </div>
    </div>
  )
}
