import { useEffect, useRef, useState } from 'react';
import ShowInvoice from './ShowInvoice';
import { useParams } from 'react-router-dom';
import { useGetCustomerInvoiceQuery } from '../../../Service/InvoiceApi/InvoiceApiSlice';
import { useReactToPrint } from 'react-to-print';



const ShowInviceWrapper = () => {
    const contentToPrint = useRef(null);
    const { billId } = useParams();
    const { data, isError, isLoading } = useGetCustomerInvoiceQuery({ billId });

    const [invoiceData, setInvoiceData] = useState([])
    useEffect(() => {
        setInvoiceData(data?.data)
    }, [data])
    const handlePrint = useReactToPrint({
        documentTitle: "Print This Document",
        content: () => contentToPrint.current,
        removeAfterPrint: true,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    return (
        <ShowInvoice
            data={invoiceData}
            handlePrint={handlePrint}
            contentToPrint={contentToPrint}
        />
    );
}

export default ShowInviceWrapper;
