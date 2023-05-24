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
import Heading from "../components/common/Cart/Heading";
import { useNavigate } from "react-router-dom";
import CartProducts from "../components/common/Cart/CartProducts";

export default function Cart(props: any) {
  let dispatch = useDispatch();
  let [isAgree, setIsAgree] = useState<boolean>(false);
  let [isShowTerm, setIsShowTerm] = useState<boolean>(false);
  let navigate = useNavigate();
  let { cartProducts } = useAppSelector((state) => state.product);

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

  return (
    <>
      {cartProducts.length === 0 ? (
        <Container maxWidth="lg">
          <div className="py-36 flex gap-6 flex-col items-center">
            <p className="text-xl">YOUR CART IS CURRENTLY EMPTY.</p>
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-500">
                Before proceed to checkout you must add some products to your
                shopping cart.
              </p>
              <p className="text-sm text-gray-500">
                You will find a lot of interesting products on our Website.
              </p>
            </div>
            <div className="group/message">
              <button
                onClick={() => navigate("/products")}
                className=" uppercase mb-6 bg-black border-black border hover:border-[#6e2f1b] relative text-white text-xs tracking-[3px]"
              >
                <div className="w-0 z-0 h-full group-hover/message:w-full duration-500 bg-[#6e2f1b] absolute"></div>
                <span className="group-hover/message:text-white leading-[40px]  py-3 px-8 duration-500 text-white z-[1] relative">
                  go to shop
                </span>
              </button>
            </div>
          </div>
        </Container>
      ) : (
        <Container maxWidth="lg" className="cart px-5 relative">
          <>
            {isShowTerm && (
              <TermsAndConditions
                closeModal={() => {
                  setIsShowTerm(false);
                }}
              />
            )}
          </>
          <div className="py-20 px-10">
            <Heading />
            <div>
              <CartProducts
                dispatch={dispatch}
                cartProducts={cartProducts}
                format2={format2}
              />

              <div className="flex my-8 text-sm max-md:flex-wrap gap-4">
                <div className="basis-1/2 max-md:basis-full max-md:mb-10">
                  <div className=" mb-8">
                    <p className="mb-5">Special instructions for seller</p>
                    <textarea
                      className="border border-gray-300 outline-none py-4 px-5 w-full"
                      name=""
                      id=""
                      cols={30}
                      placeholder="How can i help you?"
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
                      placeholder="Coupon code"
                    />
                  </div>
                </div>

                <div className="flex basis-1/2 max-md:basis-full flex-col">
                  <div className="w-full text-right mb-4">
                    <p className="text-base ">
                      Subtotal:{" "}
                      {format2(
                        cartProducts.reduce(
                          (acc: number, product: CartListProducts) => {
                            return (
                              acc +
                              (product.product.price / 100) * product.quantity
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
                    <span className="text-black">Dollars</span>. While the
                    content of your cart is currently displayed in , the
                    checkout will use
                    <span className="text-black">Dollars</span> at the most
                    current exchange rate.
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
                      onClick={() => {
                        if (isAgree) {
                          navigate("/check-out/information");
                          window.scrollTo(0, 0);
                        }
                      }}
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
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
