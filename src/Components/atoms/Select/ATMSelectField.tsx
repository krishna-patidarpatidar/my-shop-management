// SearchableSelectField.tsx
import { ErrorMessage } from 'formik';
import React from 'react';
import Select, { ActionMeta, SingleValue, MultiValue, Props as SelectProps } from 'react-select';
import ATMFieldLabel from '../Field/ATMFieldLabel';

// Option interface
interface Option {
    value?: string | number;
    label?: string;
}

// Extending and Omitting Conflicting Props
interface SearchableSelectFieldProps
    extends Omit<SelectProps<Option>, 'value' | 'onChange' | 'getOptionLabel' | 'getOptionValue'> {
    value: SingleValue<Option> | MultiValue<Option>;
    onChange: (
        newValue: SingleValue<Option> | MultiValue<Option>,
        actionMeta: ActionMeta<Option>
    ) => void;
    getOptionLabel: (option: Option) => string;
    getOptionValue: (option: Option) => string;
    label?: string;
    errorPosition?: 'right-0' | 'left-0'

    inputSize?: 'sm' | 'md' | 'lg';
}

// Size-specific class mappings
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

const SearchableSelectField: React.FC<SearchableSelectFieldProps> = ({
    options,
    onChange,
    getOptionLabel,
    getOptionValue,
    value,
    label,
    errorPosition = 'right-0',

    inputSize = 'md',
    ...selectProps // Other props passed to React-Select
}) => (
    <div className={`flex flex-col gap-2 relative`}>
        {label && (
            <div className={sizeClasses[inputSize].label}>
                <ATMFieldLabel label={label} />
            </div>
        )}
        <Select
            className={`flex-1 text-slate-700 ${sizeClasses[inputSize].input}   rounded-md focus:outline-none`}

            options={options}
            getOptionLabel={getOptionLabel}
            getOptionValue={getOptionValue}
            onChange={onChange}
            value={value}
            {...selectProps} // Spread additional props dynamically
        />
        {selectProps.name && (
            <p
                className={`text-red-500 absolute ${sizeClasses[inputSize].error} ${errorPosition} bottom-[-20px]`}
            >
                {selectProps.name && (<ErrorMessage name={selectProps.name} />)}
            </p>
        )}
    </div>
);

export default SearchableSelectField;
