import Swal from 'sweetalert2';
import { useDeleteInvoiceMutation, useGetAllInvoiceQuery } from '../../../Service/InvoiceApi/InvoiceApiSlice';
import InvoiceList from './InvoiceList';


const InvoiceListWrapper = () => {
    const [DeleteBill] = useDeleteInvoiceMutation()
    const { data, isError, isLoading } = useGetAllInvoiceQuery('');
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    
    const handleDelete = async (billId: string) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "Do you really want to delete this invoice?",
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
                await DeleteBill({ INVNo: billId });
              Swal.fire('Deleted!', 'The invoice has been deleted.', 'success');
            } catch (error) {
              Swal.fire('Error!', 'There was a problem deleting the invoice.', 'error');
            }
          }
        });
      };
     
    return (
        <InvoiceList data={data} handleDelete={handleDelete} />
    )
}

export default InvoiceListWrapper