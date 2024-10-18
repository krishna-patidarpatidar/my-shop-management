import { FieldArray } from 'formik';
import AtmButtonField from '../../../Components/atoms/Button/AtmButtonField';
import { useState } from 'react';
import SearchableSelectField from '../../../Components/atoms/Select/ATMSelectField';
import ATMDateField from '../../../Components/atoms/Input/AtmDate/AtmTypeDate';
import ATMNumberField from '../../../Components/atoms/Input/AtmNumber/ATMNumberField';

interface FormProps {
  formikProps: any; // Replace any with proper types as needed
  customerData: any; // Replace any with proper types as needed
  productData: any; // Replace any with proper types as needed
}

const InvoiceForm = ({ formikProps, customerData, productData }: FormProps) => {
  const { values, handleSubmit, setFieldValue, handleChange } = formikProps;

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleCustomerChange = (selectedOption: any) => {
    setSelectedCustomer(selectedOption);
    setFieldValue('customerId', selectedOption?._id);
    setFieldValue('customerName', selectedOption?.name);
    setFieldValue('customerAddress', selectedOption?.address);
    setFieldValue('customerMobile', selectedOption?.mobile);
  };

  const handleProductChange = (index: number, selectedProduct: any) => {
    setFieldValue(`products.${index}.productId`, selectedProduct._id);
    setFieldValue(`products.${index}.price`, selectedProduct.sellingPrice);
    setFieldValue(`products.${index}.quantity`, 1); // Default quantity 1
    setFieldValue(`products.${index}.total`, selectedProduct.sellingPrice);
  };
  return (
    <div className="min-h-screen mt-40 bg-gray-50 text-gray-800 ">
      <div className="max-w-4xl mx-auto bg-white rounded-lg p-5">
        <h1 className="text-2xl font-bold text-center mb-4">Invoice</h1>

        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            {/* Invoice Date */}
            <div className="mb-4">
              {/* <label className="block text-lg font-semibold">Invoice Date</label>
            <input
              name="invoiceDate"
              type="date"
              value={values.invoiceDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            /> */}
              <ATMDateField
                onChange={handleChange}
                value={values.invoiceDate}
                name="invoiceDate"
                label="Invoice Date"

              />
            </div>

            {/* Due Date */}
            <div className="mb-4">
              {/* <label className="block text-lg font-semibold">Due Date</label> */}
              {/* <input
              name="dueDate"
              type="date"
              value={values.dueDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            /> */}
              <ATMDateField
                onChange={handleChange}
                value={values.dueDate}
                name="dueDate"
                label="Due Date"

              />
            </div>
          </div>

          {/* Customer Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              {/* <label className="block text-lg font-semibold">Customer Name</label> */}

              <SearchableSelectField
                label='Customer Name'
                options={customerData}
                getOptionLabel={(option: any) => option.name}
                getOptionValue={(option: any) => option._id}
                onChange={handleCustomerChange}
                value={selectedCustomer}
              />
            </div>

            {/* <div>
              <label className="block text-lg font-semibold">Customer Address</label>
              <h1 className='border-2 h-10 rounded-md'>
                {values.customerAddress}
              </h1>
            </div> */}
            <div className='flex flex-col gap-3'>
              <label className="block text-lg text-slate-700 font-semibold">Customer Mobile</label>
              <h1 className='border-2 h-10 rounded-md'>
                {values.customerMobile}
              </h1>
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
                    {values?.products?.map((product: any, index: number) => (
                      <tr key={index}>
                        {/* Product Selector */}
                        <td className="border p-2">
                          {/* <select
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
                            {productData?.map((p: any) => (
                              <option key={p._id} value={p._id}>
                                {p.name}
                              </option>
                            ))}
                          </select> */}
                          <SearchableSelectField
                            options={productData}
                            getOptionLabel={(option: any) => option.name}
                            getOptionValue={(option: any) => option._id}
                            onChange={(selectedProduct) =>
                              handleProductChange(index, selectedProduct)
                            }
                            value={productData.find((p: any) => p._id === product.productId)}
                          />
                        </td>

                        {/* Quantity Input */}
                        <td className="border p-2">
                          <ATMNumberField
                            name={`products.${index}.quantity`}

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
                          <h1>
                            {product.price}
                          </h1>
                        </td>

                        {/* Total Input (Read-only) */}
                        <td className="border p-2">
                          <h1>
                            {product.total}
                          </h1>
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
              <ATMNumberField
                label='Online Payment Received'
                name="onlineAmount"

                value={values.onlineAmount}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Online Payment"
              />
            </div>
            <div>
              <ATMNumberField
                label='Cash Payment Received'
                name="cashAmount"

                value={values.cashAmount}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Cash Payment"
              />
            </div>
            <div>
              <ATMNumberField
                label='Discount (in ₹)'
                name="discount"

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
              <h1>
                {values.products.reduce((sum:number, product:any) => sum + product.total, 0)}

              </h1>
            </div>

            <div>
              <label className="block text-lg font-semibold">Discounted Total</label>
              <h1>

                {values.products.reduce((sum:number, product:any) => sum + product.total, 0) - values.discount}
              </h1>
            </div>

            <div>
              <label className="block text-lg font-semibold">Due Amount</label>
              <h1>
                {Math.max(
                  (values.products?.reduce(
                    (sum:number, product:any) => sum + (product.total || 0), 0
                  ) || 0) -
                  (values.discount || 0) -
                  (parseFloat(values.onlineAmount || '0') + parseFloat(values.cashAmount || '0')),
                  0
                )}
              </h1>
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