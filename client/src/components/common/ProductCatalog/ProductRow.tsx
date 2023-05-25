import { Link, useNavigate } from "react-router-dom";
import { IProductLayout, CartListProducts } from "../../../interfaces/product";
import { Grid, Rating, Stack, Typography } from "@mui/material";
import { imgProductStyles, productStyles } from "./style";
import TextRating from "../Rating";
import { useEffect, useState } from "react";
import { QuickView } from "../QuickView";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  addToCart,
  getCartProduct,
} from "../../../features/slice/productSlice";

export const ProductRow = (props: IProductLayout) => {
  let navigate = useNavigate();
  let [isShowQuickView, setIsShowQuickView] = useState<boolean>(false);

  let { cartProducts } = useAppSelector((state) => state.product);
  let dispatch = useAppDispatch();
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
    <Grid
      key={props.product.id}
      style={{ marginTop: "30px" }}
      sx={productStyles}
      item
      container
    >
      <QuickView
        product={props.product}
        isShow={isShowQuickView}
        closeModal={() => setIsShowQuickView(false)}
      />

      <Grid item xs={4} sx={imgProductStyles}>
        <div
          onClick={() => navigate(`/products/${props.product.id}`)}
          className="cursor-pointer group/productImg"
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
          <div
            onClick={() => {
              setIsShowQuickView(true);
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </Grid>
      <Grid
        item
        xs={7}
        sx={{ pl: 7, cursor: "pointer" }}
        onClick={() => navigate(`/products/${props.product.id}`)}
      >
        <div className="flex items-center ">
          <TextRating values={props.product.averageRating}></TextRating>
          <span>({props.product.numOfReviews})</span>
        </div>

        <div>
          <Link to={`/products/${props.product.id}`}>
            <Typography
              color={"black"}
              fontSize={27}
              sx={{ textTransform: "capitalize", my: 2 }}
            >
              {props.product.name}
            </Typography>
          </Link>
        </div>
        <div>
          <Typography fontSize={20} variant="body1" color="gray">
            ${props.product.price / 100}
          </Typography>
        </div>
        <hr
          style={{
            border: "0.2px solid #e1e1e1",
            margin: "30px 0",
          }}
        />
        <div>
          <Typography
            style={{ overflow: "hidden" }}
            variant="body1"
            color="gray"
            sx={{
              display: "-webkit-box",
              "-webkit-box-orient": "vertical",
              "-webkit-line-clamp": "2",
            }}
          >
            {props.product.description}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};
