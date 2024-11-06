import { useState } from 'react';
import { useGetBillsCountQuery, useGetCustomerCountsQuery, useGetTransactionQuery, useGetVendersCountQuery } from '../../Service/Dashbord/DashbordSlice';
import Dashboard from './Dashboard';

const DashbordWrapper = () => {

  // Local state for the time range
  const [timeBillRange, setTimeBillRange] = useState('day');
  const [timeTransactionRange, setTimeTransactionRange] = useState('day');

  // Fetch transaction and customer count based on time range
  const { data: transactionData } = useGetTransactionQuery({ time: timeTransactionRange });
  const { data: customerCountData } = useGetCustomerCountsQuery('');
  const { data: venderCountData } = useGetVendersCountQuery('');
  const {data: billCoutntData}=useGetBillsCountQuery({time:timeBillRange})
  // Handle time range change
  const handleTimeRangeTransactionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeTransactionRange(event.target.value);
  };
  const handleTimeRangeBillChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeBillRange(event.target.value);
  };

  return (
    <div>
      <Dashboard
        timeBillRange={timeBillRange}  // Passing timeRange to Dashboard
        timeTransactionRange={timeTransactionRange}  // Passing timeRange to Dashboard
        transactionData={transactionData}  // Passing fetched transaction data
        customerCount={customerCountData}  // Passing fetched customer count
        venderCount={venderCountData}  // Passing fetched vender count
        onTimeRangeBillChange={handleTimeRangeBillChange}  // Passing the time range change handler
        onTimeRangeTransactionChange={handleTimeRangeTransactionChange}  // Passing the time range change handler
        billCoutntData={billCoutntData}
      />
    </div>
  );
};

export default DashbordWrapper;
