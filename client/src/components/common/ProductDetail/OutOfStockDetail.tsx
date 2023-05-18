import * as React from "react";
import { useState } from "react";

export default function OutOfStockDetail(props: any) {
  return (
    <div className="flex flex-col my-5">
      <div className="flex items-center gap-4 my-4">
        <div className="basis-[90%] group/button">
          <button className=" uppercase cursor-default leading-[50px] w-full bg-gray-100 relative  text-xs tracking-[3px]">
            <span className="">out of stock</span>
          </button>
        </div>
        <div className=" w-[50px] basis-[10%]">
          <i className="hover:bg-[#6e2f1b] duration-300 hover:text-white fa-regular fa-heart leading-[50px] text-lg  flex justify-center items-center cursor-pointer border-[1px] border-gray-200"></i>
        </div>
      </div>
      <div>
        <button
          className={`mb-5 uppercase  leading-[50px] w-full group/buy duration-500 text-black border-black hover:bg-[#6e2f1b] text-xs tracking-[3px] border `}
        >
          <span
            className={`block hover:text-white group-hover/buy:animate-[buy_1s_ease-in-out]`}
          >
            notify me when available
          </span>
        </button>
      </div>
    </div>
  );
}
