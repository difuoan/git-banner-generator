const TextArea = ({
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
      <textarea
        id={label + keyVal}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      ></textarea>
    </div>
  );
};
export default TextArea;
