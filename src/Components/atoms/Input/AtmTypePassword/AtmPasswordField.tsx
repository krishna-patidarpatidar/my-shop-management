import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';  // Import icons from react-icons

interface PasswordProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  className: string;
}

const AtmPasswordField: React.FC<PasswordProps> = ({
  value,
  placeholder,
  onChange,
  onBlur,
  name,
  label,
  className,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <label className='text-2xl font-semibold text-slate-700 ' htmlFor={name}>{label}</label>
      <input
        type={showPassword ? 'text' : 'password'}  // Toggle input type
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        className={`border px-4 py-2  text-gray-900 text-xl ${className}`}
      />
      
      {/* Password Toggle Icon */}
      <span
        className="absolute right-3 top-[50px] text-2xl cursor-pointer text-gray-500"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}  {/* Show Eye or EyeSlash icon */}
      </span>
    </div>
  );
};

export default AtmPasswordField;
