import { Grid, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { IProductLayout, CartListProducts } from "../../../interfaces/product";
import { productStyles, imgProductStyles } from "./style";
import TextRating from "../Rating";
import { useEffect, useState } from "react";
import { QuickView } from "../QuickView";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  addToCart,
  getCartProduct,
} from "../../../features/slice/productSlice";

export const ProductsColumn = (props: IProductLayout) => {
  let navigate = useNavigate();
  let [isShowQuickView, setIsShowQuickView] = useState<boolean>(false);
  let { cartProducts } = useAppSelector((state) => state.product);
  let dispatch = useAppDispatch();
  let [reset, set] = useState(false);

  useEffect(() => {
    if (cartProducts.length > 0)
      localStorage.setItem("wishList", JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    let res = localStorage.getItem("wishList");
    if (res !== null) {
      const items = JSON.parse(res);
      if (items) {
        dispatch(getCartProduct(items));
      }
    }
  }, []);

  return (
    <Grid key={props.product.id} item xs={props.cols} sx={productStyles}>
      <QuickView
        product={props.product}
        isShow={isShowQuickView}
        closeModal={() => setIsShowQuickView(false)}
      />

      <Box sx={imgProductStyles}>
        <div
          onClick={() => navigate(`/products/${props.product.id}`)}
          className="cursor-pointer relative overflow-hidden group/productImg"
        >
          <img
            style={{ width: "100%", objectFit: "contain" }}
            className={`${
              props.product.inventory === 0 && "grayscale"
            } group-hover/productImg:scale-110 duration-300`}
            src={props.product.image}
            alt=""
          />
          {props.product.inventory === 0 && (
            <span className="absolute top-2 left-2 bg-gray-100 text-lg px-4">
              Out of stock
            </span>
          )}
        </div>
        <div className="hover">
          <div
            onClick={() =>
              dispatch(
                addToCart({
                  product: props.product,
                  quantity: 1,
                  count: 1,
                })
              )
            }
          >
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
          <div>
            <i className="fa-regular fa-heart"></i>
          </div>
          <div>
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
          <div onClick={() => setIsShowQuickView(true)}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </Box>
      <div className="flex items-center mt-2">
        <TextRating values={props.product.averageRating}></TextRating>
        <span>({props.product.numOfReviews})</span>
      </div>
      <Link to={`/products/${props.product.id}`}>
        <Typography color={"black"} sx={{ textTransform: "capitalize", my: 1 }}>
          {props.product.name}
        </Typography>
      </Link>
      <Typography variant="body1" color="gray">
        ${props.product.price / 100}
      </Typography>
    </Grid>
  );
};
