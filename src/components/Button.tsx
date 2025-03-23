import React from "react";
import "../styles/Button.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "primary" }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};
