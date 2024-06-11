import Github from "./icons/github";
import Linkedin from "./icons/linkedin";
import Twitter from "./icons/twitter";

export default function Socials({ visible }: { visible: boolean }) {
  return (
    <div
      className={
        (!visible ? "hidden" : "visible") +
        " flex flex-row justify-center gap-4"
      }
    >
      <a
        href="https://github.com/difuoan"
        className="font-medium hover:underline"
        target="_blank"
      >
        <Github />
      </a>
      <a
        href="http://www.linkedin.com/in/lucas-venturini-73a392206"
        className="font-medium hover:underline"
        target="_blank"
      >
        <Linkedin />
      </a>
      <a
        href="https://www.x.com/LJVenturini"
        className="font-medium hover:underline"
        target="_blank"
      >
        <Twitter />
      </a>
    </div>
  );
}
