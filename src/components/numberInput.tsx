const NumberInput = ({
  onChange,
  value,
  label,
  min,
  max,
}: {
  onChange: Function;
  value: number;
  label: string;
  min: number;
  max: number;
}) => {
  return (
    <div className={"flex flex-row gap-8 items-center"}>
      <label
        htmlFor={label}
        className="block mb-2 font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <input
        type="number"
        id={label}
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="appearance-none block w-full bg-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
      />
    </div>
  );
};
export default NumberInput;
