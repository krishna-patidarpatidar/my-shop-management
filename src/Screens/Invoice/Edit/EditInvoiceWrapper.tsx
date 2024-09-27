import React from 'react'
import { useCreateInvoiceMutation, useGetCustomerInvoiceQuery } from '../../../Service/InvoiceApi/InvoiceApiSlice';
import InvoiceForm from '../InvoiceLayout/InvoiceForm';
import { Formik } from 'formik';
import { useParams } from 'react-router-dom';

type Props = {}

const initialValues = {
    invoiceDate: '',
    dueDate: '',
    customer: {
        name: '',
        address: '',
        mobile: ''
    },
    products: [{
        name: '',
        quantity: '',
        price: '',
        total: '',
    }],
    onlineAmount: '',
    cashAmount: '',
    discount: ''  // discount in rupee
};

const EditInvoiceWrapper = (props: Props) => {
  const token = localStorage.getItem("auth");
  const { id } = useParams();
  const { data, isError, isLoading } = useGetCustomerInvoiceQuery({ token, id });
  
  
  console.log(data, "data bill");
    const [createBill] = useCreateInvoiceMutation();

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        const response = await createBill({ billData: values, token });
                        console.log(response);
                        // Optionally reset the form after submission
                        resetForm();
                    } catch (err) {
                        console.log(err);
                    }
                }}
            >
                {(formikProps) => (
                    <InvoiceForm formikProps={formikProps} />
                )}
            </Formik>
        </div>
    )
}

export default EditInvoiceWrapper;
