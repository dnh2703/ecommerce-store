import * as React from "react";
import { useEffect, useState } from "react";
import Description from "./Description";
import Review from "./Review";
import Shipping from "./Shipping";

interface IShowReview {
  description: boolean;
  review: boolean;
  shipping: boolean;
  return: boolean;
}

export default function ProductReview(props: any) {
  let [content, setContent] = useState<string>("description");
  let [isShow, setIsShow] = useState<IShowReview>({
    description: false,
    review: false,
    shipping: false,
    return: false,
  });

  return (
    <div className="my-8">
      <div className="lg:flex hidden w-full text-2xl justify-center text-gray-500 border-b-[2px]">
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
      <div className="lg:block hidden py-12 border-b-[2px]">
        {content === "description" && <Description />}
        {content === "review" && (
          <Review product={props.product} reviews={props.reviews} />
        )}
        {content === "shipping" || content === "return" ? <Shipping /> : <></>}
      </div>

      <div className="lg:hidden">
        <div
          onClick={() => {
            setIsShow({ ...isShow, description: !isShow.description });
          }}
          className="lg:hidden sm:flex items-center mb-4 justify-between cursor-pointer py-3 px-5 bg-gray-100"
        >
          <p>Description</p>
          {isShow.description ? (
            <i className="fa-solid fa-minus"></i>
          ) : (
            <i className="fa-solid fa-plus"></i>
          )}
        </div>
        <Description show={isShow.description}></Description>

        <div
          onClick={() => {
            setIsShow({ ...isShow, review: !isShow.review });
          }}
          className="lg:hidden sm:flex items-center mb-4 justify-between cursor-pointer py-3 px-5 bg-gray-100"
        >
          <p>Review</p>
          {isShow.review ? (
            <i className="fa-solid fa-minus"></i>
          ) : (
            <i className="fa-solid fa-plus"></i>
          )}
        </div>

        <Review
          show={isShow.review}
          product={props.product}
          reviews={props.reviews}
        ></Review>

        <div
          onClick={() => {
            setIsShow({ ...isShow, shipping: !isShow.shipping });
          }}
          className="lg:hidden sm:flex items-center mb-4 justify-between cursor-pointer py-3 px-5 bg-gray-100"
        >
          <p>Shipping</p>
          {isShow.shipping ? (
            <i className="fa-solid fa-minus"></i>
          ) : (
            <i className="fa-solid fa-plus"></i>
          )}
        </div>

        <Shipping show={isShow.shipping}></Shipping>

        <div
          onClick={() => {
            setIsShow({ ...isShow, return: !isShow.return });
          }}
          className="lg:hidden sm:flex items-center mb-4 justify-between cursor-pointer py-3 px-5 bg-gray-100"
        >
          <p>Return</p>
          {isShow.return ? (
            <i className="fa-solid fa-minus"></i>
          ) : (
            <i className="fa-solid fa-plus"></i>
          )}
        </div>

        <Shipping show={isShow.return}></Shipping>
      </div>
    </div>
  );
}
