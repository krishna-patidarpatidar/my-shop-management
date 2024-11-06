import { formatDate } from '../../../Components/Molecule/DateHelper/DateHelper';


const TransactionsListForm = ({ Transactions }: any) => {
  return (
    <div className="container mx-auto p-4 mt-40 text-xl relative">


      {/* Main Content */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800"> Transactions</h1>

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
             
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {Transactions?.data.length > 0 ? (
             Transactions?.data.map((customer: any) => (
                <tr key={customer._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6">{customer.invoiceNumber}</td>
                  <td className="py-3 px-6">{formatDate(customer.invoiceDate)}</td>
                  <td className="py-3 px-6">{customer.customerName}</td>
                  <td className="py-3 px-6 text-right">{customer.receivedAmount}</td>
                 
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="py-3 px-6 text-center">
                  No transactions available
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Mobile View */}
        <div className="md:hidden">
          {Transactions?.data.length > 0 ? (
            Transactions?.data.map((customer: any) => (
              <div key={customer._id} className="border-b p-4 flex flex-col gap-2 mb-4 bg-gray-50">
                <div>
                  <span className="font-bold text-sm text-gray-700">invoice No.:</span>
                  <span className="text-sm text-gray-900 ml-2">{customer.invoiceNumber}</span>
                </div>
                <div>
                  <span className="font-bold text-sm text-gray-700">invoice Date:</span>
                  <span className="text-sm text-gray-900 ml-2">{formatDate(customer.invoiceDate)}</span>
                </div>
                <div>
                  <span className="font-bold text-sm text-gray-700">Customer Name:</span>
                  <span className="text-sm text-gray-900 ml-2">{customer.customerName}</span>
                </div>
               
                <div>
                  <span className="font-bold text-sm text-gray-700">Receved Amount:</span>
                  <span className="text-sm text-gray-900 ml-2">{customer.receivedAmount}</span>
                </div>
               
              </div>
            ))
          ) : (
            <div className="text-center py-6">No transactions available</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TransactionsListForm