import * as React from "react";
import Dropdown from "react-dropdown";
import Arrow from "@mui/icons-material/ExpandMore";
export default function BasicSelect({ setValue, options, label = "label" }) {
  const InputArrow = ({ rotation }) => {
    return (
      <span
        className={`absolute top-[5px] right-[10px] duration-200 ${rotation}`}
      >
        <Arrow fontSize="small" color="disabled" />
      </span>
    );
  };

  return (
    <div className="h-fit flex flex-col col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 items-start">
      <label className="text-[12px] font-[500] mb-1 ">{label}</label>

      <Dropdown
        options={options}
        value={null}
        controlClassName="custom-input"
        menuClassName="custom-menu"
        arrowClosed={<InputArrow rotation="rotate-0" />}
        arrowOpen={<InputArrow rotation={"rotate-180"} />}
        onChange={(e) => setValue(e.value)}
      />
    </div>
  );
}
