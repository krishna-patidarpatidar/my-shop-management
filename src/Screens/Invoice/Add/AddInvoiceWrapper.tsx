import { useNavigate } from 'react-router-dom';
import Toast from '../../../Config/Toast';
import { useCreateInvoiceMutation } from '../../../Service/InvoiceApi/InvoiceApiSlice';
import InvoiceForm from '../InvoiceLayout/InvoiceForm';
import { Formik } from 'formik';


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
    const navigate=useNavigate()
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        const response:any = await createBill({ billData: values, token });
                        if (response?.data.data.status) {
                            Toast.successMsg(response?.data.data.msg)
                            navigate('/admin/invoice')
                        } else {
                            Toast.errorMsg(response?.data.data.msg)
                        }
                    } catch (err) {
                        console.log(err);
                    } finally{
                        setSubmitting(false)
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
