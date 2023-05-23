import React, { useState } from "react";

const Header = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "About", link: "/About" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between bg-white p-4 z-10 md:flex-row">
      <div className="flex items-center order-2 md:order-1">
        <h1 className="text-xl font-bold">FUNORI</h1>
      </div>

      <ul
        className={`list-none md:flex  md:items-center pb-12 md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${
          isMenuOpen ? "block" : "hidden"
        } md:order-2 `}
      >
        {links.map((link, linkIndex) => (
          <li key={link.name} className="md:ml-8 text-xl my-7 md:my-0">
            <a
              href={link.link}
              className="text-gray-800 hover:texr-gray-500 duration-500"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-4 order-3 md:order-3">
        <button>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6 text-gray-900 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            ></path>
          </svg>
        </button>
        <button>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6 text-gray-900 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            ></path>
          </svg>
        </button>
        <button>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6 text-gray-900 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            ></path>
          </svg>
        </button>
        <button>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6 text-gray-900 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex items-center space-x-4 order-1 md:hidden md:order-3">
        {isMenuOpen ? (
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-5 w-5 text-gray-600 cursor-pointer"
            onClick={toggleMenu}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-5 w-5 text-gray-600 cursor-pointer"
            onClick={toggleMenu}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        )}
      </div>
    </header>
  );
};

export default Header;
