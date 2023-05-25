import * as React from "react";
import { Link, useParams } from "react-router-dom";
import Information from "../components/common/CheckOut/Information";
import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CheckoutProducts from "../components/common/CheckOut/CheckoutProducts";
import { getCartProduct } from "../features/slice/productSlice";
import { useAppSelector } from "../store/hooks";
import { useDispatch } from "react-redux";
import { CartListProducts } from "../interfaces/product";
import { getUserInfo } from "../features/slice/userInfoSlice";
import { ProductRoute } from "../components/common/ProductCatalog/ProductCatalogComponent";
import Shipping from "../components/common/CheckOut/Shipping";
import Payment from "../components/common/CheckOut/Payment";
import NotFoundPage from "./NotFoundPage";

export default function CheckoutPage() {
  let { process } = useParams();
  let [isPickup, setIsPickup] = useState<boolean>(false);
  let { cartProducts } = useAppSelector((state) => state.product);
  let dispatch = useDispatch();
  let [showOrder, setShowOrder] = useState<boolean>(false);

  let { userInfo } = useAppSelector((state) => state.userInfo);

  useEffect(() => {
    let res = localStorage.getItem("userInfo");
    if (res !== null) {
      const items = JSON.parse(res);
      dispatch(getUserInfo(items));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

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

  return (
    <>
      {process === "information" ||
      process === "shipping" ||
      process === "payment" ? (
        <div>
          <div className="lg:hidden">
            <Container maxWidth="lg">
              <p className="lg:hidden my-6 mx-14 max-sm:mx-0">
                <Link className="text-2xl font-medium" to={"/home"}>
                  4bros - Ecommerce
                </Link>
              </p>
            </Container>
            <div className={`bg-gray-100 duration-500 py-5  overflow-hidden`}>
              <Container maxWidth="lg">
                <div
                  onClick={() => setShowOrder(!showOrder)}
                  className="flex  justify-between mx-14 max-sm:mx-0 text-[#1773b0] cursor-pointer "
                >
                  <div className="flex items-center gap-2 text-sm">
                    <div>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <p>{!showOrder ? "Show " : "Hide "} order summary</p>
                    <div>
                      <i
                        style={{ transition: "0.5s" }}
                        className={`fa-solid fa-angle-down ${
                          showOrder || "fa-rotate-180"
                        }`}
                      ></i>
                    </div>
                  </div>
                  <div>
                    <p>
                      $
                      {cartProducts
                        .reduce(
                          (init: number, cartProduct: CartListProducts) => {
                            return (
                              init +
                              (cartProduct.product.price / 100) *
                                cartProduct.quantity
                            );
                          },
                          0
                        )
                        .toLocaleString()}
                    </p>
                  </div>
                </div>
                <div
                  className={`  ${
                    showOrder ? "block" : "hidden"
                  } duration-500 mx-14 max-sm:mx-0 mt-8`}
                >
                  <div className="mb-5 flex flex-col gap-5  ">
                    {cartProducts?.map((cartProduct: CartListProducts) => {
                      return (
                        <div
                          className="flex items-center"
                          key={cartProduct.product.id}
                        >
                          <div className="relative mr-4 ">
                            <img
                              className="w-16 h-16 rounded-lg "
                              src={cartProduct.product.image}
                              alt=""
                            />
                            <span className="text-xs text-white border bg-gray-500 absolute top-[-10px] text-center right-[-10px] h-5 w-5 rounded-full">
                              {cartProduct.quantity}
                            </span>
                          </div>
                          <p className="font-medium text-sm w-3/6 ml-3">
                            {cartProduct.product.name}
                          </p>
                          <div className="text-right w-3/6 text-sm">
                            {format2(cartProduct.product.price / 100, "$")}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm flex my-1 justify-between">
                      <span>Subtotal</span>
                      <span className="font-medium">
                        {format2(
                          cartProducts.reduce(
                            (acc: number, cartProduct: CartListProducts) => {
                              return (
                                acc +
                                cartProduct.quantity *
                                  (cartProduct.product.price / 100)
                              );
                            },
                            0
                          ),
                          "$"
                        )}
                      </span>
                    </p>
                    <p className="text-sm flex my-1 justify-between">
                      <span>Shipping</span>
                      <span className="">Free</span>
                    </p>
                    <p className="text-lg font-medium flex my-1 justify-between">
                      <span className="">Total</span>
                      <span>
                        {" "}
                        {format2(
                          cartProducts?.reduce(
                            (acc: number, cartProduct: CartListProducts) => {
                              return (
                                acc +
                                cartProduct.quantity *
                                  (cartProduct.product.price / 100)
                              );
                            },
                            0
                          ),
                          "$"
                        )}
                      </span>
                    </p>
                  </div>
                </div>
              </Container>
            </div>
          </div>

          <Container maxWidth="lg">
            <div className="flex justify-center">
              {process === "information" && (
                <Information
                  dispatch={dispatch}
                  userInfo={userInfo}
                  setPickup={() => setIsPickup(true)}
                  setShip={() => setIsPickup(false)}
                  isPickup={isPickup}
                />
              )}

              {process === "shipping" && <Shipping userInfo={userInfo} />}

              {process === "payment" && (
                <Payment isPickup={isPickup} userInfo={userInfo} />
              )}

              <CheckoutProducts products={cartProducts} />
            </div>
          </Container>
        </div>
      ) : (
        <NotFoundPage></NotFoundPage>
      )}
    </>
  );
}
