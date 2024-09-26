import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup'; // For validation schema
import { useEditProductsMutation } from '../../../Service/Products/ProductSlice';
import ProductForm from '../layout/ProductForm';
import { useNavigate, useOutletContext, useParams, useSearchParams } from 'react-router-dom';
import Toast from '../../../Config/Toast';

const ProductEditWrapper: React.FC = () => {
  const [editProduct] = useEditProductsMutation();
  const token = localStorage.getItem('auth');
  const { setEdit } = useOutletContext<{ setEdit: React.Dispatch<React.SetStateAction<boolean>> }>();
const navigate=useNavigate()
  const { id } = useParams()
 const [query]=useSearchParams()
  // Initial values for the form
  const initialValues = {
    name: query.get("name"),
    sellingPrice: query.get("sellingPrice"),
    productCode: query.get("productCode"),
    categoryName: query.get("categoryName")
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Product name cannot be empty'),
    sellingPrice: Yup.number().required('Selling cannot be empty'),
    productCode: Yup.string().required('Product code cannot be empty'),
    categoryName: Yup.string().required('Product code cannot be empty')
  });

  // Submit handler
  const handleSubmit = (values: any,{setSubmitting}:any) => {
    console.log(values)
    editProduct({ productData: values, token, id })
      .then((res:any) => {
        if (res.data.status) {
          Toast.successMsg(res.data.msg)
        } else {
          Toast.errorMsg(res.data.msg)

        }
        navigate('/admin/products')
        setSubmitting(false)
        setEdit(false)
      })
      .catch((err)=>{
        Toast.errorMsg(err)
        setSubmitting(false)
        setEdit(false)
      })
  };

  return (
    <div>
      <Formik
      enableReinitialize
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

export default ProductEditWrapper;
