import * as React from "react";
import { CartListProducts } from "../../../interfaces/product";

export default function CheckoutProducts(props: any) {
  function format(n: any, currency: any) {
    return currency + n?.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }
  return (
    <div className="min-h-[100vh] p-14 max-lg:hidden bg-gray-100 border-l border-gray-300 basis-2/5">
      <div className="mb-5 flex flex-col gap-5">
        {props.products?.map((cartProduct: CartListProducts) => {
          return (
            <div className="flex items-center" key={cartProduct.product.id}>
              <div className="relative mr-4">
                <img
                  className="w-16 h-16 rounded-lg"
                  src={cartProduct.product.image}
                  alt=""
                />
                <span className="text-xs text-white border bg-gray-500 absolute top-[-10px] text-center right-[-10px] h-5 w-5 rounded-full">
                  {cartProduct.quantity}
                </span>
              </div>
              <p className="font-medium text-sm w-1/2">
                {cartProduct.product.name}
              </p>
              <div className="text-right w-1/4 text-sm">
                {format(cartProduct.product.price / 100, "$")}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col">
        <p className="text-sm flex my-1 justify-between">
          <span>Subtotal</span>
          <span className="font-medium">
            {format(
              props.products.reduce(
                (acc: number, cartProduct: CartListProducts) => {
                  return (
                    acc +
                    cartProduct.quantity * (cartProduct.product.price / 100)
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
            {format(
              props.products?.reduce(
                (acc: number, cartProduct: CartListProducts) => {
                  return (
                    acc +
                    cartProduct.quantity * (cartProduct.product.price / 100)
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
  );
}