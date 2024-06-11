import { useState } from "react";
import Socials from "./socials";

export default function Header({
  toggleDarkMode,
  darkMode,
}: JSX.IntrinsicAttributes & { toggleDarkMode: Function; darkMode: boolean }) {
  const [visible, setVisible] = useState(true);
  let modeCSS = "bg-gray-300";
  if (darkMode) {
    modeCSS = "bg-gray-900";
  }
  return (
    <div className={modeCSS + " w-full pt-12 text-center lg:pl-9"}>
      {/* HEADER */}
      <div className="absolute top-8 right-8 flex flex-col">
        <button
          className={
            (visible ? "line-through" : "") +
            " cursor-pointer text-2xl text-center"
          }
          onClick={() => setVisible(!visible)}
        >
          👁
        </button>
        <button
          className={
            (!darkMode ? "line-through" : "") +
            " cursor-pointer text-2xl text-center"
          }
          onClick={() => {
            toggleDarkMode();
          }}
        >
          💡
        </button>
      </div>
      <h1
        className={
          (!visible ? "hidden" : "visible") +
          " mb-4 text-3xl font-extrabold leading-none tracking-tight lg:text-5xl lg:text-6xl"
        }
      >
        GitHub-safe Animated SVG Generator
      </h1>
      <Socials visible={visible} />
    </div>
  );
}
