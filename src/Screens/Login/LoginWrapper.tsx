import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Login from './Login';
import { useLoginMutation } from '../../Service/Auth/AuthSlice';
import Toast from '../../Config/Toast';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address').min(7,'')
    .required('Email cannot be empty'),
  password: Yup.string()
  .min(8, 'Password must be at least 8 characters long')
    .required('Password cannot be empty'),
});

const LoginWrapper: React.FC = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          login(values)
            .then((res: any) => {
               if (res.data.status) {
                localStorage.setItem('auth', res.data.token);
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
        {({ handleSubmit, isSubmitting, ...formikProps }) => (
          <Form onSubmit={handleSubmit}>
            <Login formikProps={formikProps} isSubmitting={isSubmitting} />
            
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginWrapper;
