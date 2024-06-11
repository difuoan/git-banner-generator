const StringInput = ({
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
      <label htmlFor={label + keyVal} className="block mb-2 font-medium">
        {label}
      </label>
      <input
        type="text"
        id={label + keyVal}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
  );
};
export default StringInput;
