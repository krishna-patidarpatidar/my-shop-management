// import React from 'react';

// const Hourglass: React.FC = () => {
//   return (
//     <div className="relative bg-gray-700 h-[130px] w-[130px] rounded-full mx-auto my-8">
//       <div className="absolute top-[30px] left-[40px] w-[50px] h-[70px] animate-[hourglassRotate_2s_ease-in_infinite] perspective-[1000px]">
//         <div className="absolute top-[-16px] left-[3px] w-[44px] h-[44px] bg-gray-400 rounded-full transform rotate-x-[90deg]"></div>
//         <div className="absolute top-[32px] left-[20px] w-[10px] h-[6px] bg-gray-400 opacity-50"></div>

//         {/* Hourglass caps */}
//         <div className="absolute top-0"></div>
//         <div className="absolute bottom-0"></div>

//         {/* Curves */}
//         <div className="absolute top-[32px] left-[15px] w-[6px] h-[6px] bg-gray-800 rounded-full animate-[hideCurves_2s_ease-in_infinite]"></div>
//         <div className="absolute top-[32px] left-[29px] w-[6px] h-[6px] bg-gray-800 rounded-full animate-[hideCurves_2s_ease-in_infinite]"></div>

//         {/* Sand Stream */}
//         <div className="absolute top-[35px] left-[24px] w-[3px] h-[35px] bg-white animate-[sandStream1_2s_ease-in_infinite]"></div>
//         <div className="absolute top-[36px] left-[19px] border-l-[6px] border-r-[6px] border-b-[6px] border-transparent border-b-white animate-[sandStream2_2s_ease-in_infinite]"></div>

//         {/* Sand */}
//         <div className="absolute top-[8px] left-[6px] w-[39px] h-[17px] bg-white rounded-[3px_3px_30px_30px] animate-[sandFillup_2s_ease-in_infinite]"></div>
//         <div className="absolute bottom-[45px] left-[6px] w-[38px] h-[17px] bg-white rounded-[30px_30px_3px_3px] animate-[sandDeplete_2s_ease-in_infinite]"></div>
//       </div>
//     </div>
//   );
// };

// export default Hourglass;
import React from 'react';

// Desktop Skeleton Loader for table view
export const TableSkeletonLoader: React.FC = () => (
  <>
    {[...Array(3)].map((_, index) => (
      <tr key={index} className="border-b animate-pulse">
        <td className="py-3 px-6 bg-gray-200 rounded">&nbsp;</td>
        <td className="py-3 px-6 bg-gray-200 rounded">&nbsp;</td>
        <td className="py-3 px-6 bg-gray-200 rounded">&nbsp;</td>
        <td className="py-3 px-6 bg-gray-200 rounded">&nbsp;</td>
      </tr>
    ))}
  </>
);

// Mobile Skeleton Loader for mobile view
export const MobileSkeletonLoader: React.FC = () => (
  <>
    {[...Array(3)].map((_, index) => (
      <div key={index} className="border-b p-4 mb-4 bg-gray-200 animate-pulse rounded-lg">
        <div className="h-4 bg-gray-300 mb-2 w-1/2"></div>
        <div className="h-4 bg-gray-300 mb-2 w-1/3"></div>
        <div className="h-4 bg-gray-300 mb-2 w-2/3"></div>
      </div>
    ))}
  </>
);
