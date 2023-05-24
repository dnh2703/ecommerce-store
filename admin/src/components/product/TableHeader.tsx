import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { filterCategoriesAction } from "../../features/slice/productSlice";

type TableHeaderProps = {
  setQ: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const TableHeader = ({ setQ, setCurrentPage }: TableHeaderProps) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { filterCategories } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleCategory = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      dispatch(filterCategoriesAction([...filterCategories, value]));
    } else {
      const removeValue = filterCategories.filter((item) => item !== value);
      dispatch(filterCategoriesAction([...removeValue]));
    }
  };

  return (
    <div className=" mx-auto w-full ">
      {/* Start coding here */}
      <div className="relative bg-white shadow-md dark:bg-gray-800">
        <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  onChange={(e) => {
                    setQ(e.target.value);
                    setCurrentPage(1);
                  }}
                  required
                />
              </div>
            </form>
          </div>
          <div className="z-10 flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
            <button
              type="button"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => navigate("/products/declaration")}
            >
              <svg
                className="h-3.5 w-3.5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                />
              </svg>
              Add product
            </button>
            <div className="flex items-center w-full space-x-3 md:w-auto">
              <button
                id="filterDropdownButton"
                data-dropdown-toggle="filterDropdown"
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
                onClick={toggleDropdown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4 mr-2 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clipRule="evenodd"
                  />
                </svg>
                Filter
                <svg
                  className="-mr-1 ml-1.5 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                id="filterDropdown"
                className={`z-10 right-0 top-10 ${
                  isDropdownOpen ? "absolute" : "hidden"
                }
                } w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700`}
              >
                <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                  Category
                </h6>
                <ul
                  className="space-y-2 text-sm"
                  aria-labelledby="dropdownDefault"
                >
                  <li className="flex items-center">
                    <input
                      id="bedroom"
                      name="category"
                      value="bedroom"
                      type="checkbox"
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      onChange={handleCategory}
                    />
                    <label
                      htmlFor="bedroom"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Bedroom
                    </label>
                  </li>
                  <li className="flex items-center">
                    <input
                      id="office"
                      type="checkbox"
                      name="category"
                      value="office"
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      onChange={handleCategory}
                    />
                    <label
                      htmlFor="office"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Office
                    </label>
                  </li>
                  <li className="flex items-center">
                    <input
                      id="kitchen"
                      type="checkbox"
                      name="category"
                      value="kitchen"
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      onChange={handleCategory}
                    />
                    <label
                      htmlFor="kitchen"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Kitchen
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
