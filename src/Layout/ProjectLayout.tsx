import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Molecule/Header/Header';
import SideBar from '../Components/Molecule/SideBar/SideBar';

const ProjectLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header toggle={toggleSidebar} />
      <div className="flex flex-1">
        <div className=' z-20 absolute mt-[122px] md:mt-0 '>
          <SideBar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        </div>
        <main className="flex-1 p-4 h-auto w-full ">
          <Outlet />
        </main>
      </div>
    </div>

    // <div className=" max-h-screen relative">
    //   <Header toggle={toggleSidebar} />

    //   <div className="md:flex flex-1 ">
    //     <div className='fixed z-50 top-[156px] md:top-[148px]'>
    //       <SideBar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />

    //     </div>
    //     <main className="md:flex-1 p-4 md:ml-40 mt-[140px] ">
    //       <Outlet />
    //     </main>
    //   </div>

    //   {/* Overlay to disable all screens except the sidebar */}
    //   {isSidebarOpen && (
    //     <div className="fixed inset-0 bg-black opacity-50 z-10 pointer-events-none"></div>
    //   )}
    // </div>
  );
};

export default ProjectLayout;