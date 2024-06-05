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
      <label
        htmlFor={label + keyVal}
        className="block mb-2 font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={label + keyVal}
        value={value ?? "none"}
        onChange={(event) => onChange(event.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {optionsHtml}
      </select>
    </div>
  );
};
export default Select;
