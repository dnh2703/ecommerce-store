import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";

const MainLayout = () => {
  return (
    <div>
      <Sidebar />

      <div className="p-4 p md:ml-64  h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
