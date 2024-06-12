const Select = ({
  onChange,
  value,
  label,
  options,
  keyVal,
}: {
  onChange: Function;
  value?: string;
  label: string;
  options: string[];
  keyVal: string | number;
}) => {
  const optionsHtml = options.map((option: string, index: number) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));
  return (
    <div className={"flex flex-row gap-8 items-center"}>
      <label htmlFor={label + keyVal} className="block mb-2 font-medium">
        {label}
      </label>
      <select
        id={label + keyVal}
        value={value ?? "none"}
        onChange={(event) => onChange(event.target.value)}
        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block grow p-2.5"
      >
        {optionsHtml}
      </select>
    </div>
  );
};
export default Select;
