import * as React from "react";
import { IProductReview } from "./Description";
import Rating from "../../Rating";
import { IReview } from "../../../../interfaces/review";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import FormReview from "./FormReview";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Review(props: IProductReview) {
  let [writingReview, setWritingReviews] = useState<boolean>(false);
  let accessToken = Cookies.get("accessToken");
  let refreshToken = Cookies.get("refreshToken");
  let navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("user");
    const userJson = user ? JSON.parse(user) : null;
    return userJson;
  });
  let [email, setEmail] = useState<string>("");
  let [name, setName] = useState<string>("");
  let [userId, setUserId] = useState<string>("");
  useEffect(() => {
    const { name, email, userId } = user;
    setEmail(email);
    setName(name);
    setUserId(userId);
  }, [user]);

  return (
    <div
      className={`${
        props.show ? "max-lg:block" : "max-lg:hidden"
      } overflow-hidden duration-500`}
    >
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
        {props.product?.review?.filter(
          (review: IReview) => review.user === userId
        ).length === 0 && (
          <button
            onClick={() => {
              accessToken || refreshToken
                ? setWritingReviews(!writingReview)
                : navigate("/account/login");
            }}
            className=" group/button leading-[40px] relative text-black border border-black text-sm "
          >
            <div className="w-0 z-0 h-full group-hover/button:w-full duration-500 bg-[#6e2f1b] absolute"></div>
            <span className="z-[1] uppercase tracking-[3px] relative px-12 group-hover/button:text-white group-hover/button:border-[#6e2f1b] duration-500">
              {refreshToken || accessToken
                ? "write a review"
                : "sign in to review"}
            </span>
          </button>
        )}
      </div>
      {writingReview && (
        <FormReview
          name={name}
          email={email}
          product={props.product}
          closeWriteReview={() => setWritingReviews(false)}
          reviews={props.reviews}
          writingReview={writingReview}
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
            <p className="text-gray-400">
              userId: {review.user} {review.user === userId && "(you)"}
            </p>
          </div>
          <p className=" text-2xl my-4">{review.title}</p>
          <p className=" text-gray-500 my-4">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
