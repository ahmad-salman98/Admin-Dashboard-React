import { useContext } from "react";
import Context from "../context";

const FilterByDate = ({ value, setValue, label }) => {
  const { Va } = useContext(Context);
  return (
    <div className="flex flex-col col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 ">
      <label className="text-[12px] font-[500] mb-1 " htmlFor={label}>
        {label}
      </label>
      <input
        value={value}
        type="text"
        id={label}
        placeholder="Select Date"
        className="custom-input cursor-pointer"
        onChange={(e) => setValue(e.target.value)}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
      />
    </div>
  );
};

export default FilterByDate;
