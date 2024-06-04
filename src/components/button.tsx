import { MouseEventHandler } from "react";

const Button = ({
  onClick,
  label,
  color = "blue",
  colorStrength = 5,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  label: string;
  color?: string;
  colorStrength?: number;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        `bg-` +
        color +
        `-` +
        colorStrength * 100 +
        ` hover:bg-` +
        color +
        `-` +
        (colorStrength * 100 + 200) +
        ` text-white font-bold py-2 px-4 rounded`
      }
    >
      {label}
    </button>
  );
};
export default Button;
