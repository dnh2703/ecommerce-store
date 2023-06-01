import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const BottomNavigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const closeSearchBar = () => {
    setIsSearchOpen(false);
  };
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow flex z-10 md:hidden">
      <button
        className="flex-1 p-4 text-center inline-flex flex-col items-center justify-center"
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/");
        }}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="h-6 block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          ></path>
        </svg>
        <span className="text-gray-600 text-sm">Home</span>
      </button>
      <button
        className="flex-1 p-4 text-center inline-flex flex-col items-center justify-center"
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/products");
        }}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="h-6 block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          ></path>
        </svg>
        <span className="text-gray-600 text-sm">Shop</span>
      </button>
      <button
        className="flex-1 p-4 text-center inline-flex flex-col items-center justify-center"
        onClick={(e: any) => {
          setIsSearchOpen(true);
          if (
            e.target.classList.value.match(
              "fixed h-screen w-screen bg-black opacity-20"
            )
          ) {
            setIsSearchOpen(false);
          }
        }}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="h-6 block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          ></path>
        </svg>
        <span className="text-gray-600 text-sm">Search</span>
        <SearchBar isOpen={isSearchOpen} closeSearchBar={closeSearchBar} />
      </button>
      <button
        className="flex-1 p-4 text-center inline-flex flex-col items-center justify-center"
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/about");
        }}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="h-6 block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          ></path>
        </svg>
        <span className="text-gray-600 text-sm">About</span>
      </button>
      <button
        className="flex-1 p-4 text-center inline-flex flex-col items-center justify-center"
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/contact");
        }}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="h-6 block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          ></path>
        </svg>
        <span className="text-gray-600 text-sm">Contact</span>
      </button>
    </nav>
  );
};
export default BottomNavigation;
