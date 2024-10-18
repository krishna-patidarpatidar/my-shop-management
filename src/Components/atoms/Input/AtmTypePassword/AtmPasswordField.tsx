import { FaEye, FaEyeSlash } from 'react-icons/fa';  // Import icons from react-icons
import React, { useState } from 'react';
import { ErrorMessage } from 'formik';
import ATMFieldLabel from '../../Field/ATMFieldLabel';

// Avoid the conflict by omitting the 'size' prop from the inherited attributes
interface PasswordProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  errorPosition?: 'right-0' | 'left-0'
  inputSize?: 'sm' | 'md' | 'lg'; // Renamed size prop
}

const sizeClasses = {
  sm: {
    input: 'text-sm px-2 py-1',
    label: 'text-sm',
    error: 'text-xs',
  },
  md: {
    input: 'text-base px-3 py-2',
    label: 'text-base',
    error: 'text-sm',
  },
  lg: {
    input: 'text-lg px-4 py-3',
    label: 'text-lg',
    error: 'text-base',
  },
};

const AtmPasswordField: React.FC<PasswordProps> = ({
  value,
  onChange,
  label,
  errorPosition = 'right-0',
  inputSize = 'md',
  ...inputProps // Spread other optional input props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="space-y-2 relative">
      {label && (
        <div className={sizeClasses[inputSize].label}>
          <ATMFieldLabel label={label} />
        </div>
      )}

      <div className={`border-2 pl-1 rounded-md flex items-center`}>
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          className={`flex-1 text-slate-700 ${sizeClasses[inputSize].input} border-none focus:outline-none`}
          {...inputProps} // Spread other optional input props
        />
        <button
          type="button"
          className="text-xl text-gray-500 focus:outline-none"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>

        {inputProps.name && (
        <p
        className={`text-red-500 absolute ${sizeClasses[inputSize].error}  ${errorPosition} bottom-[-20px]`}
      >
       { inputProps.name && ( <ErrorMessage name={inputProps.name} />)}
      </p>
    )}
    </div>
  );
};

export default AtmPasswordField;
