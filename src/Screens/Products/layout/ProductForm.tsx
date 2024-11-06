import React, { useEffect, useState } from 'react';
import AtmTextField from '../../../Components/atoms/Input/AtmTypeText/AtmTextField';
import AtmButtonField from '../../../Components/atoms/Button/AtmButtonField';
import { useOutletContext } from 'react-router-dom';
import { useGetCategoryQuery } from '../../../Service/Category/CategoryApiSlice';
import SearchableSelectField from '../../../Components/atoms/Select/ATMSelectField';
import { FormikProps } from 'formik';

// Define form values interface for typing props
interface ProductFormValues {
  name: string;
  sellingPrice: string;
  productCode: string;
  categoryId: string;
}

interface Props {
  formikProps: FormikProps<ProductFormValues>;
}

const ProductForm: React.FC<Props> = ({ formikProps }) => {
 const {
    values,
    handleChange,
    handleBlur,
    isSubmitting,
    setFieldValue
  
  } = formikProps;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (selectedOption: any) => {
    setSelectedCategory(selectedOption);
    setFieldValue('categoryId', selectedOption?._id);
    setFieldValue('categoryName', selectedOption?.name);
   
  };
  const [categories,setCategorys]=useState([])
  const { setEdit } = useOutletContext<{ setEdit: React.Dispatch<React.SetStateAction<boolean>> }>();
  const token = localStorage.getItem('auth') || '';
  const { data, isLoading } = useGetCategoryQuery({ token });
  
  useEffect(()=>{
    setCategorys(data?.data)
  },[data])
 

  return (
    <div className="flex items-center justify-center">
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
          />
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
          />
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
          />
        </div>

        {/* Category Select */}
        <div className="md:mb-6 sm:mb-4">
          {isLoading ? (
            <div>Loading categories...</div>
          ) : (
            <SearchableSelectField
            label='Select Category'
              name="categoryId"
              value={selectedCategory}
              options={categories}
              getOptionLabel={(option: any) => option.categoryName}
              getOptionValue={(option: any) => option._id}
              onChange={handleCategoryChange}
              onBlur={handleBlur}
            />
          
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <AtmButtonField
            label={isSubmitting ? 'Saving...' : 'Save Product'}
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

export default ProductForm;
