import { Formik } from 'formik';
import * as yup from 'yup';
import RegisterForm from './RegisterForm';
import { useRegisterMutation } from '../../Service/Auth/AuthSlice';
import Toast from '../../Config/Toast';
import { useNavigate } from 'react-router-dom';

const RegisterSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    mobile: yup.string().required('Mobile number is required').matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must contain at least 1 letter and 1 number'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
});

const RegisterWrapper = () => {
    const navigate=useNavigate()
    const [register]=useRegisterMutation()
    return (
        <Formik
            initialValues={{ name: '', email: '', mobile: '', password: '', confirmPassword: '' }}
            validationSchema={RegisterSchema}
            onSubmit={(values, { setSubmitting }) => {
                // Handle form submission logic here (e.g., API call)
                register(values)
            .then((res: any) => {
                console.log(res.data.status)
               if (res.data.status) {
                localStorage.setItem('auth', res.data.data.createdUser.token);
                Toast.successMsg(res.data.msg);
                navigate('/customer');
              } else {
                Toast.errorMsg(res.data.msg);
              }
              setSubmitting(false); // Stop the submission once done
            })
            .catch(() => {
              Toast.errorMsg('An error occurred');
              setSubmitting(false); // Make sure to stop submitting in case of error
            });
        }}
            
        >
            {(formikProps) => (
                <form onSubmit={formikProps.handleSubmit} className="flex flex-col gap-4">
                    <RegisterForm formikProps={formikProps} />
                </form>
            )}
        </Formik>
    );
};

export default RegisterWrapper;
