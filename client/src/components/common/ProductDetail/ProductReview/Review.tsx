import * as React from "react";
import { IProductReview } from "./Description";
import Rating from "../../Rating";
import { IReview } from "../../../../interfaces/review";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import FormReview from "./FormReview";

export default function Review(props: IProductReview) {
  let [writingReview, setWritingReviews] = useState<boolean>(false);

  return (
    <div>
      <p className="text-3xl">Customer Reviews</p>
      <div className="flex my-10 items-center w-full justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <Rating values={props.product?.averageRating}></Rating>
          </div>
          <span>
            Based on {props.reviews?.length}{" "}
            {props.reviews?.length !== undefined && props.reviews?.length > 1
              ? "reviews"
              : "review"}
          </span>
        </div>

        <button
          onClick={() => setWritingReviews(!writingReview)}
          className=" group/button leading-[40px] relative text-black border border-black text-sm "
        >
          <div className="w-0 z-0 h-full group-hover/button:w-full duration-500 bg-[#6e2f1b] absolute"></div>
          <span className="z-[1] uppercase tracking-[3px] relative px-12 group-hover/button:text-white group-hover/button:border-[#6e2f1b] duration-500">
            write a review
          </span>
        </button>
      </div>
      {writingReview && (
        <FormReview
          product={props.product}
          closeWriteReview={() => setWritingReviews(false)}
          reviews={props.reviews}
        />
      )}
      {props.reviews?.map((review: IReview) => (
        <div
          key={review._id}
          className="border border-gray-300 py-8 px-10 my-10"
        >
          <div className="flex  items-center ">
            <Box sx={{ span: { fontSize: 15 }, mr: 1 }}>
              <Rating values={review.rating}></Rating>
            </Box>
            <p className="text-gray-400">on {review.createdAt}</p>
          </div>
          <p className=" text-2xl my-4">{review.title}</p>
          <p className=" text-gray-500 my-4">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
