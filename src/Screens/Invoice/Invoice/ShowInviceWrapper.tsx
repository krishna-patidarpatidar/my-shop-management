import  { useRef } from 'react';
import ShowInvoice from './ShowInvoice';
import { useParams } from 'react-router-dom';
import { useGetCustomerInvoiceQuery } from '../../../Service/InvoiceApi/InvoiceApiSlice';
import { useReactToPrint } from 'react-to-print';



const ShowInviceWrapper = () => {
  const contentToPrint = useRef(null);
    const token = localStorage.getItem("auth");
    const { id } = useParams();
    const { data, isError, isLoading } = useGetCustomerInvoiceQuery({ token, id });
    
    
    console.log(data, "data bill");

    const handlePrint = useReactToPrint({
        documentTitle: "Print This Document",
        content: () => contentToPrint.current,
        onBeforePrint: () => console.log("before printing..."),
        onAfterPrint: () => console.log("after printing..."),
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
            data={data?.data} 
            handlePrint={handlePrint} 
            contentToPrint={contentToPrint} 
        />
    );
}

export default ShowInviceWrapper;
