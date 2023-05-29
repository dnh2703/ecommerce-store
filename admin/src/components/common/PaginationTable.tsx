import React, { ChangeEvent } from "react";

interface PaginationTableProps {
  start: number;
  finish: number;
  totalPages: number;
  currentPage: number;
  nextPage: () => void;
  previousPage: () => void;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalItems: number;
}

const PaginationTable = React.memo(function PaginationTable({
  start,
  finish,
  currentPage,
  nextPage,
  previousPage,
  setItemsPerPage,
  setCurrentPage,
  totalPages,
  totalItems,
}: PaginationTableProps) {
  return (
    <nav
      className="flex flex-col mt-2 items-start justify-between space-y-3 md:flex-row md:items-center md:space-y-0"
      aria-label="Table navigation"
    >
      <div className="flex items-center">
        <label
          htmlFor="countries"
          className="block text-xs font-medium text-gray-900 dark:text-gray-400 whitespace-nowrap"
        >
          Rows per page
        </label>
        <select
          id="countries"
          className="bg-gray-50 border ml-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setCurrentPage(1);
            setItemsPerPage(Number.parseInt(e.target.value));
          }}
        >
          <option defaultChecked value="10">
            10
          </option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <div className="flex-nowrap flex dark:text-gray-400 text-xs gap-[3px]">
          <span className="text-white font-bold ml-3">{start + 1}</span>
          <span>-</span>
          <span className="text-white font-bold">{finish}</span>
          <span>of</span>
          <span className="text-white font-bold">{totalItems}</span>
        </div>
      </div>
      <div className="inline-flex mt-2 xs:mt-0 z-0">
        {/* Buttons */}
        <button
          type="button"
          className={`${
            currentPage === start + 1 && "cursor-not-allowed"
          } transition-all inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          onClick={previousPage}
          disabled={currentPage === start}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Prev
        </button>
        <button
          type="button"
          className={`${
            currentPage >= totalPages && "cursor-not-allowed"
          } transition-all inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          onClick={nextPage}
          disabled={currentPage >= totalPages}
        >
          Next
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
});

export default PaginationTable;
