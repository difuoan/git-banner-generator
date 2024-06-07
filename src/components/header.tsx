import Socials from "./socials";

export default function Header() {
  return (
    <div className="bg-gray-300 w-full pt-12 text-center">
      {/* HEADER */}
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 lg:text-5xl lg:text-6xl">
        GitHub-safe Animated SVG Generator
      </h1>
      <Socials />
    </div>
  );
}
