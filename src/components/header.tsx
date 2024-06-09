import { useState } from "react";
import Socials from "./socials";

export default function Header() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="bg-gray-300 w-full pt-12 text-center lg:pl-9">
      {/* HEADER */}
      <span
        className="absolute right-8 top-8 cursor-pointer"
        onClick={() => setVisible(!visible)}
      >
        👁
      </span>
      <h1
        className={
          (!visible ? "hidden" : "visible") +
          " mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 lg:text-5xl lg:text-6xl"
        }
      >
        GitHub-safe Animated SVG Generator
      </h1>
      <Socials visible={visible} />
    </div>
  );
}
