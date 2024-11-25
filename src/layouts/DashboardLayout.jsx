import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='min-h-screen w-full'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={`wrapper  ${sidebarOpen ? "expanded" : ""}`}>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className='p-6 dark:bg-[#0f172a] bg-[#f8fafc] min-h-screen'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
