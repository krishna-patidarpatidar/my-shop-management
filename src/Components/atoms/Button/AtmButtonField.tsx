
interface AtmButtonProps {
    label: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
  }
  
  const AtmButtonField: React.FC<AtmButtonProps> = ({
    label,
    onClick,
    type = "button",
    disabled = false,
    className = "",
  }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={` bg-blue-500 text-white rounded hover:bg-blue-600 ${className} ${
          disabled ? "bg-blue-300 cursor-not-allowed" : ""
        }`}
      >
        {label}
      </button>
    );
  };
  
  export default AtmButtonField;
  
  