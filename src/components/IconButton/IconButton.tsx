// favorite

import React from "react";
import "./icon-button.css";

interface PropsI {
  icon: string;
  variant?: "full" | "outlined";
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function IconButton({
  variant = "full",
  icon,
  onClick,
  style,
}: PropsI) {
  return (
    <button className="icon-button" onClick={onClick}>
      <span
        className={`material-symbols-${
          variant === "full" ? "sharp" : "outlined"
        }`}
        style={{ ...style }}
      >
        {icon}
      </span>
    </button>
  );
}
