// favorite

import "./icon-button.css";

interface PropsI {
  icon: string;
  variant?: "full" | "outlined";
}

export default function IconButton({ variant = "full", icon }: PropsI) {
  return (
    <button className="icon-button">
      <span
        className={`material-symbols-${
          variant === "full" ? "sharp" : "outlined"
        }`}
      >
        {icon}
      </span>
    </button>
  );
}
