// import {  useGetAllInvoiceQuery } from '../../../Service/InvoiceApi/InvoiceApiSlice';
import TransactionsListForm from './TransactionsListForm';


const TransactionsListWrapper = () => {
    // const token = localStorage.getItem("auth");
    // const { data, isError, isLoading } = useGetAllInvoiceQuery({ token });
    // console.log(data)
    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (isError) {
    //     return <div>Error fetching data</div>;
    // }

    // const handleDelete = async (billId) => {
    //     try {
    //         await DeleteBill({ INVNo: billId, token });
    //         console.log('Customer deleted successfully');
    //         // Optionally, you can refetch the customer list or remove the deleted customer from the local state
    //     } catch (error) {
    //         console.error('Error deleting customer:', error);
    //     }
    // };
    return (
        <TransactionsListForm />
    )
}

export default TransactionsListWrapper