import React, { useState } from 'react';
import AtmButtonField from '../../../Components/atoms/Button/AtmButtonField';
import { Link, Outlet } from 'react-router-dom';
import TableSkeleton from '../../../Components/Molecule/Skeleton/TableSkeleton';


type Category = {
  _id: string;
  name: string;
 
};

type Props = {
  categoryData: Category[]; // Updated prop name and structure
  deleteCategory: (id: string) => void;
};

const CategoryListForm: React.FC<Props> = ({ categoryData, deleteCategory ,isLoading}:any) => {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(true);
   
};


  return (
    <div className="container mx-auto p-4 mt-40 text-xl relative">
      {/* Overlay for Edit/Add Modal */}
      {edit && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="p-6 bg-white rounded-lg mt-40 shadow-lg relative z-20 w-[80%] max-w-md">
           
            {/* Render the add/edit component via the Outlet */}
            <Outlet context={{setEdit}} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`${edit ? 'blur-sm pointer-events-none' : ''}`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Category List</h1>
          <Link to={'add-category'}>
            <AtmButtonField
              onClick={handleEdit}
              label="Add New"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-all duration-200"
            />
          </Link>
        </div>

        {/* Mobile Responsive Table */}
        <div className="overflow-hidden shadow-lg rounded-lg bg-white">
          { isLoading ? < TableSkeleton/> : <table className="min-w-full table-auto text-left hidden md:table">
            <thead className="bg-blue-600 text-white uppercase">
              <tr>
                <th className="py-3 px-6">Category Name</th>
                
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {categoryData?.length > 0 ? (
                categoryData.map((category:any) => (
                  <tr key={category._id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-6">{category.categoryName}</td>
                
                    <td className="py-3 px-6">
                      <div className="flex gap-2">
                        <Link
                          to={`edit-category/${category._id}`}
                        >
                          <AtmButtonField
                            label="Edit"
                            onClick={handleEdit}
                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-400 transition duration-200"
                          />
                        </Link>
                        <AtmButtonField
                          label="Delete"
                          onClick={() => deleteCategory(category._id)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 transition duration-200"
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-3 px-6 text-center">
                    No category available
                  </td>
                </tr>
              )}
            </tbody>
          </table> }

          {/* Mobile View */}
          <div className="md:hidden">
            {categoryData?.length > 0 ? (
              categoryData.map((category:any) => (
                <div key={category._id} className="border-b p-4 flex flex-col gap-2 mb-4 bg-gray-50">
                  <div>
                    <span className="font-bold text-sm text-gray-700">Category Name:</span>
                    <span className="text-sm text-gray-900 ml-2">{category.categoryName}</span>
                  </div>
                 
                  <div className="flex gap-2 mt-2">
                    <Link
                      to={`edit-category/${category._id}`}
                    >
                      <AtmButtonField
                        onClick={handleEdit}
                        label="Edit"
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-400 transition duration-200 w-full"
                      />
                    </Link>
                    
                    <AtmButtonField
                      label="Delete"
                      onClick={() => deleteCategory(category._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 transition duration-200 w-full"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-6">No category available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryListForm;
