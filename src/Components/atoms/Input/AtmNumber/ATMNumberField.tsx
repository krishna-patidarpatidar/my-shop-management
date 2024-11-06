import { ErrorMessage } from "formik";
import React, { useState } from "react";
import ATMFieldLabel from "../../Field/ATMFieldLabel";

interface Props
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    value: string | number; // Allow both string and number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputSize?: 'sm' | 'md' | 'lg';
    label?: string;
    errorPosition?: 'right-0' | 'left-0'

}

const ATMNumberField: React.FC<Props> = ({
    value,
    onChange,
    label,
    errorPosition = 'right-0',
    inputSize = 'md',
    ...inputProps
}) => {
    // Function to get the size class
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



    // Temporary state to handle valid inputs like e, -, or a valid number
    const [tempValue, setTempValue] = useState<string | number>(value);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // Allow empty value, valid number, or scientific notation (e.g., 1e10)
        if (!isNaN(Number(inputValue)) || inputValue === '' || /^-?\d*\.?\d*e?-?\d*$/.test(inputValue)) {
            setTempValue(inputValue);
            onChange(e);  // Pass the event to the parent handler
        }
    };

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <div>
                    <ATMFieldLabel label={label} />
                </div>
            )}

            <input
                type="number" // Use "text" to allow entering "e" and validate manually
                onChange={handleInputChange}
                value={tempValue}
                className={`flex-1 text-gray-900 ${sizeClasses[inputSize].input} border-2 rounded-md focus:outline-none`}

                {...inputProps}
            />
            {/* Display error message */}
            {inputProps.name && (
                <p
                    className={`text-red-500 absolute ${sizeClasses[inputSize].error} ${errorPosition} bottom-[-20px]`}
                >
                    {inputProps.name && (<ErrorMessage name={inputProps.name} />)}
                </p>
            )}
        </div>
    );
};

export default ATMNumberField;