import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import SubHeader from "../components/Header/SubHeader";
import Sidebar from "../components/Sidebar/Sidebar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  const toggleHeaderVisibility = () => {
    setHeaderVisible((prev) => !prev);
  };

  return (
    <div className='min-h-screen w-full'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={`wrapper ${sidebarOpen ? "expanded" : ""}`}>
        {/* Conditionally render Header based on headerVisible */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          headerVisible={headerVisible}
        />

        <main className='p-6 dark:bg-[#0f172a] bg-[#f8fafc] min-h-screen'>
          <SubHeader
            toggleHeaderVisibility={toggleHeaderVisibility}
            headerVisible={headerVisible}
          />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
