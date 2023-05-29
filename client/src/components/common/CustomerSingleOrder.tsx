import * as React from "react";
import { CustomerOrders, OrderItem } from "../../interfaces/order";
import { useState } from "react";

export interface ICustomerSingleOrderProps {
  order: CustomerOrders;
}

export default function CustomerSingleOrder(props: ICustomerSingleOrderProps) {
  let [isShow, setIsShow] = useState<boolean>(false);

  return (
    <div
      className="bg-white mb-5 text-sm py-5 px-10 border border-black"
      key={props.order?._id}
    >
      <div
        onClick={() => {
          setIsShow(!isShow);
        }}
        className="capitalize flex justify-between cursor-pointer"
      >
        <div>Order: {props.order?._id}</div>
        <div className="flex items-center">
          <p>{props.order?.status}</p>
          <div className="flex items-center h-full">
            <i
              className={`top-6 right-6 text-[10px] ml-1 fa-solid fa-chevron-up ${
                isShow && "rotate-180"
              }`}
            ></i>
          </div>
        </div>
      </div>

      <div>
        {isShow && (
          <div>
            <div>
              {props.order?.orderItems?.map((item: OrderItem) => {
                return (
                  <div
                    className="flex py-5 border-b gap-5 items-center"
                    key={item.product}
                  >
                    <div className="basis-[15%] max-md:basis-[25%]">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="basis-[75%] max-md:basis-[65%]">
                      <p className="text-base">{item.name}</p>
                      <p className="text-gray-500 max-lg:my-0 my-2">
                        ${item.price?.toLocaleString()}
                      </p>
                      <p className="flex items-center">
                        <div>
                          <i className="text-sm fa-solid fa-xmark"></i>
                        </div>
                        {item.amount}
                      </p>
                    </div>
                    <div className="basis-[10%] text-right">
                      $
                      {item.price !== undefined &&
                        (item.price * item.amount).toLocaleString()}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="py-5 gap-2 flex flex-col">
              <div className="flex justify-between">
                <p>Subtotal:</p>
                <p>${props.order.subtotal.toLocaleString()}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping:</p>
                <p>$50.00</p>
              </div>
              <div className="flex justify-between">
                <p>Tax:</p>
                <p>${props.order.tax.toLocaleString()}</p>
              </div>
              <div className="flex text-lg font-medium justify-between">
                <p>Total:</p>
                <p>${props.order.total.toLocaleString()}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
