import React from 'react';
import Swal from 'sweetalert2';
import Hourglass from '../../../Components/Molecule/Skeleton/TableSkeleton';
import { useGetVenderQuery, useVenderDeleteMutation } from '../../../Service/VenderApi/VenderSlice';
import VenderList from './VenderList';

const VenderListWrapper: React.FC = () => {
  const token = localStorage.getItem("auth");

  const { data :venderData, isError, isLoading }: any = useGetVenderQuery({ token });
  const [deleteVenderById] = useVenderDeleteMutation();
  // Handle customer deletion
  const handleDelete = async (venderId: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to delete this vender?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteVenderById({ id: venderId, token });
          Swal.fire('Deleted!', 'The vender has been deleted.', 'success');
        } catch (error) {
          Swal.fire('Error!', 'There was a problem deleting the vender.', 'error');
        }
      }
    });
  };

  // if (isLoading) return <div>Loading...</div>;
  if (isError) return <div className='mt-60 ml-60'>Error fetching vender</div>;
  return (
    <div>
      {isLoading ? <Hourglass /> : <VenderList venderData={venderData?.data || []}
        deleteVender={handleDelete}  />}
    </div>
  );
};

export default VenderListWrapper;
