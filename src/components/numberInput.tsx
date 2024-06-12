const NumberInput = ({
  onChange,
  value,
  label,
  min,
  max,
  keyVal,
  className,
}: {
  onChange: Function;
  value: number;
  label: string;
  min: number;
  max: number;
  keyVal: string | number;
  className?: string;
}) => {
  return (
    <div className={"flex flex-row gap-8 items-center " + className}>
      <label htmlFor={label + keyVal} className="block mb-2 font-medium">
        {label}
      </label>
      <input
        type="range"
        min={min}
        step={1}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="grow"
      />
      <input
        type="number"
        id={label + keyVal}
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      />
    </div>
  );
};
export default NumberInput;
