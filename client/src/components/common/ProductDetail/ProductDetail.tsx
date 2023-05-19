import { Box } from "@mui/material";
import TextRating from "../Rating";
import AddToCart from "./AddToCart";
import OutOfStockDetail from "./OutOfStockDetail";
import { useEffect, useState } from "react";

export default function ProductDetail(props: any) {
  let [hours, setHours] = useState<number>(Math.floor(Math.random() * 23) + 1);

  return (
    <div className="lg:pl-10 sm:basis-full lg:basis-1/2">
      <div className=" mb-2">
        <Box
          sx={{ span: { fontSize: "14px" } }}
          className={`flex items-center`}
        >
          {props.product?.averageRating !== undefined && (
            <TextRating values={props.product.averageRating}></TextRating>
          )}
          <span>({props.product?.numOfReviews})</span>
        </Box>
      </div>
      <h2 className="capitalize text-3xl py-1">{props.product?.name}</h2>
      <p className="text-2xl py-1 mb-2">${props.product?.price / 100}</p>
      <p className="capitalize py-4 border-b-[1px]">
        By <span className="text-amber-800">{props.product?.company}</span>
      </p>
      {props.product?.inventory === 0 ? (
        <p className="text-red-500 my-7">
          <i
            className={`fa-regular fa-circle-xmark fa-fade text-red-500 mr-3 `}
          ></i>
          Out of stock
        </p>
      ) : (
        <p className="text-[#108043] my-7">
          <i
            className={`fa-regular fa-circle-check fa-fade text-[#108043] mr-3 `}
          ></i>
          In stock
        </p>
      )}
      <div className="relative flex items-center my-7">
        <div className="">
          <i className="animate-[flames_2s_linear_infinite] absolute top-[-10px] text-2xl text-red-500 fa-sharp fa-beat fa-solid fa-fire-flame-curved"></i>
        </div>
        <p className="font-semibold text-red-500 pl-7">
          {84 - props.product?.inventory} sold in last {hours} hours
        </p>
      </div>
      <p className="my-3">
        Only{" "}
        <span className="text-red-500 ">
          {props.product?.inventory} item(s)
        </span>{" "}
        left in stock
      </p>
      {props.product?.inventory === 0 || (
        <div className="h-[3px] w-full bg-gray-300 mt-4">
          <div className="h-full w-1/5 bg-red-500"></div>
        </div>
      )}
      {props.product?.inventory === 0 ? (
        <OutOfStockDetail product={props.product} />
      ) : (
        <AddToCart product={props.product} showModal={props.showTerms} />
      )}
      <div>
        <a
          onClick={props.showAsk}
          className="mr-6 text-[16px] pb-1 inline-block text-black cursor-pointer relative group/terms hover:text-amber-800"
        >
          <i className="mr-2 fa-regular fa-circle-question"></i>
          Ask a questions
          <span className="w-0 bg-black h-[1px] absolute bottom-[-2px] left-0 group-hover/terms:w-full duration-300"></span>
        </a>
        <a
          onClick={props.showDelivery}
          className="text-[16px] pb-1 inline-block text-black cursor-pointer relative group/terms hover:text-amber-800"
        >
          <i className=" mr-2 fa-solid fa-box"></i>
          Delivery & Return
          <span className="w-0 bg-black h-[1px] absolute bottom-[-2px] left-0 group-hover/terms:w-full duration-300"></span>
        </a>
      </div>
      <div className="border flex border-gray-200 py-5 my-4">
        <div>
          <i className="fa-solid fa-check text-[#469364] px-4 text-xl"></i>
        </div>
        <div>
          <div className="mb-5">
            <p className="text-gray-500 text-base mb-2">
              Pickup available at{" "}
              <span className="font-semibold text-black">
                17 Duy Tan, Cau Giay, Hanoi, Vietnam
              </span>
            </p>
            <p className="text-gray-500 text-sm">Usually ready in 24 hours</p>
          </div>
          <a
            onClick={props.showStoreInfo}
            className="text-sm inline-block text-amber-800 cursor-pointer relative group/terms "
          >
            View store information
            <span className="w-full bg-amber-800 h-[1px] absolute bottom-[-4px] left-0 group-hover/terms:w-0 duration-300"></span>
          </a>
        </div>
      </div>
      <div className="my-10 border border-gray-300 py-9 px-6 relative flex justify-center">
        <span className="absolute top-[-10px] bg-white text-center w-3/5 px-2">
          GUARANTEE SAFE & SECURE CHECKOUT
        </span>
        <img
          src="https://cdn.shopify.com/s/files/1/0136/8467/0523/files/Variable-Color_5350defd-cdaf-45bd-8239-8bdc14261a41.webp?crop=center&height=30&v=1669193261&width=432"
          alt=""
        />
      </div>
    </div>
  );
}
