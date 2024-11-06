import { Link } from 'react-router-dom';
import AtmButtonField from '../../../Components/atoms/Button/AtmButtonField';
import { formatDate } from '../../../Components/Molecule/DateHelper/DateHelper';


const CustomerTransactionForm = ({ customerTransaction }: any) => {
  return (
    <div className="container mx-auto p-4 mt-40 text-xl relative">


      {/* Main Content */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Customer Transactions</h1>

      </div>

      {/* Mobile Responsive Table */}
      <div className="overflow-hidden shadow-lg rounded-lg bg-white">
        <table className="min-w-full table-auto text-left hidden md:table">
          <thead className="bg-blue-600 text-white uppercase">
            <tr>
              <th className="py-3 px-6">invoice No.</th>
              <th className="py-3 px-6">invoice Date</th>
              <th className="py-3 px-6">Customer Name</th>
              <th className="py-3 px-6">Amount</th>
              <th className="py-3 px-6">Receved Amount</th>
              <th className="py-3 px-6">Due Amount</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {customerTransaction?.data.length > 0 ? (
              customerTransaction?.data.map((customer: any) => (
                <tr key={customer._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6">{customer.invoiceNumber}</td>
                  <td className="py-3 px-6">{formatDate(customer.date)}</td>
                  <td className="py-3 px-6">{customer.customerName}</td>
                  <td className="py-3 px-6 text-right ">{customer.totalAmount}</td>
                  <td className="py-3 px-6 text-right">{customer.receivedAmount}</td>
                  <td className="py-3 px-6 text-right">{customer.dueAmount}</td>
                  <td className="py-3 px-6">
                    <Link
                      to={`/admin/invoice/show-invoice/${customer.invoiceNumber}`}
                    >
                      <AtmButtonField
                        label="View"
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-400 transition duration-200"
                      />
                    </Link>
                   
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="py-3 px-6 text-center">
                  No customers available
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Mobile View */}
        <div className="md:hidden">
          {customerTransaction?.data.length > 0 ? (
            customerTransaction?.data.map((customer: any) => (
              <div key={customer._id} className="border-b p-4 flex flex-col gap-2 mb-4 bg-gray-50">
                <div>
                  <span className="font-bold text-sm text-gray-700">invoice No.:</span>
                  <span className="text-sm text-gray-900 ml-2">{customer.invoiceNumber}</span>
                </div>
                <div>
                  <span className="font-bold text-sm text-gray-700">invoice Date:</span>
                  <span className="text-sm text-gray-900 ml-2">{formatDate(customer.date)}</span>
                </div>
                <div>
                  <span className="font-bold text-sm text-gray-700">Customer Name:</span>
                  <span className="text-sm text-gray-900 ml-2">{customer.customerName}</span>
                </div>
                <div>
                  <span className="font-bold text-sm text-gray-700">Amount:</span>
                  <span className="text-sm text-gray-900 ml-2">{customer.totalAmount}</span>
                </div>
                <div>
                  <span className="font-bold text-sm text-gray-700">Receved Amount:</span>
                  <span className="text-sm text-gray-900 ml-2">{customer.receivedAmount}</span>
                </div>
                <div>
                  <span className="font-bold text-sm text-gray-700">Due Amount:</span>
                  <span className="text-sm text-gray-900 ml-2">{customer.dueAmount}</span>
                </div>
                <div className="flex gap-2 mt-2">

                  <Link
                    to={`/admin/invoice/show-invoice/${customer.invoiceNumber}`}
                  >
                    <AtmButtonField
                      label="View"
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-400 transition duration-200"
                    />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-6">No customers available</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CustomerTransactionForm