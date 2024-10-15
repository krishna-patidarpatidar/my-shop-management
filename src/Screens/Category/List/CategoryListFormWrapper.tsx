import React from 'react';
import Swal from 'sweetalert2';
import Hourglass from '../../../Components/Molecule/Skeleton/TableSkeleton';
import CategoryListForm from './CategoryListForm';
import { useCategoryDeleteMutation, useGetCategoryQuery } from '../../../Service/Category/CategoryApiSlice';

const CategoryListFormWrapper: React.FC = () => {

  const { data, isError, isLoading }: any = useGetCategoryQuery('');
  const [deleteCategoryById] = useCategoryDeleteMutation();

  // Handle customer deletion
  const handleDelete = async (categoryId: string) => {
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
          await deleteCategoryById({ id: categoryId});
          Swal.fire('Deleted!', 'The category has been deleted.', 'success');
        } catch (error) {
          Swal.fire('Error!', 'There was a problem deleting the category.', 'error');
        }
      }
    });
  };

  // if (isLoading) return <div>Loading...</div>;
  if (isError) return <div className='mt-60 ml-60'>Error fetching customers</div>;
  return (
    <div>
{isLoading ? <Hourglass /> : <CategoryListForm categoryData={data?.data || []} 
      deleteCategory={handleDelete} isLoading={isLoading} />}
    </div>
  );
};

export default CategoryListFormWrapper;
