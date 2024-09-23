'use client'
import { useAppSelector } from "@/redux/store/hook";
import Card from "./Card";

export default function Base() {
  const darkmode = useAppSelector(state => state.darkmode.value)
  return (
    <div className={`h-full ${darkmode ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <div className="p-5 gap-5 grid grid-cols-3">
        {[1, 2, 3, 4].map((el, key) => (
          <Card track={key} />
        ))}
      </div>
    </div>
  );
}
