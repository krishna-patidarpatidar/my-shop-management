import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import AtmTextField from '../../../Components/atoms/Input/AtmTypeText/AtmTextField';
const PammantInForm = () => {
    const [receivedAmount, setReceivedAmount] = useState(0);
    const remainingAmount = 50000;
    const dueAmount = Math.max(remainingAmount - receivedAmount, 0);

    const contentToPrint = useRef(null);
    const handlePrint = useReactToPrint({
        documentTitle: "Print This Document",
        onBeforePrint: () => console.log("before printing..."),
        onAfterPrint: () => console.log("after printing..."),
        removeAfterPrint: true,
    });
    return (
    <div className='mt-40'>
        <div className='text-center'>
            <button
                onClick={() => {
                    handlePrint(null, () => contentToPrint.current);
                }}> PRINT</button>
        </div>


        <div ref={contentToPrint} className="max-w-[500px] mx-auto p-4 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between border-b-4 border-gray-300 py-4">
                <div className="flex items-center">
                    <div className="max-w-[50px]">
                        <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/1/10/Goddess_Maheshwari_%28%E0%A4%A6%E0%A5%87%E0%A4%B5%E0%A5%80_%E0%A4%AE%E0%A4%B9%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%80%29.png" alt="Logo" />
                    </div>
                    <div className="ml-4">
                        <h1 className="text-2xl md:text-4xl font-bold">Maa Bhavani</h1>
                        <h5 className="text-lg md:text-xl font-medium">Saree Center</h5>
                    </div>
                </div>
                <div className=" items-center">

                    <h1 className="text-2xl md:text-4xl font-bold">Invoice</h1>
                </div>
            </div>

            <div className="flex justify-between mt-6">
                <div>
                    <h1 className="font-semibold">INVOICE TO:</h1>
                    <h1 className="text-xl font-semibold">KRISHNA PATIDAR</h1>
                    <h1 className="text-sm">Mo.No: 8251012624</h1>
                </div>
                <div className="text-right">
                    <p>Date: 11/11/2024</p>
                    <p>Invoice No: 32145695</p>
                </div>
            </div>

            <div className="mt-6 space-y-2">
                <h1 className="font-semibold">Remaining Amount: {remainingAmount}</h1>
                <div className="flex items-center">
                    <label htmlFor="receivedAmount" className="mr-2 font-semibold">Received Amount:</label>
                    <AtmTextField
                    name='number'
                        type="number"
                        value={receivedAmount}
                        onChange={(e) => setReceivedAmount(parseFloat(e.target.value) || 0)}
                        className="px-3 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
                    />
                </div>
                <h1 className="font-semibold">Due Amount: {dueAmount}</h1>
            </div>

            <div className="mt-6 text-center">
                <button className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition">
                    Submit
                </button>
            </div>
        </div>
    </div>
    );
}

export default PammantInForm;
