import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Login from './Login';
import { useLoginMutation } from '../../Service/Auth/AuthSlice';
import Toast from '../../Config/Toast';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
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
                navigate('/add-customer');
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
