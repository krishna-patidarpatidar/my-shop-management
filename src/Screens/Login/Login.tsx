import React from 'react';
import AtmTextField from '../../Components/atoms/Input/AtmTypeText/AtmTextField';
import AtmPasswordField from '../../Components/atoms/Input/AtmTypePassword/AtmPasswordField';
import AtmButtonField from '../../Components/atoms/Button/AtmButtonField';

interface LoginProps {
  formikProps: any;
  isSubmitting: boolean;
}

const Login: React.FC<LoginProps> = ({ formikProps, isSubmitting }) => {
  const { values, handleChange, handleBlur, errors, touched } = formikProps;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col text-xl gap-6 border shadow-lg p-4 w-[300px] rounded">
        <div className="">
          <AtmTextField
            className="w-full"
            label="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <div className="text-red-600 absolute text-sm">{errors.email}</div>
          )}
        </div>
        <div className="">
          <AtmPasswordField
            className="w-full"
            label="Password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && (
            <div className="text-red-600 absolute  text-sm">{errors.password}</div>
          )}
        </div>
        <div className="text-center">
          <AtmButtonField
            label={isSubmitting ? 'Loading...' : 'Login'}
            disabled={isSubmitting}
            className={`p-2 bg-blue-800 text-white text-center rounded ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            type="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
