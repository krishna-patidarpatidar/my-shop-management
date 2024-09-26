import React from 'react';
import { useGetProductsQuery } from '../../../Service/Products/ProductSlice';
import ProductList from './ProductList';

type Props = {};

const ProductListWrapper: React.FC<Props> = () => {
  const token=localStorage.getItem("auth")
  const { data, isError, isLoading }:any = useGetProductsQuery({token});
console.log(data)
  // Handle loading state
  if (isLoading) {
    return <p>Loading products...</p>;
  }

  // Handle error state
  if (isError) {
    return <p>Error loading products.</p>;
  }


  return (
    <div>
      {/* Pass the data safely to ProductList */}
      <ProductList productData={data?.data} />
    </div>
  );
};

export default ProductListWrapper;
