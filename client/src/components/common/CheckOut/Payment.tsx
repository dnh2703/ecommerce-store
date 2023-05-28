import { Typography } from "@mui/material";
import * as React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ProductRoute } from "../ProductCatalog/ProductCatalogComponent";
import { UserInformation } from "../../../features/slice/userInfoSlice";
import { Order, OrderItem } from "../../../interfaces/order";
import { CartListProducts, IProduct } from "../../../interfaces/product";
import orderApi from "../../../api/orderApi";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store/hooks";
import { getCartProduct } from "../../../features/slice/productSlice";

export interface IPaymentProps {
  userInfo: UserInformation;
  isPickup: boolean;
  cartProducts: CartListProducts[];
  dispatch: any;
  email: string;
}

export default function Payment(props: IPaymentProps) {
  let navigate = useNavigate();
  let [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  let [isLoading, setIsLoading] = useState<boolean>(false);
  let dispatch = useDispatch();

  useEffect(() => {
    setOrderItems(() => {
      return props.cartProducts.map((cartProduct: CartListProducts) => {
        return {
          product: cartProduct.product.id,
          amount: cartProduct.quantity,
        };
      });
    });
  }, []);

  useEffect(() => {
    if (props.cartProducts.length > 0)
      localStorage.setItem("wishList", JSON.stringify(props.cartProducts));
  }, [props.cartProducts]);

  const handleOrder = () => {
    Swal.fire({
      title: "Are you sure you want to order?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order now!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (props.userInfo.country !== "") {
          let orderInfo: Order = {
            tax: 1,
            shippingFee: 1,
            address: `[${props.userInfo.apartment}] ${props.userInfo.address}, ${props.userInfo.city}, ${props.userInfo.country}`,
            items: orderItems,
          };
          setIsLoading(true);
          orderApi
            .createOrder(orderInfo)
            .then((res) => {
              if (res.status === 201) {
                dispatch(getCartProduct([]));
                localStorage.removeItem("wishList");
                Swal.fire(
                  "Success!",
                  "Thank you for buying our products!",
                  "success"
                ).then((res) => navigate("/"));
              }
            })
            .catch((e) => {
              Swal.fire("Sorry :(", "Something went wrong!", "error");
            })
            .finally(() => setIsLoading(false));
        } else {
          Swal.fire(
            "Error!",
            "You have to fill in the information!",
            "error"
          ).then((res) => navigate("/check-out/information"));
        }
      }
    });
  };

  return (
    <div className="px-14 pb-14 pt-14 max-lg:pt-0 max-sm:px-0 basis-[60%] max-lg:basis-full">
      <p className="lg:block max-lg:hidden">
        <Link className="text-2xl font-medium" to={"/"}>
          4bros - Ecommerce
        </Link>
      </p>
      <nav className="flex items-center my-6 ">
        <ProductRoute name="cart" src={"/cart"}></ProductRoute>
        <i
          style={{ opacity: "0.6", marginRight: "10px", fontSize: 12 }}
          className="fa-solid fa-angle-right"
        ></i>
        <ProductRoute
          name="information"
          src={"/check-out/information"}
        ></ProductRoute>
        <i
          style={{ opacity: "0.6", marginRight: "10px", fontSize: 12 }}
          className="fa-solid fa-angle-right"
        ></i>
        <>
          {props.isPickup || (
            <>
              <ProductRoute
                name="shipping"
                src={"/check-out/shipping"}
              ></ProductRoute>
              <i
                style={{
                  opacity: "0.6",
                  marginRight: "10px",
                  fontSize: 12,
                }}
                className="fa-solid fa-angle-right"
              ></i>
            </>
          )}
        </>
        <Typography
          className="capitalize"
          sx={{
            fontSize: 12,
            fontWeight: "bold",
            marginRight: "10px",
            cursor: "default",
          }}
        >
          Payment
        </Typography>
      </nav>
      <div className="my-8 border items-center border-gray-300 px-5 rounded-lg text-sm">
        <div className="py-3 flex border-b border-gray-300">
          <p className="text-gray-500 basis-[20%]">Contact</p>
          <p className="basis-[70%]">{props.email}</p>
          <div className="basis-[10%]">
            <a
              onClick={() => navigate("/check-out/information")}
              className="text-xs underline cursor-pointer text-[#1773b0]"
            >
              Change
            </a>
          </div>
        </div>
        <div className="py-3 flex border-b border-gray-300">
          <p className="text-gray-500 basis-[20%]">Ship to</p>
          {props.isPickup ? (
            <p className="basis-[70%] text-gray-500">(No address)</p>
          ) : (
            <p className="basis-[70%]">
              [{props.userInfo.apartment}] {props.userInfo.address},{" "}
              {props.userInfo.city}, {props.userInfo.country}
            </p>
          )}
          <div className="basis-[10%]">
            <a
              onClick={() => navigate("/check-out/information")}
              className="text-xs underline cursor-pointer text-[#1773b0]"
            >
              Change
            </a>
          </div>
        </div>
        <div className="py-3 flex border-b border-gray-300">
          <p className="text-gray-500 basis-[20%]">Method</p>
          <div className="basis-[70%] flex items-center">
            <p>Standard Shipping</p>
            <p className="mx-2">-</p>
            <p className="font-medium">Free</p>
          </div>
          <div className="basis-[10%]">
            <a
              onClick={() => navigate("/check-out/shipping")}
              className="text-xs underline cursor-pointer text-[#1773b0]"
            >
              Change
            </a>
          </div>
        </div>
      </div>
      <div className="my-8 text-sm">
        <p className="font-medium text-lg">Payment</p>
        <p className="text-sm text-gray-500 mb-4">
          All transactions are secure and encrypted.
        </p>
        <div className="bg-blue-50 border border-blue-400 flex px-2 py-5 rounded-lg">
          <div className="mx-2 basis-1/2">Payment on delivery</div>
          <div className="mx-2 basis-1/2 text-right font-medium">Cash</div>
        </div>
      </div>
      <div className="my-8 flex justify-between">
        <button
          onClick={() => {
            props.isPickup
              ? navigate("/check-out/information")
              : navigate("/check-out/shipping");
          }}
          className="text-sm text-[#1773b0] flex items-center"
        >
          <div>
            <i className="fa-solid fa-angle-left mr-3"></i>
          </div>
          <p>Return to {props.isPickup ? "information" : "shipping"}</p>
        </button>
        {props.isPickup ? (
          <button
            title="We are always open"
            className="bg-gray-100 cursor-default flex justify-end items-center text-gray-500 p-5 rounded-lg"
          >
            <span>No need to order</span>
          </button>
        ) : (
          <button
            onClick={handleOrder}
            className="bg-[#1773b0] flex justify-end items-center text-white p-5 rounded-lg"
          >
            {isLoading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <span>Order now</span>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
