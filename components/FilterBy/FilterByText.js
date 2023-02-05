const FilterByField = ({ setValue, label, placeholder = null, }) => {
  return (
    <div className="flex flex-col col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 ">
      <label className="text-[12px] font-[500] mb-1 " htmlFor="userName">
        {label}
      </label>
      <input
        type='text'
        id="userName"
        placeholder={placeholder}
        className="custom-input"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default FilterByField;
