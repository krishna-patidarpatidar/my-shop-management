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

const CustomerForm: React.FC<Props> = ({ formikProps }) => {
  const { setEdit } = useOutletContext<{ setEdit: React.Dispatch<React.SetStateAction<boolean>> }>();

  const { values, handleChange, handleBlur, isSubmitting}:any = formikProps;

  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full p-5 max-w-md">
      <span className='right-6  top-3 absolute text-2xl text-red-700 cursor-pointer p-3' onClick={()=>setEdit((false))}>X</span>
        <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Customer Data </h1>
        
       <div className='flex flex-col gap-5'>
         {/* Name Field */}
         <div className="">
          <AtmTextField
           label='Customer Name'
            name="name"
            value={values.name}
            placeholder="Customer Name"
            onChange={handleChange}
            onBlur={handleBlur}
            
          />
         
        </div>
        
        {/* Mobile Number Field */}
        <div className="">
          <AtmTextField
            label='Customer Mobile Number.'
            name="mobile"
            value={values.mobile}
            placeholder="Customer Mobile Number"
            onChange={handleChange}
            onBlur={handleBlur}
          />
         
        </div>
        
        {/* Address Field */}
        <div >
          <AtmTextField
            label='Customer Address'
            name="address"
            value={values.address}
            placeholder="Customer Address"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <AtmButtonField
            label={isSubmitting ? 'Saving...' : 'Save Customer'}
            disabled={isSubmitting}
            className={`w-full py-3 bg-blue-600 text-white rounded-lg transition-all duration-200 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'
            }`}
            type="submit"
            />
        </div>
            </div>
      </div>
    </div>
  );
};

export default CustomerForm;
