import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import OrderItem from "./OrderItem";
import { getOrdersStart } from "../../features/slice/orderSlice";

const OrderList = () => {
  const { orders, isLoading } = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOrdersStart());
  }, [dispatch]);

  const renderListOrder = () => {
    if (isLoading) {
      return (
        <tr className="animate-pulse bg-white dark:bg-gray-800 dark:border-gray-700 ">
          <th scope="row" colSpan={5} className="px-6 py-4 text-center">
            Loading ...
          </th>
        </tr>
      );
    }

    if (orders.length === 0) {
      return (
        <tr className=" bg-white dark:bg-gray-800 dark:border-gray-700 ">
          <th scope="row" colSpan={5} className="px-6 py-4 text-center">
            No orders found
          </th>
        </tr>
      );
    }

    return orders.map((order) => {
      return (
        <OrderItem
          key={order._id}
          date={order.createdAt}
          id={order._id}
          status={order.status}
          total={order.total}
          email={order.email}
        />
      );
    });
  };

  return (
    <>
      <div className="  flex items-center justify-between">
        <div>
          <p className="text-white self-center text-xl font-semibold whitespace-nowrap pb-4">
            Order
          </p>
        </div>
      </div>
      <div className="sm:flex block justify-between">
        <div className="pb-3 sm:inline-block block sm:w-72">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search product name..."
              required
            />
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md rounded-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Customer
              </th>

              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Date</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Total
                  <button type="button" title="button Gd">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </button>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>{renderListOrder()}</tbody>
        </table>
      </div>
    </>
  );
};

export default OrderList;
