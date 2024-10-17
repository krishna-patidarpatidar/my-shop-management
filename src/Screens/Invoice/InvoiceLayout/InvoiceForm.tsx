import { FieldArray } from 'formik';
import AtmTextField from '../../../Components/atoms/Input/AtmTypeText/AtmTextField';
import AtmButtonField from '../../../Components/atoms/Button/AtmButtonField';

interface FormProps {
  formikProps: any; // Replace any with proper types as needed
  customerData: any; // Replace any with proper types as needed
  productData: any; // Replace any with proper types as needed
}

const InvoiceForm = ({ formikProps, customerData, productData }: FormProps) => {
  const { values, handleSubmit, setFieldValue, handleBlur, handleChange } = formikProps;

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

          {/* Due Date */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-lg font-semibold">Customer Name</label>
              <select
                name="customerId"
                value={values.customerId}
                onChange={(e) => {
                  const selectedCustomer = customerData.find(
                    (customer: any) => customer._id === e.target.value
                  );
                  setFieldValue('customerId', selectedCustomer._id);
                  setFieldValue('customerName', selectedCustomer.name);
                  setFieldValue('customerAddress', selectedCustomer.address);
                  setFieldValue('customerMobile', selectedCustomer.mobile);
                }}
                onBlur={handleBlur}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              >
                <option value="">Select a customer</option>
                {customerData?.map((customer: any) => (
                  <option key={customer._id} value={customer._id}>
                    {customer.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold">Customer Address</label>
              <AtmTextField
                name="customerAddress"
                value={values.customerAddress}
                readOnly
                className="w-full px-3 py-2 border rounded-md bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold">Customer Mobile</label>
              <AtmTextField
                name="customerMobile"
                value={values.customerMobile}
                readOnly
                className="w-full px-3 py-2 border rounded-md bg-gray-100"
              />
            </div>
          </div>

          {/* Product Details */}
          <FieldArray name="products">
            {({ remove, push }) => (
              <div className="mb-4">
                <table className="w-full table-auto border-collapse bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border py-2 px-4">Product</th>
                      <th className="border py-2 px-4">Quantity</th>
                      <th className="border py-2 px-4">Price</th>
                      <th className="border py-2 px-4">Total</th>
                      <th className="border py-2 px-4">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {values?.products?.map((product:string, index:string) => (
                      <tr key={index}>
                        {/* Product Selector */}
                        <td className="border p-2">
                          {/*
                          <select
                name="customerId"
                value={values.customerId}
                onChange={(e) => {
                  const selectedCustomer = customerData.find(
                    (customer) => customer._id === e.target.value
                  );
                  setFieldValue('customerId', selectedCustomer._id);
                  setFieldValue('customerName', selectedCustomer.name);
                  setFieldValue('customerAddress', selectedCustomer.address);
                  setFieldValue('customerMobile', selectedCustomer.mobile);
                }}
                onBlur={handleBlur}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              >
                <option value="">Select a customer</option>
                {customerData?.map((customer) => (
                  <option key={customer._id} value={customer._id}>
                    {customer.name}
                  </option>
                ))}
              </select>
                          */}
                          <select
                            name={`products.${index}.productId`}
                            value={product.productId}
                            onChange={(e) => {
                              const productId = e.target.value;
                              const selectedProduct = productData.find((p) => p._id === productId);

                              // if (selectedProduct) {
                              // Update all relevant fields with selected product details
                              setFieldValue(`products.${index}.productId`, selectedProduct._id);
                              setFieldValue(`products.${index}.price`, selectedProduct.sellingPrice);
                              setFieldValue(`products.${index}.quantity`, 1); // Default quantity 1
                              setFieldValue(`products.${index}.total`, selectedProduct.sellingPrice);
                              // }
                            }}
                            onBlur={handleBlur}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                          >
                            <option value="">Select a product</option>
                            {productData?.map((p:any) => (
                              <option key={p._id} value={p._id}>
                                {p.name}
                              </option>
                            ))}
                          </select>
                        </td>

                        {/* Quantity Input */}
                        <td className="border p-2">
                          <AtmTextField
                            name={`products.${index}.quantity`}
                            type="number"
                            value={product.quantity}
                            onChange={(e) => {
                              const quantity = parseFloat(e.target.value || '0');
                              const price = parseFloat(product.price || '0');
                              setFieldValue(`products.${index}.quantity`, quantity);
                              setFieldValue(`products.${index}.total`, quantity * price);
                            }}
                            className="w-full px-2 py-1 border rounded-md"
                          />
                        </td>

                        {/* Price Input (Read-only) */}
                        <td className="border p-2">
                          <AtmTextField
                            name={`products.${index}.price`}
                            type="number"
                            value={product.price}
                            readOnly
                            className="w-full px-2 py-1 border rounded-md bg-gray-100"
                          />
                        </td>

                        {/* Total Input (Read-only) */}
                        <td className="border p-2">
                          <AtmTextField
                            name={`products.${index}.total`}
                            type="number"
                            value={product.total}
                            readOnly
                            className="w-full px-2 py-1 border rounded-md bg-gray-100"
                          />
                        </td>

                        {/* Remove Button */}
                        <td className="border p-2 text-center">
                          <AtmButtonField
                            onClick={() => remove(index)}
                            className="text-red-600"
                            label='remove'

                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>


                </table>

                <div className="flex justify-between mt-4">
                  <AtmButtonField
                    type="button"
                    onClick={() => push({ name: '', quantity: '', price: '', total: '' })}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"

                    label='Add Product'
                  />
                </div>
              </div>
            )}
          </FieldArray>

          {/* Payment Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <AtmTextField
                label='Online Payment Received'
                name="onlineAmount"
                type="number"
                value={values.onlineAmount}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Online Payment"
              />
            </div>
            <div>
              <AtmTextField
                label='Cash Payment Received'
                name="cashAmount"
                type="number"
                value={values.cashAmount}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Cash Payment"
              />
            </div>
            <div>
              <AtmTextField
                label='Discount (in ₹)'
                name="discount"
                type="number"
                value={values.discount}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Discount"
              />
            </div>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-lg font-semibold">Total Amount (Before Discount)</label>
              <AtmTextField
                name="totalAmount"
                value={values.products.reduce((sum, product) => sum + product.total, 0)}
                readOnly
                className="w-full px-3 py-2 border rounded-md bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold">Discounted Total</label>
              <AtmTextField

                name="discountedTotal"
                value={values.products.reduce((sum, product) => sum + product.total, 0) - values.discount}
                readOnly
                className="w-full px-3 py-2 border rounded-md bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold">Due Amount</label>
              <AtmTextField
                name="dueAmount"
                value={Math.max(
                  (values.products?.reduce(
                    (sum, product) => sum + (product.total || 0), 0
                  ) || 0) -
                  (values.discount || 0) -
                  (parseFloat(values.onlineAmount || '0') + parseFloat(values.cashAmount || '0')),
                  0
                )}
                readOnly
                className="w-full px-3 py-2 border rounded-md bg-gray-100"
              />
            </div>

          </div>

          <div className="text-center mt-6">
            <AtmButtonField
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md"
              label='Submit'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceForm;