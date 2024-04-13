export default function SearchByPropertyType() {
  return (
    <main className="container">
        <p className="title">Browse by property type</p>
        <div className="grid grid-flow-col mt-2 overflow-x-auto gap-5 auto-cols-[270px]">
            {[1,2,3,4,5].map(() => (
                <div className="">
                    <div className="h-40 bg-red-500 rounded-md"></div>
                    <p className="text-sm mt-1">Hotels</p>
                </div>
            ))}
        </div>
        
    </main>
  )
}
