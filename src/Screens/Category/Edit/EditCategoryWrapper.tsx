import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup'; // Optional: if you plan to use validation
import { useNavigate, useParams, useSearchParams ,useOutletContext} from 'react-router-dom';
import Toast from '../../../Config/Toast';
import CategoryForm from '../Layout/CategoryForm';
import { useCategoryEditMutation } from '../../../Service/Category/CategoryApiSlice';

const EditCategoryWrapper: React.FC = () => {
    const navigate=useNavigate()
    const {id}= useParams()
    const [queryParams] = useSearchParams()
    const name = queryParams.get("categoryName")
    const [editCustomer] = useCategoryEditMutation()
    const { setEdit } = useOutletContext<{ setEdit: React.Dispatch<React.SetStateAction<boolean>> }>();
 
    return (
        <div>
            <Formik
                initialValues={{
                    categoryName: name,
                }}
                validationSchema={Yup.object({
                    categoryName: Yup.string()
                    .required('Category name is required')
                    .min(2, 'Category name must be at least 2 characters')
                })}
                onSubmit={(values, { setSubmitting }) => {
                    const token = localStorage.getItem("auth")

                    editCustomer({ categoryData: values, token,id})
                    .then((res:any)=>{
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
                {({handleSubmit,...formikProps}:any) => (
                    <Form onSubmit={handleSubmit}>
                        <CategoryForm formikProps={formikProps} />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default EditCategoryWrapper;
