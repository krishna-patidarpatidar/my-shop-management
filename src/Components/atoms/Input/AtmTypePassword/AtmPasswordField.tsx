import React from 'react';

interface passwordProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  label:string
  name:string
  className:string
}

const AtmPasswordField: React.FC<passwordProps> = ({
  value,
  placeholder,
  onChange,
  onBlur,
  name,
  label,
  className,
}) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>{label}</label>
      <input
        type="password"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        // className="border px-3 py-1 text-gray-900 text-xl"
        className={`border px-3 py-1 text-gray-900 text-xl ${className}`}

      />
    </div>
  );
};

export default AtmPasswordField;
