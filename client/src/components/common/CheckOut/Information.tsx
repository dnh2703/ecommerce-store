import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductRoute } from "../ProductCatalog/ProductCatalogComponent";
import { TextField, Typography } from "@mui/material";
import { Dispatch, FormEvent, useEffect, useState } from "react";
import Pickup from "./Pickup";
import { useForm } from "react-hook-form";
import InformationForm from "./InformationForm";
import {
  UserInformation,
  getUserInfo,
  userInfoShipping,
} from "../../../features/slice/userInfoSlice";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import CheckoutProducts from "./CheckoutProducts";
import { CartListProducts } from "../../../interfaces/product";
import { AnyAction } from "@reduxjs/toolkit";

interface IInformationProps {
  isPickup: boolean;
  userInfo: UserInformation;
  dispatch: Dispatch<AnyAction>;
  setShip: () => void;
  setPickup: () => void;
}

export default function Information(props: IInformationProps) {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    if (props.isPickup) {
      navigate("/check-out/payment");
    } else {
      navigate("/check-out/shipping");
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="px-14 pb-14 pt-14 max-lg:pt-0 max-sm:px-0 basis-[60%] max-lg:basis-full"
    >
      <div className="">
        <div>
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
            <Typography
              className="capitalize"
              sx={{
                fontSize: 12,
                fontWeight: "bold",
                marginRight: "10px",
                cursor: "default",
              }}
            >
              Information
            </Typography>
            <i
              style={{ opacity: "0.6", marginRight: "10px", fontSize: 12 }}
              className="fa-solid fa-angle-right"
            ></i>
            <>
              {props.isPickup ? (
                <></>
              ) : (
                <>
                  <Typography
                    className="capitalize"
                    sx={{
                      fontSize: 12,
                      marginRight: "10px",
                      opacity: "0.6",
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
              )}
            </>

            <Typography
              className="capitalize"
              sx={{
                fontSize: 12,
                marginRight: "10px",
                opacity: "0.6",
                cursor: "default",
              }}
            >
              Payment
            </Typography>
          </nav>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-medium">Contact</p>
            <p className="text-sm">
              Already have an account?{" "}
              <a className="underline text-blue-800 cursor-pointer"> Log in</a>
            </p>
          </div>
          <div className="mb-4">
            <TextField
              {...register("email", {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
              error={
                errors.email?.type === "pattern" ||
                errors.email?.type === "required"
              }
              sx={{ width: "100%", fontSize: "14px" }}
              value={props.userInfo.email}
              label="Enter your email"
              variant="outlined"
              onChange={(e) =>
                props.dispatch(
                  getUserInfo({ ...props.userInfo, email: e.target.value })
                )
              }
            />
            {errors.email?.type === "required" && (
              <span className="text-xs text-red-500">Email is required</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-xs text-red-500">
                Enter an invalid email
              </span>
            )}
          </div>
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="default-checkbox" className="text-sm">
              Email me with news and offers
            </label>
          </div>
        </div>

        <div className=" mt-8 w-full">
          <div className="flex flex-wrap">
            <p className="text-lg font-medium mb-4 basis-full">
              Delivery method
            </p>
            <div className=" basis-full">
              <div
                onClick={() => props.setShip()}
                className={`border ${
                  !props.isPickup
                    ? "border-blue-400 bg-blue-50"
                    : "border-gray-300 "
                } cursor-pointer p-4 flex items-center text-sm  rounded-lg`}
              >
                <div
                  className={`${
                    !props.isPickup ? "bg-blue-400" : "bg-gray-300"
                  } h-5 w-5 rounded-full mr-3 relative duration-300 `}
                >
                  <div className="h-2 w-2 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full bg-white"></div>
                </div>
                <div>
                  <i className="fa-solid fa-truck mr-4"></i>
                </div>
                <span>Ship</span>
              </div>
              <div
                onClick={() => props.setPickup()}
                className={`border ${
                  props.isPickup
                    ? "border-blue-400 bg-blue-50"
                    : "border-gray-300 "
                } cursor-pointer p-4 flex items-center text-sm  rounded-lg`}
              >
                <div
                  className={`${
                    props.isPickup ? "bg-blue-400" : "bg-gray-300"
                  } h-5 w-5 rounded-full mr-3 relative duration-300`}
                >
                  <div className="h-2 w-2 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full bg-white"></div>
                </div>
                <div>
                  <i className="fa-solid fa-store mr-4"></i>
                </div>
                <span>Pick up</span>
              </div>
            </div>
          </div>

          <div className="my-8">
            {props.isPickup ? (
              <Pickup />
            ) : (
              <InformationForm
                register={register}
                errors={errors}
              ></InformationForm>
            )}
          </div>

          <div className="my-8 flex justify-between">
            <button
              onClick={() => {
                navigate("/cart");
                window.scrollTo(0, 0);
              }}
              className="text-sm text-[#1773b0] flex items-center"
            >
              <div>
                <i className="fa-solid fa-angle-left mr-3"></i>
              </div>
              <p>Return to cart</p>
            </button>
            <button
              type="submit"
              className="bg-[#1773b0] flex justify-end items-center text-white p-5 rounded-lg"
            >
              <span>
                Continute to {props.isPickup ? "payment" : "shipping"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
