import { IUser } from "../../interfaces/user";
import moment from "moment";

const CustomerItem = ({
  email,
  isVerified,
  name,
  role,
  _id,
  verificationToken,
  verified,
}: IUser) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="pl-3">
          <div className="text-base font-semibold">{name}</div>
          <div className="font-normal text-gray-500">{email}</div>
        </div>
      </th>
      <td className="px-6 py-4">{role}</td>
      <td className="px-6 py-4">
        {isVerified ? (
          <div className="flex items-center">
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
              True
            </span>
          </div>
        ) : (
          <div className="flex items-center">
            <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
              False
            </span>
          </div>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {verified
          ? moment(verified).format("MMMM Do YYYY, h:mm:ss a")
          : "Email is not verified"}
      </td>
    </tr>
  );
};

export default CustomerItem;
