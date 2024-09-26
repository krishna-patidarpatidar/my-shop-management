import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup'; // Optional: if you plan to use validation
import { useCreateCustomerMutation } from '../../../Service/CustomerApi/CustomerSlice';
import CustomerForm from '../Layout/CustomerForm';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Toast from '../../../Config/Toast';

const CustomerAddWrapper: React.FC = () => {
    const navigate = useNavigate()
    const [createCustomer] = useCreateCustomerMutation()
    const { setEdit } = useOutletContext<{ setEdit: React.Dispatch<React.SetStateAction<boolean>> }>();

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    mobile: '',
                    address: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                    .required('Customer name is required')
                    .min(2, 'Customer name must be at least 2 characters'),
                  
                    mobile: Yup.string()
                    .required('Mobile number is required')
                    // .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
                    .length(10, 'Mobile number must be exactly 10 digits'),
                  
                  address: Yup.string()
                    .required('Address is required')
                    .min(3,"must be a 3 letter " )
                })}
                onSubmit={(values, { setSubmitting }) => {
                    const token = localStorage.getItem("auth")
                    console.log(values); // Handle the form submission

                    createCustomer({ customerData: values, token })
                        .then((res:any) => {
                            console.log(res.data.status)
                            if (res.data.status) {
                            Toast.successMsg(res.data.msg)
                                navigate('/admin/customer')
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
                        <CustomerForm formikProps={formikProps} />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CustomerAddWrapper;
