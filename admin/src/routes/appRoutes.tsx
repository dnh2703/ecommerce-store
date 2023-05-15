import AddProduct from "../components/common/AddProduct";
import Customer from "../pages/Customer";
import Dashboard from "../pages/Dashboard";
import Order from "../pages/Order";
import Product from "../pages/Product";
import Review from "../pages/Review";
import { RouteType } from "./config";

const appRoutes: RouteType[] = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    sidebarProps: {
      displayText: "Dashboard",
      icon: <i className="ri-bar-chart-2-fill"></i>,
    },
  },
  {
    path: "/products",
    element: <Product />,
    sidebarProps: {
      displayText: "Products",
      icon: <i className="ri-shopping-cart-2-fill"></i>,
    },
  },
  {
    path: "/orders",
    element: <Order />,
    sidebarProps: {
      displayText: "Orders",
      icon: <i className="ri-inbox-archive-fill"></i>,
    },
  },
  {
    path: "/customers",
    element: <Customer />,
    sidebarProps: {
      displayText: "Customers",
      icon: <i className="ri-group-2-fill"></i>,
    },
  },
  {
    path: "/review",
    element: <Review />,
    sidebarProps: {
      displayText: "Reviews",
      icon: <i className="ri-bard-fill"></i>,
    },
  },
];

export default appRoutes;
