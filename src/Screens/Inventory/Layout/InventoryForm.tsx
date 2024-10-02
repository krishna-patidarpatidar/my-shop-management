import React from 'react';
import AtmTextField from '../../../Components/atoms/Input/AtmTypeText/AtmTextField';
import AtmButtonField from '../../../Components/atoms/Button/AtmButtonField';

type InventoryFormProps = {
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleBlur: (e: React.FocusEvent<any>) => void;
    values: {
        name: string;
        quantity: string;
        price: string;
    };
    errors: {
        name?: string;
        quantity?: string;
        price?: string;
    };
    touched: {
        name?: boolean;
        quantity?: boolean;
        price?: boolean;
    };
    isSubmitting: boolean;
};

const InventoryForm: React.FC<InventoryFormProps> = ({ handleBlur, values, handleChange, errors, touched, isSubmitting }) => {
    return (
        <div>
            <div className="mb-4">
                <AtmTextField
                    name="name"
                    label="Product Name"
                    value={values.name}  
                    placeholder="Product Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                    <div className="text-red-500 text-sm">{errors.name}</div>
                )}
            </div>

            <div className="mb-4">
                <AtmTextField
                    name="quantity"
                    label="Quantity"
                    value={values.quantity}  
                    placeholder="Quantity"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.quantity && touched.quantity && (
                    <div className="text-red-500 text-sm">{errors.quantity}</div>
                )}
            </div>

            <div className="mb-4">
                <AtmTextField
                    name="price"
                    label="Price"
                    value={values.price}  
                    placeholder="Price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.price && touched.price && (
                    <div className="text-red-500 text-sm">{errors.price}</div>
                )}
            </div>
            <div>
                <AtmButtonField
                label='Save'
                />
            </div>

            {/* Optionally show a submitting indicator */}
            {isSubmitting && <p>Submitting...</p>}
        </div>
    );
};

export default InventoryForm;
