import React from 'react';
import AtmTextField from '../../../Components/atoms/Input/AtmTypeText/AtmTextField';
import AtmButtonField from '../../../Components/atoms/Button/AtmButtonField';

type FormikProps = {
  values: {
    name: string;
    mobile: string;
    address: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
};

type Props = {
  formikProps: FormikProps;
};

const VenderForm: React.FC<Props> = ({ formikProps }) => {
  const { values, handleChange, handleBlur, isSubmitting } = formikProps;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100 bg-transparent">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">vender Data</h1>
        
        {/* Name Field */}
        <div className="mb-4">
          <AtmTextField
           label='vender name'
            name="name"
            value={values.name}
            placeholder="vender Name"
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
        </div>
        
        {/* Mobile Number Field */}
        <div className="mb-4">
          <AtmTextField
            label='vender mobile no.'
            name="mobile"
            value={values.mobile}
            placeholder="vender Mobile Number"
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
        </div>
        
        {/* Address Field */}
        <div className="mb-6">
          <AtmTextField
            label='vender address'
            name="address"
            value={values.address}
            placeholder="vender Address"
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <AtmButtonField
            label={isSubmitting ? 'Saving...' : 'Save vender'}
            disabled={isSubmitting}
            className={`w-full py-3 bg-blue-600 text-white rounded-lg transition-all duration-200 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'
            }`}
            type="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default VenderForm;
