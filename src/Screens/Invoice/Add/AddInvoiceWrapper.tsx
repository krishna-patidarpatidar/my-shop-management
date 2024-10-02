import { useCreateInvoiceMutation } from '../../../Service/InvoiceApi/InvoiceApiSlice';
import InvoiceForm from '../InvoiceLayout/InvoiceForm';
import { Formik } from 'formik';

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

const AddInvoiceWrapper = () => {
    const [createBill] = useCreateInvoiceMutation();
    const token = localStorage.getItem("auth");

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

export default AddInvoiceWrapper;
