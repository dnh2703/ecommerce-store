import * as React from "react";
import CloseButton from "../CloseButton";

export default function StoreInfo(props: any) {
  return (
    <div className={`fixed z-50 w-full h-[100vh] top-0 left-0 `}>
      <div
        onClick={props.closeModal}
        className={`absolute w-full h-[100vh] top-0 left-0 bg-stone-950 opacity-60`}
      ></div>
      <div
        className={`animate-[modalHeight50_0.5s_ease-in-out] max-sm:w-full max-sm:top-[40%] absolute z-[3] h-3/5 translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 bg-white w-[500px] overflow-hidden`}
      >
        <div className="absolute top-3 right-3">
          <CloseButton closeModal={props.closeModal} />
        </div>
        <div className="flex px-8 py-6 bg-gray-100">
          <div className="basis-1/5 mr-5">
            <img src={props.product?.image} className="w-full" alt="" />
          </div>
          <div className="basis-4/5 flex flex-col justify-center">
            <p className="text-sm mb-2">{props.product?.name}</p>
            <p className="text-gray-400">${props.product?.price / 100}</p>
          </div>
        </div>
        <div className="py-5 px-8">
          <p className="text-xl">17 Duy Tan, Cau Giay, Hanoi, Vietnam</p>
          <p className="flex items-center mb-4">
            <i className="fa-solid fa-check text-[#469364] pr-3 text-lg"></i>
            <span className="text-sm text-gray-500">
              Pickup available, Usually ready in 24 hours
            </span>
          </p>
          <div>
            <div className="flex mb-4">
              <i className="leading-5 fa-solid text-lg fa-location-dot pr-3"></i>
              <span className=" text-[15px] text-gray-500">
                <p className="pb-2">17 Duy Tan, Cau Giay, Hanoi</p>
                <p className="pb-2">Cau Giay District</p>
                <p>Vietnam</p>
              </span>
            </div>
            <div className="flex mb-4 items-center">
              <i className="fa-solid fa-phone pr-3 text-lg"></i>
              <p className=" text-[15px] text-gray-500">+84123456789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
