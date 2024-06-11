import { ChangeEvent, InputHTMLAttributes } from "react";

const FileInput = ({
  onFileUpload,
  keyVal,
}: Partial<JSX.IntrinsicAttributes & InputHTMLAttributes<HTMLInputElement>> & {
  onFileUpload: Function;
  keyVal: string | number;
}) => {
  const getBase64 = (file: Blob) => {
    if (!file) return;
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      onFileUpload(reader.result?.toString() ?? "");
    };
  };

  const onFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    getBase64(file);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor={"file-input" + keyVal}
        className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
      >
        <div className="flex flex-row items-center pt-5 pb-6 gap-4 content-center">
          <svg
            className="w-8 h-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <div>
            <p className="mb-2 text-sm font-semibold">Click to upload</p>
            <p className="text-xs">SVG, PNG, JPG or GIF</p>
          </div>
        </div>
        <input
          id={"file-input" + keyVal}
          type="file"
          className="hidden"
          onChange={onFileInput}
          accept="image/*"
        />
      </label>
    </div>
  );
};
export default FileInput;
