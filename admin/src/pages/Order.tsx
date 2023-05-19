import { Outlet } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";

const Order = () => {
  return (
    <div className="md:p-4">
      <Breadcrumb />

      <Outlet />
    </div>
  );
};

export default Order;
