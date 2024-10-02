import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup'; // Optional: if you plan to use validation
import { useCustomerEditMutation, useGetSingleCustomerQuery } from '../../../Service/CustomerApi/CustomerSlice';
import { useNavigate, useParams ,useOutletContext} from 'react-router-dom';
import CustomerForm from '../Layout/CustomerForm';
import Toast from '../../../Config/Toast';

const CustomerEditWrapper: React.FC = () => {
    const navigate=useNavigate()
    const token = localStorage.getItem("auth")

    const {id}= useParams()
    const {data}=useGetSingleCustomerQuery({token,id})
    const [editCustomer] = useCustomerEditMutation()
    const { setEdit } = useOutletContext<{ setEdit: React.Dispatch<React.SetStateAction<boolean>> }>();
    return (
        <div>
            <Formik
            enableReinitialize={true}
                initialValues={{
                    name: data?.data.name,
                    mobile: data?.data.mobile,
                    address: data?.data.address
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
                    .min(3, 'Address must be at least 3 characters'),
                })}
                onSubmit={(values, { setSubmitting }) => {

                    editCustomer({ customerData: values, token,id})
                    .then((res:any)=>{
                        if (res.data.status) {
                        Toast.successMsg(res.data.msg)
                            
                        } else {
                            Toast.errorMsg(res.data.msg)
                        }
                    })
                    setSubmitting(false);
                    navigate('/admin/customer')
                    setEdit(false)
                    
                }}
            >
                {({ handleSubmit,...formikProps}) => (
                    <Form onSubmit={handleSubmit}>
                        
                        <CustomerForm formikProps={formikProps} />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CustomerEditWrapper;
