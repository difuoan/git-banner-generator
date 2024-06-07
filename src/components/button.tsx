import { ButtonHTMLAttributes, MouseEventHandler } from "react";

const Button = ({
  onClick,
  label,
  color = "blue",
  disabled,
  colorStrength = 5,
  className,
}: Partial<
  JSX.IntrinsicAttributes & ButtonHTMLAttributes<HTMLButtonElement>
> & {
  onClick: MouseEventHandler<HTMLButtonElement>;
  label: string;
  color?: string;
  colorStrength?: number;
}) => {
  const classesToUse = disabled
    ? `bg-${color}-${
        colorStrength * 100 - 200
      } cursor-not-allowed text-white font-bold py-2 px-4 rounded`
    : `bg-${color}-${colorStrength * 100} hover:bg-${color}-${
        colorStrength * 100 + 200
      } text-white font-bold py-2 px-4 rounded`;
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick}
      className={classesToUse + " " + className}
    >
      {label}
    </button>
  );
};
export default Button;
