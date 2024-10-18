import React from 'react';
import ATMFieldLabel from '../../Field/ATMFieldLabel';
import { ErrorMessage } from 'formik';

// Interface for ATMTextField
interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  inputSize?: 'sm' | 'md' | 'lg';
  errorPosition?: 'right-0'|'left-0'
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

const ATMTextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  label,
  errorPosition='right-0',
  inputSize = 'md',
  ...inputProps
}) => (
  <div className="flex flex-col gap-2 relative">
    {label && (
        <div className={sizeClasses[inputSize].label}>
          <ATMFieldLabel label={label} />
        </div>
      )}
    <input
      value={value}
      onChange={onChange}
      className={`flex-1 text-slate-700 ${sizeClasses[inputSize].input} border-2 rounded-md focus:outline-none`}

      {...inputProps}
    />
     {inputProps.name && (
       <p
         className={`text-red-500 absolute ${sizeClasses[inputSize].error} ${errorPosition} bottom-[-20px]`}
        >
        { inputProps.name && ( <ErrorMessage name={inputProps.name} />)}
       </p>
      )}
  </div>
);

export default ATMTextField;
