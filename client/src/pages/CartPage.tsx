import { Container } from "@mui/material";
import * as React from "react";
import { useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCartProduct } from "../features/slice/productSlice";
import { CartListProducts } from "../interfaces/product";
import LoadingPage from "../components/common/LoadingPage";

export default function Cart(props: any) {
  let { cartProducts } = useAppSelector((state) => state.product);
  let dispatch = useDispatch();
  useEffect(() => {
    let res = localStorage.getItem("wishList");
    if (res !== null) {
      const items = JSON.parse(res);
      if (items) {
        dispatch(getCartProduct(items));
      }
    }
  }, []);
  function format2(n: any, currency: any) {
    return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }

  return (
    <Container maxWidth="lg" className="px-5">
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
                  <div className="basis-1/4 flex justify-center">
                    <div className="flex my-10 border items-center border-gray-300">
                      <button className="px-4 py-2">
                        <i className="opacity-60 text-sm fa-solid fa-minus"></i>
                      </button>
                      <div className="px-2 text-sm">{wProduct.quantity}</div>
                      <button className="px-4 py-2">
                        <i className=" opacity-60 text-sm fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="basis-1/4 flex items-center justify-end">
                    <div>
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
        </div>
      </div>
    </Container>
  );
}
