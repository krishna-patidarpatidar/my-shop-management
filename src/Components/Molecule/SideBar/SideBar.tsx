import { useState } from 'react';
import { MdOutlineDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { RiBillLine, RiAdminFill } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import { CiAlarmOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const SideBar = ({ isSidebarOpen, closeSidebar }: any) => {
  const [showSubMenu1, setShowSubMenu1] = useState(false);
  const navigate = useNavigate()

  const Logout = () => {
    alert('you are logged out');
    localStorage.clear()
    window.location.reload();
    navigate('/')
  };

  return (
    <aside
      className={`bg-gray-800 absolute z-20 lg:top-[148px] sm:top-[122px] md:top-[133px] top-[122px] h-[750px] md:h-screen  text-white w-48 md:w-64 space-y-6  p-2   inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full '} transition-transform duration-300  ease-in-out md:relative md:translate-x-0 md:w-64 text-xl  md:text-4xl`}
      style={{
        overflowY: 'auto',
         /* Hide scrollbar for Internet Explorer and Edge */
        'scrollbarWidth': 'none', /* Hide scrollbar for Firefox */
      }}>
      <nav >
        <Link to={'deshBord'} onClick={closeSidebar}>
          <div className="flex py-2 md:py-4 gap-2 items-center  font-bold border-b-2">
            <MdOutlineDashboard />
            Dashboard
          </div>
        </Link>

        <Link to={'category'} onClick={closeSidebar}>
          <div className="flex py-2 md:py-4 gap-2 items-center font-bold border-b-2">
            <MdProductionQuantityLimits />
            Category
          </div>
        </Link>
        <Link to={'products'} onClick={closeSidebar}>
          <div className="flex py-2 md:py-4 gap-2 items-center font-bold border-b-2">
            <MdProductionQuantityLimits />
            Products
          </div>
        </Link>
        <Link to={'inventory'} onClick={closeSidebar}>
          <div className="flex py-2 md:py-4 gap-2 items-center font-bold border-b-2">
            <MdProductionQuantityLimits />
            Inventory
          </div>
        </Link>
        <Link to={'invoice'} onClick={closeSidebar}>
          <div className="flex py-2 md:py-4 gap-2 items-center font-bold border-b-2">
            <RiBillLine />
            Bills
          </div>
        </Link>
        <Link to={'transactions'} onClick={closeSidebar}>
          <div className="flex py-2 md:py-4 gap-2 items-center font-bold border-b-2">
            <RiBillLine />
           Transactions
          </div>
        </Link>

        <Link to={'customer'} onClick={closeSidebar}>
          <div className="flex py-2 md:py-4 gap-2 items-center font-bold border-b-2">
            <RiAdminFill />
            Customers
          </div>
        </Link>

        <Link to={'vender'} onClick={closeSidebar}>
          <div className="flex py-2 md:py-4 gap-2 items-center font-bold border-b-2">
            <FaRegHandshake />
            Vendors
          </div>
        </Link>

        <Link to={'alerts'} onClick={closeSidebar}>
          <div className="flex py-2 md:py-4 gap-2 items-center font-bold border-b-2">
            <CiAlarmOn />
            Alerts
          </div>
        </Link>

        <div
          className="relative"
          onMouseDown={() => setShowSubMenu1(true)}
          onMouseLeave={() => setShowSubMenu1(false)}
        >
          <div className="flex py-2 md:py-4 gap-4 font-bold">
            <IoSettingsOutline />
            Settings
          </div>

          {showSubMenu1 && (
            <ul className=" bottom-6 flex flex-col gap-1 w-[180px] text-[20px] font-normal">
              <Link to={'update-name'} onClick={closeSidebar}>
                <li className="py-2 px-4 rounded-lg bg-sky-700 hover:bg-gray-500">
                  Name Update
                </li>
              </Link>
              <Link to={'update-password'} onClick={closeSidebar}>
                <li className="py-2 px-4 rounded-lg bg-sky-700 hover:bg-gray-500">
                  Password Update
                </li>
              </Link>
              <button onClick={Logout}>
                <li className="py-2 px-4 rounded-lg bg-red-800 hover:bg-gray-500">
                  Logout
                </li>
              </button>
            </ul>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;