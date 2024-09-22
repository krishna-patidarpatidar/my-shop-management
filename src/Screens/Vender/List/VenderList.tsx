import React, { useState } from 'react';
import AtmButtonField from '../../../Components/atoms/Button/AtmButtonField';
import { Link } from 'react-router-dom';

type vender = {
  _id: string;
  name: string;
  mobile: string;
  address: string;
};

type Props = {
  venderData: vender[]; // Updated prop name and structure
  deletevender: (id: string) => void;
};

const VenderList: React.FC<Props> = ({ venderData, deletevender }) => {
  const [edit, setEdit] = useState(false)
  const hendelEdit = () => {
    setEdit(true)
    console.log('editcalerur')

  }
  console.log(edit)
return (
  <div className="container mx-auto p-4">
    {edit&&(<div>hello....</div>)}
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800">vender List</h1>
      <Link to={'/add-vender'}>
        <AtmButtonField
          label="Add New"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-all duration-200"
        />
      </Link>
    </div>

    {/* Mobile Responsive Table */}
    <div className="overflow-hidden shadow-lg rounded-lg bg-white">
      <table className="min-w-full table-auto text-left hidden md:table">
        <thead className="bg-blue-600 text-white uppercase">
          <tr>
            <th className="py-3 px-6">vender Name</th>
            <th className="py-3 px-6">Mobile No.</th>
            <th className="py-3 px-6">Address</th>
            <th className="py-3 px-6">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {venderData?.length > 0 ? (
            venderData.map((vender) => (
              <tr key={vender._id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6">{vender.name}</td>
                <td className="py-3 px-6">{vender.mobile}</td>
                <td className="py-3 px-6">{vender.address}</td>
                <td className="py-3 px-6">
                  <div className="flex gap-2">
                    {/* <Link to={`/edit-vender/${vender._id}?name=${vender.name}&mobile=${vender.mobile}&address=${vender.address}`}> */}
                    <AtmButtonField
                      label="Edit"
                      onClick={() => hendelEdit(vender._id)}

                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-400 transition duration-200"
                    />
                    {/* </Link> */}
                    <AtmButtonField
                      label="Delete"
                      onClick={() => deletevender(vender._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 transition duration-200"
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="py-3 px-6 text-center">No venders available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Mobile View */}
      <div className="md:hidden">
        {venderData?.length > 0 ? (
          venderData.map((vender) => (
            <div key={vender._id} className="border-b p-4 flex flex-col gap-2 mb-4 bg-gray-50">
              <div>
                <span className="font-bold text-sm text-gray-700">vender Name:</span>
                <span className="text-sm text-gray-900 ml-2">{vender.name}</span>
              </div>
              <div>
                <span className="font-bold text-sm text-gray-700">Mobile No.:</span>
                <span className="text-sm text-gray-900 ml-2">{vender.mobile}</span>
              </div>
              <div>
                <span className="font-bold text-sm text-gray-700">Address:</span>
                <span className="text-sm text-gray-900 ml-2">{vender.address}</span>
              </div>
              <div className="flex gap-2 mt-2">
                {/* <Link to={`/edit-vender/${vender._id}?name=${vender.name}&mobile=${vender.mobile}&address=${vender.address}`}> */}
                <AtmButtonField
                  onClick={() => hendelEdit(vender._id)}
                  label="Edit"
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-400 transition duration-200 w-full"
                />
                {/* </Link> */}
                <AtmButtonField
                  label="Delete"
                  onClick={() => deletevender(vender._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 transition duration-200 w-full"
                />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-6">No venders available</div>
        )}
      </div>
    </div>
  </div>
);
};

export default VenderList;
