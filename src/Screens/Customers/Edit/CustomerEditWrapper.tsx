import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup'; // Optional: if you plan to use validation
import { useCustomerEditMutation } from '../../../Service/CustomerApi/CustomerSlice';
import { useNavigate, useParams, useSearchParams ,useOutletContext} from 'react-router-dom';
import CustomerForm from '../Layout/CustomerForm';

const CustomerEditWrapper: React.FC = () => {
    const navigate=useNavigate()
    const {id}= useParams()
    const [queryParams] = useSearchParams()
    const name = queryParams.get("name")
    const mobile = queryParams.get("mobile")
    const address = queryParams.get("address")
    const [editCustomer] = useCustomerEditMutation()
    const { setEdit } = useOutletContext<{ setEdit: React.Dispatch<React.SetStateAction<boolean>> }>();

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

export default CustomerEditWrapper;
