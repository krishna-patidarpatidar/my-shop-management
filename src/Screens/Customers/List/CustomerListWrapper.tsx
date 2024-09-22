import React from 'react';
import { useCustomerDeleteMutation, useGetCustomerQuery } from '../../../Service/CustomerApi/CustomerSlice';
import CustomerList from './CustomerList';

const CustomerListWrapper: React.FC = () => {
  const token = localStorage.getItem("auth");
  
  const { data, isError, isLoading } = useGetCustomerQuery({ token });
  const [deleteCustomerById] = useCustomerDeleteMutation();
console.log(data)
  // Handle customer deletion
  const handleDelete = async (customerId) => {
    try {
      await deleteCustomerById({ id: customerId, token });
      console.log('Customer deleted successfully');
      // Optionally, you can refetch the customer list or remove the deleted customer from the local state
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching customers</div>;
   const customerData=data.data;
  return (
    <div>
      <CustomerList customerData={customerData || []} deleteCustomer={handleDelete} />
    </div>
  );
};

export default CustomerListWrapper;
