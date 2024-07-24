import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  positionTo: string;
  isDisabled?: boolean;
  onCLickHandler?: () => void;
}

export default function Button({
  children,
  positionTo,
  isDisabled,
  onCLickHandler,
}: ButtonProps) {
  const baseClasses =
    "flex items-center gap-2 bg-slate-200/70 absolute left-1/2 -translate-x-1/2 px-4 py-1 rounded-full shadow-md uppercase text-sm";

  return (
    <button
      className={`${baseClasses} ${positionTo}`}
      onClick={onCLickHandler}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
