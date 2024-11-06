import React from 'react';
import AtmTextField from '../../../Components/atoms/Input/AtmTypeText/AtmTextField';
import AtmButtonField from '../../../Components/atoms/Button/AtmButtonField';
import { useOutletContext } from 'react-router-dom';

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
  const { setEdit } = useOutletContext<{ setEdit: React.Dispatch<React.SetStateAction<boolean>> }>();

  const { values, handleChange, handleBlur, isSubmitting }:any = formikProps;

  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full p-5 max-w-md">
      <span className='right-6 top-3 absolute text-2xl text-red-700 cursor-pointer p-3' onClick={()=>setEdit((false))}>X</span>
        <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Vender Data </h1>
        
        {/* Name Field */}
        <div className="mb-4">
          <AtmTextField
           label='vender Name'
            name="name"
            value={values.name}
            placeholder="Vender Name"
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
         
        </div>
        
        {/* Mobile Number Field */}
        <div className="mb-4">
          <AtmTextField
            label='Vender Mobile Number.'
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
            label='Vender Address'
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
            label={isSubmitting ? 'Saving...' : 'Save Vender'}
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
