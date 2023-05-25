import React from "react";
import { RouteType } from "./config";
// Lazy load the components
const OrderList = React.lazy(() => import("../components/order/OrderList"));
const EditProduct = React.lazy(
  () => import("../components/product/EditProduct")
);
const FormProduct = React.lazy(
  () => import("../components/product/FormProduct")
);
const Overview = React.lazy(() => import("../components/product/Overview"));
const Customer = React.lazy(() => import("../pages/Customer"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Order = React.lazy(() => import("../pages/Order"));
const Product = React.lazy(() => import("../pages/Product"));
const Review = React.lazy(() => import("../pages/Review"));
const OrderDetail = React.lazy(() => import("../components/order/OrderDetail"));

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
    child: [
      { path: "", element: <Overview /> },
      { path: "declaration", element: <FormProduct /> },
      { path: "edit/:id", element: <EditProduct /> },
    ],
  },
  {
    path: "/orders",
    element: <Order />,
    sidebarProps: {
      displayText: "Orders",
      icon: <i className="ri-inbox-archive-fill"></i>,
    },
    child: [
      { path: "detail/:id", element: <OrderDetail /> },
      { path: "", element: <OrderList /> },
    ],
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
