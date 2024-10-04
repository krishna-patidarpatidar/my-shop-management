import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup'; // For validation schema
import { useEditProductsMutation, useGetSingleProductsQuery } from '../../../Service/Products/ProductSlice';
import ProductForm from '../layout/ProductForm';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import Toast from '../../../Config/Toast';

const ProductEditWrapper: React.FC = () => {
  const [editProduct] = useEditProductsMutation();
  const { id } = useParams()
  const { data } = useGetSingleProductsQuery({ id })
  const { setEdit } = useOutletContext<{ setEdit: React.Dispatch<React.SetStateAction<boolean>> }>();

  console.log(data)
  const navigate = useNavigate()
  // Initial values for the form
  const initialValues = {
    name: data?.data?.name,
    sellingPrice: data?.data?.sellingPrice,
    productCode: data?.data?.productCode,
    categoryId: data?.data?.categoryId
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Product name cannot be empty'),
    sellingPrice: Yup.number().required('Selling cannot be empty'),
    productCode: Yup.string().required('Product code cannot be empty'),
    categoryId: Yup.string().required('category id cannot be empty')
  });

  // Submit handler
  const handleSubmit = (values: any, { setSubmitting }: any) => {
    editProduct({ productData: values, id })
      .then((res: any) => {
        if (res.data.status) {
          Toast.successMsg(res.data.msg)
        } else {
          Toast.errorMsg(res.data.msg)

        }
        navigate('/admin/products')
        setSubmitting(false)
        setEdit(false)
      })
      .catch((err) => {
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
        {({ handleSubmit, ...formikProps }: any) => (
          <Form onSubmit={handleSubmit}>
            <ProductForm formikProps={formikProps} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductEditWrapper;
