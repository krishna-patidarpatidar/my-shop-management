import React from 'react';
import { useGetProductsQuery } from '../../../Service/Products/ProductSlice';
import ProductList from './ProductList';

type Props = {};

const ProductListWrapper: React.FC<Props> = () => {
  const token=localStorage.getItem("auth")
  const { data, isError, isLoading } = useGetProductsQuery({token});
console.log(data)
  // Handle loading state
  if (isLoading) {
    return <p>Loading products...</p>;
  }

  // Handle error state
  if (isError) {
    return <p>Error loading products.</p>;
  }

  const Data=data.data
console.log(Data)
  return (
    <div>
      {/* Pass the data safely to ProductList */}
      <ProductList productData={Data} />
    </div>
  );
};

export default ProductListWrapper;