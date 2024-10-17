import React from 'react';

interface InputProps {
  value?: any;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  label?: string;
  name: string; 
  readOnly?:boolean;
  className:string
  type?:string
}

const AtmTextField: React.FC<InputProps> = ({
  value,
  placeholder,
  onChange,
  onBlur,
  readOnly,
  label,
  type='text',
  name,
  className,
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-2xl font-semibold text-slate-700' htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        name={name} 
        readOnly={readOnly}
        className={`border px-4 py-2  text-gray-900 text-xl ${className}`}
      />
    </div>
  );
};

export default AtmTextField;
