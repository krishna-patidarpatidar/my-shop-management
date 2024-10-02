import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup'; // Optional: if you plan to use validation
import { useNavigate, useOutletContext } from 'react-router-dom';
import Toast from '../../../Config/Toast';
import { useCreateVenderMutation } from '../../../Service/VenderApi/VenderSlice';
import VenderForm from '../Layout/VenderForm';

const VenderAddWrapper: React.FC = () => {
    const navigate = useNavigate()
    const [createvender] = useCreateVenderMutation()
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
                    .required('Vender name is required')
                    .min(2, 'Vender name must be at least 2 characters'),
                  
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

                    createvender({ venderData: values, token })
                        .then((res:any) => {
                            console.log(res.data.status)
                            if (res.data.status) {
                            Toast.successMsg(res.data.msg)
                                navigate('/admin/vender')
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
                        <VenderForm formikProps={formikProps} />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default VenderAddWrapper;
