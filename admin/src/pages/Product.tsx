import Breadcrumb from "../components/common/Breadcrumb";
import { Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="md:p-4">
      <Breadcrumb />

 
      <Outlet />
    </div>
  );
};

export default Product;
