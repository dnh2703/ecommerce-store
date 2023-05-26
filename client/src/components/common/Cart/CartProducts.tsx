import * as React from "react";
import { CartListProducts } from "../../../interfaces/product";
import {
  addToCart,
  deleteCartProduct,
  minusOneItem,
} from "../../../features/slice/productSlice";
import Swal from "sweetalert2";

export default function CartProducts(props: any) {
  return (
    <div>
      <div>
        <div className="max-md:hidden flex mb-3 pb-4 border-b border-gray-300">
          <div className="basis-1/2">Product</div>
          <div className="basis-1/4 text-center">Quantity</div>
          <div className="basis-1/4 text-right">Total</div>
        </div>
        <div className=" mb-3 pb-6 border-b border-gray-300">
          {props.cartProducts?.map((wProduct: CartListProducts) => {
            return (
              <div
                key={wProduct.product.id}
                className="flex py-4  max-md:justify-end"
              >
                <div className="basis-1/2 flex max-md:basis-full">
                  <div className="basis-1/4 max-md:basis-full mr-5 max-md:mb-2">
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
                <div className="basis-1/4 max-md:basis-1/4 max-md:inline-flex flex-col items-center flex justify-center">
                  <div className="flex mx-14 max-md:mx-0 justify-center mt-2 border items-center border-gray-300">
                    <button
                      onClick={() => {
                        if (wProduct.quantity === 1) {
                          Swal.fire({
                            title: "Do you want to remove this item?",
                            showCancelButton: true,
                            confirmButtonText: "Yes",
                            cancelButtonText: "No",
                          }).then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                              props.dispatch(minusOneItem(wProduct));
                              Swal.fire("Removed!", "", "success");
                            }
                          });
                        } else {
                          props.dispatch(minusOneItem(wProduct));
                        }
                      }}
                      className="px-4 py-2"
                    >
                      <i className="opacity-60 text-sm fa-solid fa-minus"></i>
                    </button>
                    <div className="px-2 text-sm">{wProduct.quantity}</div>
                    <button
                      onClick={() => {
                        props.dispatch(
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
                      Swal.fire({
                        title: "Do you want to remove this item?",
                        showCancelButton: true,
                        confirmButtonText: "Yes",
                        cancelButtonText: "No",
                      }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                          Swal.fire("Removed!", "", "success");
                          props.dispatch(
                            deleteCartProduct({ product: wProduct.product })
                          );
                        }
                      });
                    }}
                    className="text-xs cursor-pointer text-gray-400 underline mt-2"
                  >
                    Remove
                  </div>
                </div>
                <div className="basis-1/4 max-md:basis-1/2  flex items-center justify-end">
                  <div className="text-sm">
                    {props.format2(
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
  );
}
