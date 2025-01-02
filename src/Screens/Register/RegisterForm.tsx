import React from 'react';
import AtmTextField from '../../Components/atoms/Input/AtmTypeText/AtmTextField';
import AtmPasswordField from '../../Components/atoms/Input/AtmTypePassword/AtmPasswordField';
import AtmButtonField from '../../Components/atoms/Button/AtmButtonField';
import { Link } from 'react-router-dom';

const RegisterForm = ({ formikProps }:any) => {
    const { values, handleChange, handleBlur, isSubmitting } = formikProps;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-[320px] md:max-w-lg w-full bg-white p-8 rounded-lg shadow-lg relative">
                <h1 className="text-4xl  font-semibold text-center text-gray-700 mb-8">Create Account</h1>

                {/* Name Field */}
                <div className="relative mb-6">
                    <AtmTextField
                        label="Name"
                        name="name"
                        placeholder="Enter your full name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                   
                </div>

                {/* Email Field */}
                <div className="relative mb-6">
                    <AtmTextField
                        label="Email"
                        name="email"
                        placeholder="example@example.com"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                   
                </div>

                {/* Mobile Field */}
                <div className="relative mb-6">
                    <AtmTextField
                        label="Mobile"
                        name="mobile"
                        placeholder="Enter 10-digit mobile number"
                        value={values.mobile}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                   
                </div>

                {/* Password Field */}
                <div className="relative mb-6">
                    <AtmPasswordField
                        label="Password"
                        name="password"
                        placeholder="Enter a strong password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                  
                </div>

                {/* Confirm Password Field */}
                <div className="relative mb-6">
                    <AtmPasswordField
                        label="Confirm Password"
                        name="confirmPassword"
                        placeholder="Re-enter your password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                   
                </div>

                {/* Submit Button */}
                <AtmButtonField
                    label={isSubmitting ? 'Registering...' : 'Register'}
                    disabled={isSubmitting}
                    type="submit"
                    className={`p-3 mt-4 w-full bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                />

                {/* Link to Login */}
                <div className="mt-6 text-center">
                    <Link className="text-blue-600 hover:underline" to="/">
                        Already have an account? Log in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
