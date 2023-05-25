import { Typography } from "@mui/material";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductRoute } from "../ProductCatalog/ProductCatalogComponent";
import { UserInformation } from "../../../features/slice/userInfoSlice";

export interface IPaymentProps {
  userInfo: UserInformation;
  isPickup: boolean;
}

export default function Payment(props: IPaymentProps) {
  let navigate = useNavigate();

  const handleOrder = () => {
    if (props.isPickup) {
      navigate("/");
    }
  };

  return (
    <div className="px-14 pb-14 pt-14 max-lg:pt-0 max-sm:px-0 basis-[60%] max-lg:basis-full">
      <p className="lg:block max-lg:hidden">
        <Link className="text-2xl font-medium" to={"/home"}>
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
          <p className="basis-[70%]">{props.userInfo.email}</p>
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
          <p className="basis-[70%] flex items-center">
            <p>Standard Shipping</p>
            <p className="mx-2">-</p>
            <p className="font-medium">Free</p>
          </p>
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
            <span>Order now</span>
          </button>
        )}
      </div>
    </div>
  );
}
