import React from 'react';

const TableSkeleton: React.FC = (rows,cols) => {
  const Rows = rows;  // Adjust the number of skeleton rows
  const columns = cols;  // Adjust the number of skeleton columns

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr>
          {[...Array(columns)].map((_, index) => (
            <th key={index} className="px-4 py-2">
              <div className="bg-gray-200 h-4 rounded-md w-24 animate-pulse"></div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(Rows)].map((_, rowIndex) => (
          <tr key={rowIndex}>
            {[...Array(columns)].map((_, colIndex) => (
              <td key={colIndex} className="border px-4 py-2">
                <div className="bg-gray-200 h-6 rounded-md w-full animate-pulse"></div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableSkeleton;
