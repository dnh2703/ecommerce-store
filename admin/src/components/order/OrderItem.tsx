import moment from "moment";
import { Link } from "react-router-dom";

interface OrderItemProps {
  id: string;
  status: string;
  date: string;
  email: string;
  total: number;
}

const OrderItem = ({ status, id, date, email, total }: OrderItemProps) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4 text-blue-500 cursor-pointer">
        <Link to={`detail/${id}`}>{id}</Link>
      </td>
      <td className="px-6 py-4 text-white font-bold">{email}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        {moment(date).format("MMM Do YY")}
      </td>
      <td className="px-6 py-4">{"$" + total.toLocaleString()}</td>
      <td className="px-6 py-4">
        {
          {
            pending: (
              <span className="capitalize inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-800 dark:text-yellow-200">
                pending
              </span>
            ),
            failed: (
              <span className="capitalize inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-800 dark:text-red-200">
                failed
              </span>
            ),
            canceled: (
              <span className="capitalize inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-800 dark:text-gray-200">
                canceled
              </span>
            ),
            paid: (
              <span className="capitalize inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-800 dark:text-green-200">
                paid
              </span>
            ),
            delivered: (
              <span className="capitalize inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-800 dark:text-blue-200">
                delivered
              </span>
            ),
          }[status]
        }
      </td>
    </tr>
  );
};

export default OrderItem;
