import { downloadSvg } from "@/utils/downloadGeneratedSvg";
import SVGComponent from "../components/svg";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(true);
  const playFromStart = () => {
    // removes and then adds the svg which triggers a re-render of the element and thus starts the animations from 0
    setValue(false);
    setTimeout(() => {
      setValue(true);
    }, 0);
  };
  if (value) {
    return (
      <main className={`flex min-h-screen flex-col items-center p-24 gap-8`}>
        <SVGComponent />
        <div className={"flex flex-row gap-8"}>
          <button
            onClick={playFromStart}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          >
            &#10227; Play from start
          </button>
          <button
            onClick={downloadSvg}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          >
            &#128190; Download
          </button>
        </div>
      </main>
    );
  } else {
    return null;
  }
}
