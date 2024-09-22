import React from 'react';
import { usevenderDeleteMutation, useGetvenderQuery } from '../../../Service/venderApi/venderSlice';
import VenderList from './VenderList';

const venderListWrapper: React.FC = () => {
  const token = localStorage.getItem("auth");
  
  const { data, isError, isLoading } = useGetvenderQuery({ token });
  const [deletevenderById] = usevenderDeleteMutation();
console.log(data)
  // Handle vender deletion
  const handleDelete = async (venderId:any) => {
    try {
      await deletevenderById({ id: venderId, token });
      console.log('vender deleted successfully');
      // Optionally, you can refetch the vender list or remove the deleted vender from the local state
    } catch (error) {
      console.error('Error deleting vender:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching venders</div>;
   const venderData=data.data;
  return (
    <div>
      <VenderList venderData={venderData || []} deletevender={handleDelete} />
    </div>
  );
};

export default venderListWrapper;
