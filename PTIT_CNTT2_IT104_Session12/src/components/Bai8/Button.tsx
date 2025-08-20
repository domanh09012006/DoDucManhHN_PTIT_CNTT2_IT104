interface ButtonProps {
  label: string;
  color?: string;
}
const Button = ({ label, color = "#ccc" }: ButtonProps) => {
  return (
    <button
      style={{
        padding: "5px 12px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        background: color,
        color: color === "red" ? "white" : "black",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};
export default Button;
