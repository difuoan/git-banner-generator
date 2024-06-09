import Github from "./icons/github";
import Linkedin from "./icons/linkedin";
import Twitter from "./icons/twitter";

export default function Socials() {
  return (
    <div className="flex flex-row justify-center gap-4">
      <a
        href="https://github.com/difuoan"
        className="font-medium text-blue-600 hover:underline"
        target="_blank"
      >
        <Github />
      </a>
      <a
        href="http://www.linkedin.com/in/lucas-venturini-73a392206"
        className="font-medium text-blue-600 hover:underline"
        target="_blank"
      >
        <Linkedin />
      </a>
      <a
        href="https://www.x.com/LJVenturini"
        className="font-medium text-blue-600 hover:underline"
        target="_blank"
      >
        <Twitter />
      </a>
    </div>
  );
}