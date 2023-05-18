import * as React from "react";
import { useEffect, useState } from "react";
import Description from "./Description";
import Review from "./Review";
import Shipping from "./Shipping";

export default function ProductReview(props: any) {
  let [content, setContent] = useState<string>("description");

  return (
    <div className="my-8">
      <div className="flex w-full text-2xl justify-center text-gray-500 border-b-[2px]">
        <div onClick={() => setContent("description")} className="mx-8">
          <span className="group/review relative ">
            <h3
              className={`py-3  cursor-pointer ${
                content === "description" && "text-black"
              } group-hover/review:text-black`}
            >
              Description
            </h3>
            <span
              className={`absolute duration-500 w-0 ${
                content === "description" && "w-full"
              } group-hover/review:w-full h-[2px] bg-black`}
            ></span>
          </span>
        </div>

        <div onClick={() => setContent("review")} className="mx-8">
          <span className="group/review relative ">
            <h3
              className={`py-3 capitalize cursor-pointer ${
                content === "review" && "text-black"
              } group-hover/review:text-black`}
            >
              review
            </h3>
            <span
              className={`absolute duration-500 w-0 ${
                content === "review" && "w-full"
              } group-hover/review:w-full h-[2px] bg-black`}
            ></span>
          </span>
        </div>

        <div onClick={() => setContent("shipping")} className="mx-8">
          <span className="group/review relative ">
            <h3
              className={`py-3 capitalize cursor-pointer ${
                content === "shipping" && "text-black"
              } group-hover/review:text-black`}
            >
              shipping
            </h3>
            <span
              className={`absolute duration-500 w-0 ${
                content === "shipping" && "w-full"
              } group-hover/review:w-full h-[2px] bg-black`}
            ></span>
          </span>
        </div>

        <div onClick={() => setContent("return")} className="mx-8">
          <span className="group/review relative ">
            <h3
              className={`py-3 capitalize cursor-pointer ${
                content === "return" && "text-black"
              } group-hover/review:text-black`}
            >
              return
            </h3>
            <span
              className={`absolute duration-500 w-0 ${
                content === "return" && "w-full"
              } group-hover/review:w-full h-[2px] bg-black`}
            ></span>
          </span>
        </div>
      </div>
      <div className="py-12 border-b-[2px]">
        {content === "description" && <Description />}
        {content === "review" && (
          <Review product={props.product} reviews={props.reviews} />
        )}
        {content === "shipping" || content === "return" ? <Shipping /> : <></>}
      </div>
    </div>
  );
}
