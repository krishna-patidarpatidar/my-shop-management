import { Link } from 'react-router-dom';

const Dashboard = ({ timeBillRange, timeTransactionRange, transactionData, customerCount,venderCount, onTimeRangeBillChange,onTimeRangeTransactionChange,billCoutntData }:any) => {

  // Handle dynamic data - transactions and customer count
  const totalSales = transactionData ?.data  ?? 0;  // Ensure dynamic total amount
  const totalCustomers = customerCount ?.data ?.count ?? 0;  // Ensure dynamic customer count
  const totalVender = venderCount ?.data ?.count ?? 0;  // Ensure dynamic customer count
const totalBills=billCoutntData?.data ?? 0
  return (
    <div className="grid grid-cols-1 gap-4 mt-40 p-4 md:grid-cols-2 items-start mx-auto lg:grid-cols-4">

      {/* Total Sales */}
      <div className="p-4 bg-white shadow rounded-lg flex justify-between">
        <div>
          <h3 className="text-lg md:text-xl text-green-800 font-semibold">Total Sales</h3>
          <p className="text-xl text-green-800 md:text-2xl">${totalSales}</p> {/* Dynamically showing total sales */}
        </div>
        <div>
          <select
            value={timeTransactionRange}
            onChange={onTimeRangeTransactionChange}
            className="px-5 md:px-[30px] lg:px-[45px] py-1 rounded-xl text-2xl border"
          >
            <option value="day">day</option>
            <option value="week">week</option>
            <option value="month">month</option>
            <option value="year">year</option>
          </select>
        </div>
      </div>

      {/* New Bill */}
      <div className="p-4 bg-white shadow flex justify-between rounded-lg">
        <div>
          <h3 className="text-lg md:text-xl font-semibold">New Bill</h3>
          <p className="text-xl md:text-2xl">{totalBills}</p>
        </div>
        <div>
          <select
            value={timeBillRange}
            onChange={onTimeRangeBillChange}
            className="px-5 md:px-[30px] lg:px-[45px] py-1 rounded-xl text-2xl border"
          >
            <option value="day">day</option>
            <option value="week">week</option>
            <option value="month">month</option>
            <option value="year">year</option>
          </select>
        </div>
      </div>

      {/* Customers */}
      <div className="p-4 bg-white shadow rounded-lg">
        <Link to={'/admin/customer'}>
          <h3 className="text-xl font-semibold">Customers</h3>
          <p className="text-2xl">{totalCustomers}</p> {/* Dynamically showing customer count */}
        </Link>
      </div>

      {/* Vendors */}
      <div className="p-4 bg-white shadow rounded-lg">
        <Link to={'/admin/vendors'}>
          <h3 className="text-xl font-semibold">Vendors</h3>
          <p className="text-2xl">{totalVender}</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
