import React from 'react';
import { Link } from 'react-router-dom';
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-[300px] text-sm md:max-w-md w-full bg-white p-6 md:p-10 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-4xl font-semibold text-center text-gray-700 mb-6">Login</h1>

        {/* Email Field */}
        <div className="relative mb-6">
          <AtmTextField
            className={`border p-2 rounded-lg w-full ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            label="Email"
            name="email"
            placeholder="someone@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <span className="absolute text-red-600 text-xl mt-1 right-0">{errors.email}</span>
          )}
        </div>

        {/* Password Field */}
        <div className="relative mb-6">
          <AtmPasswordField
            className={`border p-2 rounded-lg w-full ${touched.password && errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            label="Password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && (
            <span className="absolute text-red-600 text-xl mt-1 right-0">{errors.password}</span>
          )}
        </div>

        {/* Submit Button */}
        <AtmButtonField
          label={isSubmitting ? 'Loading...' : 'Login'}
          disabled={isSubmitting}
          className={`p-2 w-full mt-5 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          type="submit"
        />

        {/* Link to Register */}
        <div className="mt-6 text-center">
          <Link className="text-blue-600 hover:underline" to="/register">
            Create a new account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
