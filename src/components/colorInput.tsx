const ColorInput = ({
  onChange,
  value,
  label,
  keyVal,
}: {
  onChange: Function;
  value: string;
  label: string;
  keyVal: string | number;
}) => {
  return (
    <div className={"flex flex-row gap-8 items-center"}>
      <label
        htmlFor={label + keyVal}
        className="block mb-2 font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type="color"
        id={label + keyVal}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        style={{ height: "42px" }}
      />
    </div>
  );
};
export default ColorInput;
