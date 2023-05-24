import { Typography } from "@mui/material";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductRoute } from "../ProductCatalog/ProductCatalogComponent";
import { UserInformation } from "../../../features/slice/userInfoSlice";

export interface IShippingProps {
  userInfo: UserInformation;
}

export default function Shipping(props: IShippingProps) {
  let navigate = useNavigate();
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
          <Typography
            className="capitalize"
            sx={{
              fontSize: 12,
              fontWeight: "bold",
              marginRight: "10px",
              cursor: "default",
            }}
          >
            Shipping
          </Typography>
          <i
            style={{
              opacity: "0.6",
              marginRight: "10px",
              fontSize: 12,
            }}
            className="fa-solid fa-angle-right"
          ></i>
        </>
        <ProductRoute name="payment" src={"/check-out/payment"}></ProductRoute>
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
          <p className="basis-[70%]">
            [{props.userInfo.apartment}] {props.userInfo.address},{" "}
            {props.userInfo.city}, {props.userInfo.country}
          </p>
          <div className="basis-[10%]">
            <a
              onClick={() => navigate("/check-out/information")}
              className="text-xs underline cursor-pointer text-[#1773b0]"
            >
              Change
            </a>
          </div>
        </div>
      </div>

      <div className="my-8 text-sm">
        <p className="font-medium mb-4 text-lg">Shipping method</p>
        <div className="bg-blue-50 border border-blue-400 flex px-2 py-5 rounded-lg">
          <div className="basis-1/2 mx-2 ">
            <p>Standard Shipping</p>
          </div>
          <div className="basis-1/2 text-right mx-2">
            <p className="font-medium">Free</p>
          </div>
        </div>
      </div>

      <div className="my-8 flex justify-between">
        <button
          onClick={() => navigate("/check-out/information")}
          className="text-sm text-[#1773b0] flex items-center"
        >
          <div>
            <i className="fa-solid fa-angle-left mr-3"></i>
          </div>
          <p>Return to information</p>
        </button>
        <button
          onClick={() => navigate("/check-out/payment")}
          className="bg-[#1773b0] flex justify-end items-center text-white p-5 rounded-lg"
        >
          <span>Continute to payment</span>
        </button>
      </div>
    </div>
  );
}
