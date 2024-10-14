import { FieldArray, FormikProps } from 'formik';
import { BsColumnsGap } from 'react-icons/bs';

interface FormProps {
  formikProps: FormikProps<any>;
  customerData: any[];
  productData: any[];
}

const InvoiceForm = ({ formikProps, customerData, productData }: FormProps) => {
  const { values, handleSubmit, setFieldValue, handleChange } = formikProps;

  const calculateTotal = (products: any[]) =>
    products.reduce((sum, product) => sum + product.quantity * product.price, 0);
console.log(values)
  return (
    <div className="min-h-screen mt-40 bg-gray-50 text-gray-800 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Invoice</h1>

        <form onSubmit={handleSubmit}>
          {/* Invoice Date */}
          <div className="mb-4">
            <label className="block text-lg font-semibold">Invoice Date</label>
            <input
              name="invoiceDate"
              type="date"
              value={values.invoiceDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          {/* due Date */}
          <div className="mb-4">
            <label className="block text-lg font-semibold">Due Date</label>
            <input
              name="dueDate"
              type="date"
              value={values.dueDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          {/* Customer Details */}
          <div className="mb-4">
            <label className="block text-lg font-semibold">Customer</label>
            <select
              name="customerId"
              value={values.customerId}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select a customer</option>
              {customerData.map((customer) => (
                <option key={customer._id} value={customer._id}>
                  {customer.name}
                </option>
              ))}
            </select>
          </div>

          {/* Product Details */}
          <FieldArray name="products">
            {({ remove, push }) => (
              <div>
                <table className="w-full table-auto border-collapse bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border py-2 px-4">Product</th>
                      <th className="border py-2 px-4">Quantity</th>
                      <th className="border py-2 px-4">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {values.products.map((product, index) => (
                      <tr key={index}>
                        <td className="border p-2">
                          <select
                            name={`products.${index}.productId`}
                            value={product.productId}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                          >
                            <option value="">Select a product</option>
                            {productData.map((prod) => (
                              <option key={prod._id} value={prod._id}>
                                {prod.name}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="border p-2">
                          <input
                            name={`products.${index}.quantity`}
                            type="number"
                            value={product.quantity}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-md"
                          />
                        </td>
                        <td className="border p-2 text-center">
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            className="text-red-600"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <button
                  type="button"
                  onClick={() => push({ productId: '', quantity: 1 })}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Add Product
                </button>
              </div>
            )}
          </FieldArray>

          {/* Payment and Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-lg font-semibold">Online Payment</label>
              <input
                name="onlineAmount"
                type="number"
                value={values.onlineAmount}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold">Cash Payment</label>
              <input
                name="cashAmount"
                type="number"
                value={values.cashAmount}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold">Discount</label>
              <input
                name="discount"
                type="number"
                value={values.discount}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>

          <button type="submit" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InvoiceForm;
