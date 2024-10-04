import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup'; // Optional: if you plan to use validation
import { useNavigate, useParams, useOutletContext } from 'react-router-dom';
import Toast from '../../../Config/Toast';
import CategoryForm from '../Layout/CategoryForm';
import { useCategoryEditMutation, useGetSingleCategoryQuery } from '../../../Service/Category/CategoryApiSlice';

const EditCategoryWrapper: React.FC = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const [editCategory] = useCategoryEditMutation()
    const { data } = useGetSingleCategoryQuery({  id })
    const { setEdit } = useOutletContext<{ setEdit: React.Dispatch<React.SetStateAction<boolean>> }>();
    return (
        <div>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    categoryName: data?.data?.categoryName || '',
                }}
                validationSchema={Yup.object({
                    categoryName: Yup.string()
                        .required('Category name is required')
                        .min(2, 'Category name must be at least 2 characters')
                })}
                onSubmit={(values, { setSubmitting }) => {

                    editCategory({ categoryData: values, id })
                        .then((res: any) => {
                            if (res.data.status) {
                                Toast.successMsg(res.data.msg)

                            } else {
                                Toast.errorMsg(res.data.msg)
                            }
                        })
                    setSubmitting(false);
                    navigate('/admin/category')
                    setEdit(false)

                }}
            >
                {({ handleSubmit, ...formikProps }: any) => (
                    <Form onSubmit={handleSubmit}>
                        <CategoryForm formikProps={formikProps} />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default EditCategoryWrapper;
