import React from 'react';

type ShowInvoiceProps = {
    data: any;  // You should ideally define the correct type here for better TypeScript type safety
    handlePrint: () => void;
    contentToPrint: React.RefObject<HTMLDivElement>;
}

const ShowInvoice: React.FC<ShowInvoiceProps> = ({ data, handlePrint, contentToPrint }) => {
    const formatDate = (date: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };
    return (
        <div className='text-center'>
            <button onClick={handlePrint}>PRINT</button>

            <div ref={contentToPrint} className="mt-3">
                <div className="border md:w-[900px] rounded-lg mx-auto w-[450px] p-4 shadow-lg mb-6">
                    {/* Invoice Header */}
                    <div className='flex justify-between border-b-[3px] md:pt-5'>
                        <div className='flex items-center'>
                            <div className='w-[25px] md:max-w-[50px]'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/Goddess_Maheshwari_%28%E0%A4%A6%E0%A5%87%E0%A4%B5%E0%A5%80_%E0%A4%AE%E0%A4%B9%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%80%29.png" alt="Logo" />
                            </div>
                            <div className='text-start'>
                                <h1 className='flex gap-2 text-md md:text-4xl font-semibold place-items-end'>
                                    Maa Bhavani <p className='text-[10px] md:text-lg font-medium'>sare center.</p>
                                </h1>
                                <h1 className='text-[10px]'>mo. 8251012924 , add:-neem chouk dasai(dhar)</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className='flex gap-2 text-xl md:text-4xl font-semibold place-items-end'>Invoice</h1>
                        </div>
                    </div>

                    {/* Invoice Details */}
                    <div className="flex justify-between mt-4">
                        <div className="mb-4 md:mb-0">
                            <h1>INVOICE TO :</h1>
                            <h1 className="text-sm md:text-xl">{data?.customerName}</h1>
                            <h1 className="text-[10px] md:text-sm">Mo.No: {data?.customerMobile}</h1>
                        </div>
                        <div className="text-center">
                            <p>Date: {formatDate(data?.invoiceDate)}</p>
                            <p>Invoice No: {data?.invoiceNumber}</p>
                        </div>
                        <div className="text-right">
                            <h1>TOTAL DUE :</h1>
                            <h1>INR: ₹ {data?.dueAmount}</h1>
                        </div>
                    </div>

                    {/* Product Table */}
                    <div className="relative overflow-x-auto border-b-2 py-5">
                        <table className="w-full text-sm">
                            <thead className="text-xs text-gray-700 uppercase bg-blue-900 dark:text-gray-400">
                                <tr className="text-left">
                                    <th scope="col" className="p-4">S.No</th>
                                    <th scope="col" className="px-6 py-3">Product name</th>
                                    <th scope="col" className="px-6 py-3">Qty</th>
                                    <th scope="col" className="px-6 py-3">Price</th>
                                    <th scope="col" className="px-6 py-3">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.products?.map((product: any, i: number) => (
                                    <tr key={product._id}>
                                        <td className="p-4">{i + 1}</td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 text-left">
                                            {product.name}
                                        </th>
                                        <td className="px-6 py-4">{product.quantity}</td>
                                        <td className="px-6 py-4">{product.price}</td>
                                        <td className="px-6 py-4">{product.total}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={4} className="p-4 text-right font-semibold">Sub Total</td>
                                    <td className="px-6 py-4">{data?.totalAmount}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Payment Details */}
                    <table className="w-full text-sm text-center">
                        <thead className="text-xs text-gray-900 uppercase border dark:text-gray-950">
                            <tr>
                                <th>Total Amount</th>
                                <th colSpan={2}>Received Amount</th>
                                <th>Due Amount</th>
                                <th>Pay in Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data?.totalAmount}</td>
                                <td>{data?.onlineAmount}</td>
                                <td>{data?.cashAmount}</td>
                                <td>{data?.dueAmount}</td>
                                <td>{formatDate(data?.dueDate)}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Footer */}
                    <div className="flex flex-col md:flex-row justify-between pb-1 px-5">
                        <div className="mb-4 md:mb-0">
                            <h1 className="text-[17px] text-green-900">Terms and conditions</h1>
                            <p className="text-xs">
                                Please send payment within 30 days of receiving this invoice. There will be a 10% interest charge per month on late invoices.
                            </p>
                        </div>
                        <div className="text-right">
                            <h1 className="text-[18px]">Krishna Patidar</h1>
                            <p className="border-b-2">Administrator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowInvoice;
