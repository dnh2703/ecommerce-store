import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { NavLink, useNavigate } from "react-router-dom";
import { getCartProduct } from "../../features/slice/productSlice";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CartListProducts } from "../../interfaces/product";

const Header = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  const navigate = useNavigate();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  let dispatch = useDispatch();
  let { cartProducts } = useAppSelector((state) => state.product);
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const closeSearchBar = () => {
    setIsSearchOpen(false);
  };

  useEffect(() => {
    let res = localStorage.getItem("wishList");
    if (res !== null) {
      const items = JSON.parse(res);
      if (items) {
        dispatch(getCartProduct(items));
      }
    }
  }, []);

  return (
    <>
      <header className="shadow-md fixed top-0 left-0 right-0 flex items-center justify-between bg-white p-4 z-10 md:flex-row">
        <div className="flex items-center order-2 md:order-1">
          <h1 className="text-xl font-bold">4BROS</h1>
        </div>

        <ul
          className={`shadow-lg md:shadow-none top-20 md:flex md:flex-row  max-md:h-[100vh] gap-10 md:gap-5 md:items-center pb-12 md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-1/2 h-auto md:w-auto md:pl-0 pl-9 hidden md:order-2 `}
        >
          {links.map((link, linkIndex) => (
            <div key={link.name}>
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to={link.link}
                className=" md:ml-8 text-xl my-5 py-2 md:my-0 uppercase font-light"
              >
                {link.name}
              </NavLink>
            </div>
          ))}
        </ul>
        <div className="flex items-center space-x-4 order-3 md:order-3">
          <button
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
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 h-6 text-gray-900 search-btn"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
            <SearchBar isOpen={isSearchOpen} closeSearchBar={closeSearchBar} />
          </button>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/account/login");
            }}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 h-6 text-gray-900 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 h-6 text-gray-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              ></path>
            </svg>
          </button>
          <div className="relative w-6 h-6 ">
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/cart");
              }}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-6 h-6 text-gray-900 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                ></path>
              </svg>
            </button>
            <div
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/cart");
              }}
              className="text-[8px] cursor-pointer absolute top-[-5px] right-[-5px] w-4 h-4 bg-black rounded-full flex items-center justify-center text-white"
            >
              {cartProducts.reduce(
                (acc: number, cartProduct: CartListProducts) => {
                  return acc + cartProduct.quantity;
                },
                0
              ) > 99
                ? "99+"
                : cartProducts.reduce(
                    (acc: number, cartProduct: CartListProducts) => {
                      return acc + cartProduct.quantity;
                    },
                    0
                  )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
