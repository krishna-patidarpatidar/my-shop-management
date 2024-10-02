import React, { useState } from 'react';
import AtmButtonField from '../../../Components/atoms/Button/AtmButtonField';
import { Link, Outlet } from 'react-router-dom';
import { useGetCategoryQuery } from '../../../Service/Category/CategoryApiSlice';

type Product = {
  _id: string;
  name: string;
  sellingPrice: number;
  productCode: string;
};

type Props = {
  productData: Product[];
  deleteProduct: (id: string) => void;
  isLoading: boolean;
};

const ProductList: React.FC<Props> = ({ productData,deleteProduct }) => {
  const [edit, setEdit] = useState(false);
  const token = localStorage.getItem('auth');
  const { data, isLoading } = useGetCategoryQuery({ token })

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <div className="container mx-auto p-4 mt-40 relative">
      {edit && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="p-6 bg-white rounded-lg shadow-lg mt-40 relative z-20 w-[80%] max-w-md">
            <Outlet context={{ setEdit }} />
          </div>
        </div>
      )}

      <div className={`${edit ? 'blur-sm pointer-events-none' : ''}`}>
        <div className="md:flex sm:flex-col justify-between items-center mb-6">
          <h1 className="text-2xl  font-bold text-gray-800">Product List</h1>
          <div className='md:flex sm:flex-col  gap-1'>
            <input
              type='search'
              placeholder='search hear'
              className='border text-xl pl-2 rounded'

            />
            <div className="md:mb-6  sm:mb-4">
              {isLoading ? (
                <div>Loading categories...</div>
              ) : (
                <select className='py-3 px-7'
         
                >
                  <option value="">Select a category</option>
                  {data?.data.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              )}
             
            </div>
            <Link to={'add-product'}>
              <AtmButtonField
                onClick={handleEdit}
                label="Add New"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-all duration-200"
              />
            </Link>
          </div>
        </div>

        <div className="overflow-hidden shadow-lg rounded-lg bg-white">
          <table className="min-w-full table-auto text-left hidden md:table">
            <thead className="bg-blue-600 text-white uppercase">
              <tr>
                <th className="py-3 px-6">Product Category</th>
                <th className="py-3 px-6">Product Name</th>
                <th className="py-3 px-6">Selling Price</th>
                <th className="py-3 px-6">Product Code</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {productData?.length > 0 ? (
                productData.map((product) => (
                  <tr key={product._id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-6">{product.categoryId.categoryName}</td>
                    <td className="py-3 px-6">{product.name}</td>
                    <td className="py-3 px-6">{product.sellingPrice}</td>
                    <td className="py-3 px-6">{product.productCode}</td>
                    <td className="py-3 px-6">
                      <div className="flex gap-2">
                        <Link
                          to={`edit-product/${product._id}`}
                        >
                          <AtmButtonField
                            label="Edit"
                            onClick={handleEdit}
                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-400 transition duration-200"
                          />
                        </Link>
                        <AtmButtonField
                          label="Delete"
                          onClick={() => deleteProduct(product._id)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 transition duration-200"
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-3 px-6 text-center">
                    No products available
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Mobile View */}
          <div className="md:hidden">
            {productData?.length > 0 ? (
              productData.map((product) => (
                <div key={product._id} className="border-b p-4 flex flex-col gap-2 mb-4 bg-gray-50">
                  <div>
                    <span className="font-bold text-sm text-gray-700">Product Name:</span>
                    <span className="text-sm text-gray-900 ml-2">{product.name}</span>
                  </div>
                  <div>
                    <span className="font-bold text-sm text-gray-700">Selling Price:</span>
                    <span className="text-sm text-gray-900 ml-2">{product.sellingPrice}</span>
                  </div>
                  <div>
                    <span className="font-bold text-sm text-gray-700">Product Code:</span>
                    <span className="text-sm text-gray-900 ml-2">{product.productCode}</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Link
                      to={`edit-product/${product._id}`}
                    >
                      <AtmButtonField
                        onClick={handleEdit}
                        label="Edit"
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-400 transition duration-200 w-full"
                      />
                    </Link>
                    <AtmButtonField
                      label="Delete"
                      onClick={() => deleteProduct(product._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 transition duration-200 w-full"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-6">No products available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
