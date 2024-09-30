import React from 'react';
import AtmTextField from '../../../Components/atoms/Input/AtmTypeText/AtmTextField';
import AtmButtonField from '../../../Components/atoms/Button/AtmButtonField';
import { useOutletContext } from 'react-router-dom';
import { useGetCategoryQuery } from '../../../Service/Category/CategoryApiSlice';

type FormikProps = {
  values: {
    name: string;
    sellingPrice: string;
    productCode: string;
    categoryId: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
  touched: any;
  errors: any;
};

type Props = {
  formikProps: FormikProps;
};

const ProductForm: React.FC<Props> = ({ formikProps }) => {
  const token = localStorage.getItem('auth');

  const { setEdit } = useOutletContext<{ setEdit: React.Dispatch<React.SetStateAction<boolean>> }>();
  const { data,isLoading } = useGetCategoryQuery({ token })


  const { values, handleChange, handleBlur, isSubmitting, touched, errors } = formikProps;
  return (
    <div className="flex items-center  justify-center">
      <div className="bg-white shadow-lg rounded-lg sm:w-[600px] w-full px-5 max-w-md">
        <span
          className="right-6 top-3 absolute text-2xl text-red-700 cursor-pointer p-3"
          onClick={() => setEdit(false)}
        >
          X
        </span>
        <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Product Data</h1>

        {/* Product Name */}
        <div className="md:mb-6 sm:mb-4">
          <AtmTextField
            label="Product Name"
            name="name"
            value={values.name}
            placeholder="Product Name"
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
          {touched.name && errors.name && (
            <div className="text-red-600 absolute text-sm">{errors.name}</div>
          )}
        </div>

        {/* Selling Price */}
        <div className="md:mb-6 sm:mb-4">
          <AtmTextField
            label="Selling Price"
            name="sellingPrice"
            value={values.sellingPrice}
            placeholder="Product Selling Price"
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
          {touched.sellingPrice && errors.sellingPrice && (
            <div className="text-red-600 absolute text-sm">{errors.sellingPrice}</div>
          )}
        </div>

        {/* Product Code */}
        <div className="md:mb-6 sm:mb-4">
          <AtmTextField
            label="Product Code"
            name="productCode"
            value={values.productCode}
            placeholder="Product Code"
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
          {touched.productCode && errors.productCode && (
            <div className="text-red-600 absolute text-sm">{errors.productCode}</div>
          )}
        </div>
        <div className="md:mb-6 sm:mb-4">
          {isLoading ? (
            <div>Loading categories...</div>
          ) : (
            <select
              name="categoryId"
              value={values.categoryId}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              <option value="">Select a category</option>
              {data?.data.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          )}
          {touched.categoryId && errors.categoryId && (
            <div className="text-red-600 absolute text-sm">{errors.categoryId}</div>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <AtmButtonField
            label={isSubmitting ? 'Saving...' : 'Save Product'}
            disabled={isSubmitting}
            className={`w-full py-3 bg-blue-600 text-white rounded-lg transition-all duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'
              }`}
            type="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
