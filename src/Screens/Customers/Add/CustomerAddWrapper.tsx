import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup'; // Optional: if you plan to use validation
import { useCreateCustomerMutation } from '../../../Service/CustomerApi/CustomerSlice';
import CustomerForm from '../Layout/CustomerForm';
import { useNavigate, useOutletContext } from 'react-router-dom';

const CustomerAddWrapper: React.FC = () => {
    const navigate=useNavigate()
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
                    name: Yup.string().required('Customer name is required'),
                    mobile: Yup.string().required('Mobile number is required').min(10,'mobile no is 10 digit is required'),
                    address: Yup.string().required('Address is required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    const token = localStorage.getItem("auth")
                    console.log(values); // Handle the form submission

                    createCustomer({ customerData: values, token })
                    .then((res)=>{
                        console.log(res)
                    })
                    setSubmitting(false);
                    navigate('/customer')
                    setEdit(false)
                }}
            >
                {formikProps => (
                    <Form>
                        <CustomerForm formikProps={formikProps} />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CustomerAddWrapper;
