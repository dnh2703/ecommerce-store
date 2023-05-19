import * as React from "react";
import { IProduct } from "../../../interfaces/product";
import { Box } from "@mui/material";
import TextRating from "../Rating";
import { useNavigate } from "react-router-dom";

export default function BestRatingProducts(props: any) {
  let navigate = useNavigate();
  return (
    <div className="mb-20">
      <p className="text-3xl text-center mb-9">Best Rating Products</p>
      <div className="flex sm:flex-wrap lg:gap-10">
        {props.products?.map((product: IProduct) => (
          <div
            className="cursor-pointer max-lg:px-2 max-lg:mb-6 max-lg:basis-1/2"
            onClick={() => {
              navigate(`/products/${product.id}`);
              window.location.reload();
              window.scrollTo(0, 0);
            }}
          >
            <div>
              <img src={product.image} alt="" />
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
        ))}
      </div>
    </div>
  );
}
