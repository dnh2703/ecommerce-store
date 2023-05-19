import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import orderApi from "../../api/modules/orderApi";
import { IOrder } from "../../interfaces/order";
import moment from "moment";

const OrderDetail = () => {
  const { id } = useParams();

  const [order, setOrder] = useState<IOrder>();

  console.log(order);

  useEffect(() => {
    orderApi
      .getSingleOrder(id)
      .then((res) => {
        setOrder(res.data.order);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <div className="  flex items-center justify-between">
        <div>
          <p className="text-white self-center text-xl font-semibold whitespace-nowrap pb-4">
            Order Detail
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="flex flex-col lg:col-span-2  justify-center pt-4 pb-1 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-white font-semibold px-4">
            Order No : #{order?._id}
          </p>
          <span className="mx-4 capitalize inline-flex items-center justify-center bg-yellow-100 mt-2 mb-4 text-yellow-800 text-xs font-medium w-16 h-5 rounded-full dark:bg-yellow-800 dark:text-yellow-200">
            pending
          </span>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Create at
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Address
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white  dark:bg-gray-800 ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {moment(order?.createdAt).format("LLL")}
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {order?.userName}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {order?.email}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${order?.total}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col lg:col-span-1 justify-between  p-4 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-white font-semibold">Price</p>
          <div className="overflow-x-auto flex items-center justify-center">
            <table>
              <tbody>
                <tr className=" border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-1 text-sm text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Sub total
                  </td>
                  <td className="text-sm px-6 py-1 text-white whitespace-nowrap">
                    : ${order?.subtotal}
                  </td>
                </tr>
                <tr className=" border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-1 text-sm text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Shipping
                  </td>
                  <td className="text-sm px-6 py-1 text-white whitespace-nowrap">
                    : ${order?.shippingFee}
                  </td>
                </tr>
                <tr className=" border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-1 text-sm text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Tax
                  </td>
                  <td className="text-sm px-6 py-1 text-white whitespace-nowrap">
                    : ${order?.tax}
                  </td>
                </tr>
                <tr className=" border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-1 font-bold text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Total
                  </td>
                  <td className="px-6 py-1 text-white font-semibold whitespace-nowrap">
                    : ${order?.total}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="p-4 text-base font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Order items
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Product image
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Qty
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Price
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {order?.orderItems.map((item, index, arr) => {
              if (index === arr.length - 1) {
                return (
                  <tr key={item._id} className="bg-white dark:bg-gray-800">
                    <th className="w-36 p-4">
                      <img
                        className="w-full h-full"
                        src={item.image}
                        alt={item.name}
                      />
                    </th>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.amount}</td>
                    <td className="px-6 py-4">${item.price}</td>
                    <td className="px-6 py-4">${item.price * item.amount}</td>
                  </tr>
                );
              } else {
                return (
                  <tr
                    key={item._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="w-36 p-4">
                      <img
                        className="w-full"
                        src={item.image}
                        alt={item.name}
                      />
                    </td>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.amount}</td>
                    <td className="px-6 py-4">${item.price}</td>
                    <td className="px-6 py-4 text-right">
                      ${item.price * item.amount}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderDetail;