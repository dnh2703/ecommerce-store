import { ChangeEvent, useState, useLayoutEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
import productApi from "../../api/productApi";
import { IProduct } from "../../interfaces/product";
import { Link } from "react-router-dom";

interface SearchBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar = ({ isOpen, setIsOpen }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<IProduct[]>([]);
  const [isDone, setIsDone] = useState(false);
  const debouncedQuery = useDebounce(query, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() !== "") {
      setQuery(e.target.value);
    } else {
      setQuery(e.target.value.trim());
    }
  };

  useLayoutEffect(() => {
    if (debouncedQuery) {
      productApi
        .getAllProducts(debouncedQuery)
        .then((res) => {
          setResult(res.data.products);
        })
        .catch((err) => {})
        .finally(() => {
          setIsDone(true);
        });
    }
  }, [debouncedQuery]);

  const renderItemsSearch = () => {
    if (result.length === 0 && isDone && debouncedQuery) {
      return (
        <div className="grid grid-cols-3">
          <p className="flex justify-between text-base col-span-3 border-b pt-8 pb-2 mb-6">
            Products
            <Link
              to="/products"
              className="gap-3 text-gray-400 hover:text-black transition-all flex items-center"
            >
              <span>View all</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </p>

          <p className="text-base col-span-3 text-gray-400 font-light text-left">
            No results found for
            <span className="font-semibold text-black">
              {" "}
              "{debouncedQuery}"
            </span>{" "}
            in products
          </p>
        </div>
      );
    }

    return (
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 overflow-x overflow-y-hidden">
        <p className="text-base sm:col-span-3 col-span-2 border-b pt-8 pb-2 mb-6 flex font-light justify-between">
          <span>{result.length} results</span>
          <Link
            to="/products"
            className="gap-3 text-gray-400 hover:text-black transition-all flex items-center"
          >
            <span>View all</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </p>
        {result.map((item) => {
          return (
            <Link
              to={`products/${item.id}`}
              key={item.id}
              className="text-left"
            >
              <img src={item.image} alt={item.name} />
              <p className="font-light pt-2 pb-1">{item.name}</p>
              <p className="font-light text-gray-400">
                ${item.price.toLocaleString()}
              </p>
            </Link>
          );
        })}
      </div>
    );
  };
  // render an input element and a button element
  return (
    <>
      <div
        className={`${
          isOpen ? "h-screen" : "h-0"
        } w-screen fixed top-0 left-0 z-50 search-bar`}
      >
        <div
          className={`fixed h-screen w-screen bg-black opacity-20 ${
            !isOpen && "hidden"
          }`}
          onClick={() => {
            console.log("hi");
            console.log(setIsOpen(false));
          }}
        ></div>
        <div
          className={`bg-white transition-transform duration-300 max-h-[90%] relative overflow-x-hidden ${
            isOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-full opacity-0 invisible"
          } z-50 sm:py-12 py-4 flex`}
        >
          <div className=" w-full overflow-auto">
            <div className="max-w-5xl lg:mx-auto mx-8">
              <div className="flex">
                <input
                  placeholder="Search..."
                  type="text"
                  value={query}
                  onChange={handleChange}
                  className="w-full py-4 outline-none border-b border-gray-200 focus:border-black"
                />
              </div>
            </div>
            <div className="max-w-5xl lg:mx-auto mx-8 mt-8 mb-4  flex items-center gap-4 overflow-x-auto overflow-y-auto">
              <p className="whitespace-nowrap font-light"> Top collection : </p>
              <div className="border border-gray-200 font-light text-sm hover:text-black hover:border-black transition-all ease-in-out cursor-pointer px-4 py-2 text-gray-400">
                Bedroom
              </div>
              <div className="border border-gray-200 font-light text-sm hover:text-black hover:border-black transition-all ease-in-out cursor-pointer px-4 py-2 text-gray-400">
                Kitchen
              </div>
              <div className="border border-gray-200 font-light text-sm hover:text-black hover:border-black transition-all ease-in-out cursor-pointer px-4 py-2 text-gray-400">
                Office
              </div>
            </div>
            <div className="max-w-5xl lg:mx-auto mx-8">
              {debouncedQuery && renderItemsSearch()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
