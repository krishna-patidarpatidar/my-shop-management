import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup'; // For validation schema
import { useAddProductsMutation } from '../../../Service/Products/ProductSlice';
import ProductForm from '../layout/ProductForm';
import Toast from '../../../Config/Toast';
import { useNavigate, useOutletContext } from 'react-router-dom';

const ProductAddWrapper: React.FC = () => {
  const [addProduct] = useAddProductsMutation();
  const { setEdit } = useOutletContext<{ setEdit: React.Dispatch<React.SetStateAction<boolean>> }>();

const navigate=useNavigate()
  // Initial values for the form
  const initialValues = {
    name: '',
    sellingPrice: '',
    productCode: '',
    categoryId: ''
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Product name is required'),
    sellingPrice: Yup.number().required('Selling price is required'),
    productCode: Yup.string().required('Product code is required'),
    categoryId: Yup.string().required('category id  is required'),
  });

  const handleSubmit = (values: any,{setSubmitting}:any) => {
      addProduct({  productData: values})
    .then((res:any)=>{
      if (res.data.status) {
        Toast.successMsg(res.data.msg)

      } else {
        Toast.errorMsg(res.data.msg)
      }
      setSubmitting(false)
      navigate('/admin/products')
      setEdit(false)
    })
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, ...formikProps }:any) => (
          <Form onSubmit={handleSubmit}>
            <ProductForm formikProps={formikProps} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductAddWrapper;
