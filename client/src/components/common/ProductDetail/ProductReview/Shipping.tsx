import * as React from "react";
import { IProductReview } from "./Description";

export default function Shipping(props: IProductReview) {
  return (
    <div
      className={`overflow-hidden duration-500 ${
        props.show ? "max-lg:h-[100px]" : "max-lg:h-0"
      }`}
    >
      <p className="leading-[1.5] text-gray-500">
        Shipping cost is based on weight. Just add products to your cart and use
        the Shipping Calculator to see the shipping price. We want you to be
        100% satisfied with your purchase. Items can be returned or exchanged
        within 30 days of delivery.
      </p>
    </div>
  );
}
