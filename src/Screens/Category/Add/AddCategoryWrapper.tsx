import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup'; // Optional: if you plan to use validation
import { useNavigate, useOutletContext } from 'react-router-dom';
import Toast from '../../../Config/Toast';
import CategoryForm from '../Layout/CategoryForm';
import { useCreateCategoryMutation } from '../../../Service/Category/CategoryApiSlice';

const AddCategoryWrapper: React.FC = () => {
    const navigate = useNavigate()
    const [createCategory] = useCreateCategoryMutation()
    const { setEdit } = useOutletContext<{ setEdit: React.Dispatch<React.SetStateAction<boolean>> }>();

    return (
        <div>
            <Formik
                initialValues={{
                    categoryName: ''
                   
                }}
                validationSchema={Yup.object({
                    categoryName: Yup.string()
                    .required('Category name is required')
                    .min(2, 'Category name must be at least 2 characters'),
                  
                })}
                onSubmit={(values, { setSubmitting }) => {

                    createCategory({ categoryData: values})
                        .then((res:any) => {
                            if (res.data.status) {
                            Toast.successMsg(res.data.msg)
                                navigate('/admin/category')
                                setSubmitting(false);
                            }else{
                                Toast.errorMsg(res.data.msg)
                            }
                        })
                    
                    
                    setEdit(false)
                }}
            >
                {({handleSubmit,...formikProps}) => (
                    <Form onSubmit={handleSubmit}>
                        <CategoryForm formikProps={formikProps} />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddCategoryWrapper;
