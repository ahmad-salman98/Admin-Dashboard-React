import * as React from "react";
import Dropdown from "react-dropdown";
import Arrow from "@mui/icons-material/ExpandMore";
export default function BasicSelect({
  value,
  setValue,
  options,
  label = "label",
}) {
  const InputArrow = ({ rotation }) => {
    return (
      <span
        className={`absolute top-[5px] right-[10px] duration-200 ${rotation}`}
      >
        <Arrow fontSize="small" color="disabled" />
      </span>
    );
  };
  const editedOptions = options.map((option) => {
    return option.charAt(0) + option.toLowerCase().replace(/_/g, " ").slice(1);
  });
  return (
    <div className="h-fit flex flex-col col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 items-start">
      <label className="text-[12px] font-[500] mb-1 ">{label}</label>

      <Dropdown
        options={editedOptions}
        value={
          value
            ? value.charAt(0) + value.toLowerCase().replace(/_/g, " ").slice(1)
            : null
        }
        controlClassName="custom-input"
        menuClassName="custom-menu "
        arrowClosed={<InputArrow rotation="rotate-0" />}
        arrowOpen={
          <>
            <div className="absolute -top-28 -left-96 w-screen h-screen rotate-180  "></div>
            <InputArrow rotation={"rotate-180"} />
          </>
        }
        onChange={(e) => {
          setValue(e.value.toString().toUpperCase().replace(/ /g, "_"));
        }}
      />
    </div>
  );
}
