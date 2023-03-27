import { Dispatch, SetStateAction } from "react";
export default function RadioButton({
  name,
  value,
  str,
  setValue,
}: {
  name: string;
  value: string;
  str: string;
  setValue: Dispatch<SetStateAction<string>>;
}) {
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <>
      <input type="radio" id={value} name={name} value={value} onChange={handleChange} className="hidden peer" />
      <label
        htmlFor={value}
        className="inline-flex items-center justify-between w-full py-2 px-1  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:text-main peer-checked:border-main"
      >
        <p className="text-sm md:text-lg font-bold mx-auto">{str}</p>
      </label>
    </>
  );
}
