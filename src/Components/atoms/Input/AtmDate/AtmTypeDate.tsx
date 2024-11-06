import { ErrorMessage } from "formik";
import ATMFieldLabel from "../../Field/ATMFieldLabel";
import React from "react";

// Define a type extending HTML input attributes, omitting specific ones.
interface DateComponentProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value: string; // Required
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Required
  label?: string; // Optional label
  inputSize?: 'sm' | 'md' | 'lg'; // Optional size prop
  name: string; // Required for Formik's ErrorMessage
  errorPosition?: 'right-0' | 'left-0'; // Optional error message position
}

const ATMDateField: React.FC<DateComponentProps> = ({
  value,
  onChange,
  inputSize = 'md', // Default input size
  label = '',
  name,
  errorPosition = 'right-0', // Default error position
  ...inputProps
}) => {

  // Size classes based on inputSize prop
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

  return (
    <div className="flex flex-col gap-2 relative">
      {/* Render the label if provided */}
      {label && <ATMFieldLabel label={label} />}

      {/* Date Input */}
      <div>
        <input
          type="date"
          value={value}
          onChange={onChange}
          name={name}
          className={`flex-1 text-slate-700 ${sizeClasses[inputSize].input} border-2 rounded-md focus:outline-none`}
          {...inputProps} // Spread additional HTML attributes
        />
      </div>

      {/* Formik Error Message */}
      <ErrorMessage name={name}>
        {(msg) => (
          <p
            className={`text-red-500 absolute ${sizeClasses[inputSize].error} ${errorPosition} bottom-[-20px]`}
          >
            {msg}
          </p>
        )}
      </ErrorMessage>
    </div>
  );
};

export default ATMDateField;
