import { Outlet } from 'react-router-dom';
import Header from '../Components/Molecule/Header/Header';

const ProjectLayout = () => {

  return (
    <div className="">
      <Header />

     <div className='flex '>
      <span className='md:w-64'>

      </span>
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