import * as React from "react";
import { IProduct } from "../../../interfaces/product";
import { Box } from "@mui/material";
import TextRating from "../Rating";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { QuickView } from "../QuickView";

export default function BestRatingProducts(props: any) {
  let navigate = useNavigate();
  let [isShowQuickView, setIsShowQuickView] = useState<boolean>(false);

  return (
    <div className="mb-20">
      <p className="text-3xl text-center mb-9">Best Rating Products</p>
      <div className="flex max-lg:flex-wrap lg:gap-10">
        {props.products?.map((product: IProduct) => (
          <div
            key={product.id}
            className="cursor-pointer max-lg:px-2 max-lg:mb-6 max-lg:basis-1/2"
          >
            <div
              onClick={() => {
                navigate(`/products/${product.id}`);
                window.location.reload();
                window.scrollTo(0, 0);
              }}
            >
              <div className="group/icon relative overflow-hidden">
                <img src={product.image} alt="" />
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="duration-500 group-hover/icon:translate-y-[-70px] translate-y-8 absolute w-full flex justify-center space-x-4"
                >
                  <div className="rounded-full duration-300 hover:text-white hover:bg-[#6e2f1b] w-[40px] h-[40px] bg-white flex items-center justify-center">
                    <i className="fa-solid fa-bag-shopping"></i>
                  </div>
                  <div className="rounded-full duration-300 hover:text-white hover:bg-[#6e2f1b] w-[40px] h-[40px] bg-white flex items-center justify-center">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="rounded-full duration-300 hover:text-white hover:bg-[#6e2f1b] w-[40px] h-[40px] bg-white flex items-center justify-center">
                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                  </div>
                  <div
                    onClick={() => setIsShowQuickView(true)}
                    className="rounded-full duration-300 hover:text-white hover:bg-[#6e2f1b] w-[40px] h-[40px] bg-white flex items-center justify-center"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
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
          </div>
        ))}
      </div>
    </div>
  );
}
