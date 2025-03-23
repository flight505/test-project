interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "primary", isLoading = false }) => {
  return (
    <button className={`button ${variant} ${isLoading ? "loading" : ""}`} onClick={onClick} disabled={isLoading}>
      {isLoading ? "Loading..." : text}
    </button>
  );
};
