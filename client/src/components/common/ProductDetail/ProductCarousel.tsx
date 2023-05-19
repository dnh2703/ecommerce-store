import * as React from "react";
import { IProduct } from "../../../interfaces/product";
import { imgProductStyles, productStyles } from "../ProductCatalog/style";
import { Grid, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import TextRating from "../Rating";
import { useState } from "react";

export default function ProductCarousel(props: any) {
  let navigate = useNavigate();
  let [count, setCount] = useState<number>(0);
  return (
    <div className="pb-10">
      <p className="text-3xl text-center mb-9">The same brand</p>
      <div className="overflow-hidden relative my-10 ">
        <div
          className=" flex w-[200%] duration-500"
          style={{ transform: `translateX(-${count}%)` }}
        >
          {props.brandProducts?.map((product: IProduct) => {
            return (
              <div
                key={product.id}
                onClick={() => {
                  navigate(`/products/${product.id}`);
                  window.location.reload();
                  window.scrollTo(0, 0);
                }}
                className={`item mx-14 w-[25%] cursor-pointer`}
              >
                <div>
                  <img className="w-full" src={product.image} alt="" />
                </div>
                <Box
                  sx={{ span: { fontSize: 14 } }}
                  className="flex items-center my-3"
                >
                  <TextRating values={product.averageRating}></TextRating>
                  <span>({product.numOfReviews})</span>
                </Box>
                <p className="text-lg mb-2">{product.name}</p>
                <p className="text-gray-400">${product.price / 100}</p>
              </div>
            );
          })}
        </div>

        {count !== 0 ? (
          <button
            className="absolute top-1/2 duration-500 left-0 translate-y-[-50%] group/slice bg-white hover:bg-[#6e2f1b] text-black hover:shadow-none shadow-md shadow-gray-300 py-3 px-6"
            onClick={() => {
              setCount(count - 50);
            }}
          >
            <i className="fa-solid fa-angle-left fa-rotate-180 duration-500 animate-[arrow_1s_ease-in-out_infinite] group-hover/slice:text-white"></i>
          </button>
        ) : (
          <button
            className="absolute top-1/2 duration-500 right-0 translate-y-[-50%] group/slice bg-white hover:bg-[#6e2f1b] text-black hover:shadow-none shadow-md shadow-gray-300 py-3 px-6"
            onClick={() => {
              setCount(count + 50);
            }}
          >
            <i className="duration-500 animate-[arrow_1s_ease-in-out_infinite] fa-solid fa-angle-right group-hover/slice:text-white "></i>
          </button>
        )}
      </div>
    </div>
  );
}
