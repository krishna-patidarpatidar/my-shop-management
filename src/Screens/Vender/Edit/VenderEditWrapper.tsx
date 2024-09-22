import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup'; // Optional: if you plan to use validation
import { useCustomerEditMutation } from '../../../Service/CustomerApi/CustomerSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import VenderForm from '../Layout/VenderForm';

const VenderEditWrapper: React.FC = () => {
    const {id}= useParams()
    const [queryParams] = useSearchParams()
    const name = queryParams.get("name")
    const mobile = queryParams.get("mobile")
    const address = queryParams.get("address")
    const [editCustomer] = useCustomerEditMutation()

    return (
        <div>
            <Formik
                initialValues={{
                    name: name,
                    mobile: mobile,
                    address: address
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Customer name is required'),
                    mobile: Yup.string().required('Mobile number is required'),
                    address: Yup.string().required('Address is required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    const token = localStorage.getItem("auth")
                    console.log(values); // Handle the form submission

                    editCustomer({ customerData: values, token,id})
                    .then((res)=>{
                        console.log(res)
                    })
                    setSubmitting(false);


                    
                }}
            >
                {formikProps => (
                    <Form>
                        <VenderForm formikProps={formikProps} />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default VenderEditWrapper;
