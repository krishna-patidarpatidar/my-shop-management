import { useNavigate } from 'react-router-dom';
import Toast from '../../../Config/Toast';
import { useCreateInvoiceMutation } from '../../../Service/InvoiceApi/InvoiceApiSlice';
import InvoiceForm from '../InvoiceLayout/InvoiceForm';
import { Formik } from 'formik';
import { useGetCustomerQuery } from '../../../Service/CustomerApi/CustomerSlice';
import { useGetProductsQuery } from '../../../Service/Products/ProductSlice';
import { useEffect, useState } from 'react';

interface InvoiceFormValues {
  invoiceDate: string;
  dueDate: string;
  customerId: string;
  products: { productId: string; quantity: number }[];
  onlineAmount: number;
  cashAmount: number;
  discount: number;
}

const initialValues: InvoiceFormValues = {
  invoiceDate: '',
  dueDate: '',
  customerId: '',
  products: [{ productId: '', quantity: 0 }],
  onlineAmount: 0,
  cashAmount: 0,
  discount: 0,
};

const AddInvoiceWrapper = () => {
  const [customers, setCustomers] = useState([]);
  const { data: customerData } = useGetCustomerQuery('');
  const { data: productData } = useGetProductsQuery('');
  const [createBill] = useCreateInvoiceMutation();
  const navigate = useNavigate();
  const [ product,setProduct]=useState([])
   
  useEffect(() => {
    setCustomers((customerData as any)?.data || []);
    setProduct((productData as any)?.data || [])
  }, [customerData]);

  const handleSubmit = async (values: InvoiceFormValues, { setSubmitting }: any) => {
    try {
      const formattedData = {
        dueDate: values.dueDate,
        customerId: values.customerId,
        products: values.products.map((p) => ({
          productId: p.productId,
          quantity: p.quantity,
        })),
        onlineAmount: values.onlineAmount,
        cashAmount: values.cashAmount,
        discountAmount: values.discount,
      };

      const response: any = await createBill({ billData: formattedData });
      console.log(response);

      if (response?.data?.data?.status) {
        Toast.successMsg(response?.data?.data?.msg);
        navigate('/admin/invoice');
      } else {
        Toast.errorMsg(response?.data?.data?.msg);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps) => (
          <InvoiceForm
            formikProps={formikProps}
            customerData={customers}
            productData={product || []}
          />
        )}
      </Formik>
    </div>
  );
};

export default AddInvoiceWrapper;
