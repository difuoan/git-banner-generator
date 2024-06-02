const TextArea = ({
  onChange,
  value,
  label,
}: {
  onChange: Function;
  value: string;
  label: string;
}) => {
  return (
    <div className={"flex flex-row gap-8 items-center"}>
      <label
        htmlFor={label}
        className="block mb-2 font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <textarea
        id={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></textarea>
    </div>
  );
};
export default TextArea;
