import { Container } from "@mui/material";
import * as React from "react";
import { useAppSelector } from "../store/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  deleteCartProduct,
  getCartProduct,
  minusOneItem,
} from "../features/slice/productSlice";
import { CartListProducts } from "../interfaces/product";
import LoadingPage from "../components/common/LoadingPage";
import TermsAndConditions from "../components/common/ProductDetail/TermsAndConditions";
import { countries } from "../data/countries";
import { province } from "../data/provinceDistrict";

export default function Cart(props: any) {
  let { cartProducts } = useAppSelector((state) => state.product);
  let dispatch = useDispatch();
  let [isAgree, setIsAgree] = useState<boolean>(false);
  let [isShowTerm, setIsShowTerm] = useState<boolean>(false);

  useEffect(() => {
    let res = localStorage.getItem("wishList");
    if (res !== null) {
      const items = JSON.parse(res);
      if (items) {
        dispatch(getCartProduct(items));
      }
    }
  }, []);

  useEffect(() => {
    if (cartProducts.length > 0)
      localStorage.setItem("wishList", JSON.stringify(cartProducts));
  }, [cartProducts]);

  function format2(n: any, currency: any) {
    return currency + n?.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }

  const handleChecked = () => setIsAgree(!isAgree);

  const setCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    let country = e.target.value;
  };

  return (
    <Container maxWidth="lg" className="px-5 relative">
      {isShowTerm && (
        <TermsAndConditions
          closeModal={() => {
            setIsShowTerm(false);
          }}
        />
      )}
      <div className="py-20 px-10">
        <p className="text-center text-[40px] pb-16">Shopping Cart</p>
        <div className="text-center">
          <div className="flex justify-center items-center ">
            <div className="rounded-lg h-1 w-1/2 bg-gray-200 relative">
              <div className="rounded-lg h-1 w-full animate-way bg-[#6e2f1b]"></div>
              <div className="animate-truck border-[#6e2f1b] right-[-3%] text-[#6e2f1b] absolute top-[-370%]  p-2 rounded-full border bg-white">
                <i className="fa-solid fa-truck-fast"></i>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 mb-12 text-center text-gray-500 text-sm">
          Congratulations , you've got free shipping!
        </p>
        <div>
          <div className="flex mb-3 pb-4 border-b border-gray-300">
            <div className="basis-1/2">Product</div>
            <div className="basis-1/4 text-center">Quantity</div>
            <div className="basis-1/4 text-right">Total</div>
          </div>
          <div className=" mb-3 pb-6 border-b border-gray-300">
            {cartProducts?.map((wProduct: CartListProducts) => {
              return (
                <div className="flex py-4 ">
                  <div className="basis-1/2 flex">
                    <div className="basis-1/4 mr-5">
                      <img
                        className="w-full"
                        src={wProduct.product.image}
                        alt=""
                      />
                    </div>
                    <div className="basis-[85%] flex flex-col justify-center">
                      <p className="mb-3 text-sm ">{wProduct.product.name}</p>
                      <p className="text-gray-500 text-sm ">
                        ${wProduct.product.price / 100}
                      </p>
                    </div>
                  </div>
                  <div className="basis-1/4 flex-col items-center flex justify-center">
                    <div className="flex mx-14 justify-center mt-2 border items-center border-gray-300">
                      <button
                        onClick={() => {
                          dispatch(minusOneItem(wProduct));
                        }}
                        className="px-4 py-2"
                      >
                        <i className="opacity-60 text-sm fa-solid fa-minus"></i>
                      </button>
                      <div className="px-2 text-sm">{wProduct.quantity}</div>
                      <button
                        onClick={() => {
                          dispatch(
                            addToCart({
                              product: wProduct.product,
                              quantity: wProduct.quantity,
                              count: 1,
                            })
                          );
                        }}
                        className="px-4 py-2"
                      >
                        <i className=" opacity-60 text-sm fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <div
                      onClick={() => {
                        dispatch(
                          deleteCartProduct({ product: wProduct.product })
                        );
                      }}
                      className="text-xs cursor-pointer text-gray-400 underline mt-2"
                    >
                      Remove
                    </div>
                  </div>
                  <div className="basis-1/4 flex items-center justify-end">
                    <div className="text-sm">
                      {format2(
                        (wProduct.product.price / 100) * wProduct.quantity,
                        "$"
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex my-8 text-sm">
            <div className="basis-1/2 px-4">
              <div className=" mb-8">
                <p className="mb-5">Special instructions for seller</p>
                <textarea
                  className="border border-gray-300 outline-none py-4 px-5 w-full"
                  name=""
                  id=""
                  cols={30}
                  rows={7}
                ></textarea>
              </div>
              <div>
                <div className="mb-5">
                  <p>Coupon</p>
                  <p className="text-gray-500">
                    * Discount will be calculated and applied at checkout
                  </p>
                </div>
                <input
                  className="border border-gray-300 outline-none py-4 px-5 w-full"
                  type="text"
                />
              </div>
            </div>

            <div className="flex basis-1/2 flex-col px-4">
              <div className="w-full text-right mb-4">
                <p className="text-base ">
                  Subtotal:{" "}
                  {format2(
                    cartProducts.reduce(
                      (acc: number, product: CartListProducts) => {
                        return (
                          acc + (product.product.price / 100) * product.quantity
                        );
                      },
                      0
                    ),
                    "$"
                  )}
                </p>
                <i className="text-gray-400">
                  Taxes and shipping calculated at checkout
                </i>
              </div>
              <p className="text-gray-400 text-right mb-4">
                All charges are billed in{" "}
                <span className="text-black">Dollars</span>. While the content
                of your cart is currently displayed in , the checkout will use
                <span className="text-black">Dollars</span> at the most current
                exchange rate.
              </p>

              <div className="flex items-center justify-end mb-4">
                <input
                  className={`h-4 mr-2 ${
                    isAgree ? "opacity-100" : "opacity-30"
                  } cursor-pointer `}
                  type="radio"
                  checked={isAgree}
                  name="agree"
                  id="agree"
                  onClick={handleChecked}
                />
                <label
                  htmlFor="agree"
                  className="text-sm text-gray-400 cursor-pointer"
                >
                  I agree with the{" "}
                </label>
                <a
                  onClick={() => setIsShowTerm(!isShowTerm)}
                  className="text-sm ml-1 inline-block text-black cursor-pointer relative group/terms hover:text-amber-800"
                >
                  terms and conditions
                  <span className="w-full bg-black h-[1px] absolute bottom-[-4px] left-0 group-hover/terms:w-0 duration-300"></span>
                </a>
              </div>
              <div className="flex justify-end w-full">
                <button
                  disabled={!isAgree}
                  className={`my-5 uppercase  leading-[50px] w-1/2  group/buy duration-500 ${
                    isAgree
                      ? "text-black border-black hover:bg-[#6e2f1b]"
                      : "text-gray-300 border-gray-300"
                  } text-xs tracking-[3px] border `}
                >
                  <span
                    className={`block   ${
                      isAgree &&
                      "hover:text-white group-hover/buy:animate-[buy_1s_ease-in-out]"
                    }`}
                  >
                    check out
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>Get shipping estimates</p>
            <div>
              <select name="country" id="" onChange={setCountry}>
                {countries.map((country: any) => (
                  <option value={country.name}>{country.name}</option>
                ))}
              </select>
              <select name="province" id="">
                {}
              </select>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
