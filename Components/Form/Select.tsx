import { useAppSelector } from "@/redux/store/hook";

type Props = {
  error: string;
  title: string;
  value: string;
  name: string;
  onChange: (e: any) => void;
  options: string[];
};

export default function Select({
  error,
  onChange,
  title,
  value,
  name,
  options,
}: Props) {
  const darkmode = useAppSelector((state) => state.darkmode.value);
  return (
    <div>
      <p className="font-semibold text-sm mb-2">{title}</p>
      <div
        className={`input bg-white ${
          error
            ? "border-red-500"
            : `${darkmode ? "border-white" : "border-gray-300"}`
        }`}
      >
        {" "}
        <select
          value={value}
          name={name}
          onChange={onChange}
          className="h-full rounded-lg text-black bg-transparent w-full px-2 outline-none border-none text-sm"
        >
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className={`mt-2 ${error ? "h-5" : "h-0"} duration-300`}>
        <p className="text-red-500">{error}</p>
      </div>
    </div>
  );
}
