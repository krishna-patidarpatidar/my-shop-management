import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { useGetCustomerInvoiceQuery, usePaymentInMutation } from '../../../Service/InvoiceApi/InvoiceApiSlice';
import { useNavigate, useParams } from 'react-router-dom';
import PamantInForm from './PamantInForm';
import Toast from '../../../Config/Toast';

type PaymentFormValues = {
  amount: number;
};

const PamantInWrapper: React.FC = () => {
  const [customerData, setCustomerData] = useState<any>(null);
  const [paymentIn] = usePaymentInMutation();
  const { id } = useParams();
  const { data } = useGetCustomerInvoiceQuery({ billId: id });
  const navigate = useNavigate()
  useEffect(() => {
    if (data) setCustomerData(data?.data);
  }, [data]);

  const initialValues: PaymentFormValues = { amount: 0 };

  const handleSubmit = async (values: PaymentFormValues) => {
    try {
      const response: any = await paymentIn({ paymentData: values, INVId: id })
      if (response?.data.status) {
        Toast.successMsg(response?.data.msg)
        navigate('/admin/invoice')
      } else {
        Toast.errorMsg(response?.data.msg)
      }
    } catch (error: any) {
      Toast.errorMsg(error)

    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {formikProps => (
        <Form>
          <PamantInForm formikProps={formikProps} customerData={customerData} />
        </Form>
      )}
    </Formik>
  );
};

export default PamantInWrapper;
