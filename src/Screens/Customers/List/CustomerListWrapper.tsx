import React from 'react';
import { useCustomerDeleteMutation, useGetCustomerQuery } from '../../../Service/CustomerApi/CustomerSlice';
import CustomerList from './CustomerList';
import Swal from 'sweetalert2';
import TableSkeleton from '../../../Components/Molecule/Skeleton/TableSkeleton';

const CustomerListWrapper: React.FC = () => {

  const { data :customerdata, isError, isLoading }: any = useGetCustomerQuery('');
  const [deleteCustomerById] = useCustomerDeleteMutation();
    

  // Handle customer deletion
  const handleDelete = async (customerId: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to delete this customer?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteCustomerById({ id: customerId});
          Swal.fire('Deleted!', 'The customer has been deleted.', 'success');
        } catch (error) {
          Swal.fire('Error!', 'There was a problem deleting the customer.', 'error');
        }
      }
    });
  };
 

  // if (isLoading) return <div>Loading...</div>;
  if (isError) return <div className='mt-60 ml-60'>Error fetching customers</div>;
  return (
    <div>
      {isLoading ? <TableSkeleton /> : <CustomerList customerData={customerdata?.data || []}
        deleteCustomer={handleDelete} isLoading={isLoading}  />}
    </div>
  );
};

export default CustomerListWrapper;
