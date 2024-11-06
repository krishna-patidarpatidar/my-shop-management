import { Link, Outlet, useLocation } from 'react-router-dom'
import { formatDate } from '../../../Components/Molecule/DateHelper/DateHelper'

const InvoiceList = ({ data, handleDelete }: any) => {
    const location = useLocation()
    return (
        <div className=" md:max-w-[70%] mt-40 mx-auto">
            {/* Conditionally render either the Outlet or the Invoice list */}
            {location.pathname !== '/admin/invoice' ? <div>
                <Outlet />
            </div> :
                <div className=' text-4xl'>
                    <div className="flex text-4xl justify-between">

                        <h2 className="font-bold text-slate-700">Invoices</h2>

                        <button className="px-4 py-2 flex gap-2 text-white  rounded-lg">

                            <Link className='bg-green-500  p-2 font-bold' to={'add-invoice'}>Create Invoice</Link>
                        </button>
                    </div>
                    <div className='relative overflow-x-auto'>
                        <table className="min-w-full table-auto text-left ">

                            <thead className="bg-blue-600 text-white uppercase">

                                <tr>
                                    <th className="py-3 px-6">Invoice </th>
                                    <th className="py-3 px-6">date</th>
                                    <th className="py-3 px-6">Customer</th>
                                    <th className="py-3 px-6">Amount</th>
                                    <th className="py-3 px-6">DueAmount</th>
                                    <th className="py-3 px-6">Status</th>
                                    <th className="py-3 px-6">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {data?.data.length > 0 ? (
                                    data?.data?.map((invoice: any) => (
                                        <tr key={invoice._id} className="border-b hover:bg-gray-50">
                                            <td className="py-3 px-6">{invoice.invoiceNumber}</td>
                                            <td className="py-3 px-6">{formatDate(invoice.invoiceDate)}</td>
                                            <td className="py-3 px-6">{invoice.customerId.name}</td>
                                            <td className="py-3 px-6 text-right">{invoice.totalAmount}</td>
                                            <td className="py-3 px-6 text-right">{invoice.dueAmount}</td>
                                            <td className="py-3 px-6">{invoice.status}</td>
                                            <td className="py-3 px-6 flex gap-1">
                                                <button className='px-2 py-1 text-white bg-green-600 rounded'>
                                                    <Link to={`pamantIn/${invoice._id}`}>Pay In</Link>
                                                </button>
                                                <button className="px-2 py-1 text-white bg-blue-500 rounded">
                                                    <Link to={`show-invoice/${invoice._id}`}>View</Link>
                                                </button>
                                                <button className='px-2 py-1 text-white bg-gray-700 rounded'>
                                                    <Link to={`edit-invoice/${invoice.invoiceNumber}`}>Edit</Link>
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(invoice._id)}
                                                    className="px-2 py-1 text-white bg-red-500 rounded"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="p-2 text-center">No invoices found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>}

        </div>
    )
}

export default InvoiceList