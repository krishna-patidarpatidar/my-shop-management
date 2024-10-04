import React from 'react';
import { useDeleteProductsMutation, useGetProductsQuery } from '../../../Service/Products/ProductSlice';
import ProductList from './ProductList';
import Swal from 'sweetalert2';

type Props = {};

const ProductListWrapper: React.FC<Props> = () => {
  const { data, isError, isLoading }: any = useGetProductsQuery();
  const [deleteProductById] = useDeleteProductsMutation()
  // Handle loading state
  if (isLoading) {
    return <p>Loading products...</p>;
  }

  // Handle error state
  if (isError) {
    return <p>Error loading products.</p>;
  }
  const handleDelete = async (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to delete this customer?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        try {
          await deleteProductById({ id});
          Swal.fire('Deleted!', 'The customer has been deleted.', 'success');
        } catch (error) {
          Swal.fire('Error!', 'There was a problem deleting the customer.', 'error');
        }
      }
    });
  };


  return (
    <div>
      {/* Pass the data safely to ProductList */}
      <ProductList productData={data?.data} deleteProduct={handleDelete} />
    </div>
  );
};

export default ProductListWrapper;
