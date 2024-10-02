import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (

    <div className="grid grid-cols-1 gap-4 mt-40 p-4 md:grid-cols-2 items-start lg:grid-cols-4">
      <div className="p-4 bg-white shadow rounded-lg flex justify-between">
        <p>
          <h3 className="text-lg md:text-xl font-semibold">Total Sales</h3>
          <p className="text-xl md:text-2xl">$12,345</p>
        </p>
        <p>
          <select name="" id="" className='px-5 md:px-[30px] lg:px-[45px] py-1 rounded-xl text-2xl border'>
            <option value="">day</option>
            <option value="">week</option>
            <option value="">month</option>
            <option value="">year</option>
          </select>
        </p>
      </div>
      <div className="p-4 bg-white shadow flex justify-between rounded-lg">
        <p>
          <h3 className= "text-lg md:text-xl font-semibold">New Bill</h3>
          <p className="text-xl md:text-2xl">50</p>
        </p>
        <p>
          <select name="" id="" className='px-5 md:px-[30px] lg:px-[45px] py-1 rounded-xl text-2xl border'>
            <option value="">day</option>
            <option value="">week</option>
            <option value="">month</option>
            <option value="">year</option>
          </select>
        </p>
      </div>
      <div className="p-4 bg-white shadow rounded-lg">
        <Link to={'/admin/customer'}>
          <h3 className="text-xl font-semibold">Customers</h3>
          <p className="text-2xl">1,200</p>
        </Link>
      </div>
      <div className="p-4 bg-white shadow rounded-lg">
        <Link to={'/admin/vendors'}>
          <h3 className="text-xl font-semibold">Vendors</h3>
          <p className="text-2xl">300</p>
        </Link>
      </div>
      
     
    </div>
  )
}

export default Dashboard