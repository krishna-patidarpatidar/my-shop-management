import { IoNotifications } from "react-icons/io5";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex fixed z-50 left-0 right-0 top-0 justify-between bg-slate-400 p-4 items-center">
        {/* Logo */}
        <div className="lg:max-w-[110px]">
          <img
            className="h-26 w-20"
            src="https://upload.wikimedia.org/wikipedia/commons/1/10/Goddess_Maheshwari_%28%E0%A4%A6%E0%A5%87%E0%A4%B5%E0%A5%80_%E0%A4%AE%E0%A4%B9%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%80%29.png"
            alt="Logo"
          />
          {/* Toggle button for mobile */}
          <button className="text-white md:hidden" onClick={toggleSidebar}>
            ☰
          </button>
        </div>

        {/* Title */}
        <div className="max-w-[250px] md:max-w-[500px] w-full text-center bg-[#401B0C] text-white p-2 rounded-2xl">
          <h1 className="italic w-full font-black text-lg md:text-3xl 2xl:text-6xl">MAA BHAVANI</h1>
          <h3 className="italic w-full font-bold text-lg md:text-2xl 2xl:text-4xl">SAREE CENTER</h3>
        </div>

        {/* Notifications */}
        <div className="flex text-[#401B0C] text-4xl">
          <IoNotifications />
          <sup className="right-3 top-1 text-red-800">0</sup>
        </div>
      </div>

      {/* SideBar will always be shown on desktop */}
      <div className="z-30 absolute md:fixed">
        <SideBar  isSidebarOpen={isSidebarOpen} closeSidebar={toggleSidebar}/>
      </div>

    </>
  );
};

export default Header;
