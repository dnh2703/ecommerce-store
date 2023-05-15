import {
  Box,
  Button,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  styled,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import {
  IProduct,
  IProductLayout,
  ISideFilter,
} from "../../../interfaces/product";
import { useState } from "react";
import {
  FeaturedProductItem,
  FilterSide,
  FilterSideItem,
  InputPrice,
  borderCircleGray,
  imgProductStyles,
  productStyles,
} from "./style";

export const ProductsColumn = (props: IProductLayout) => {
  return (
    <Grid key={props.product.id} item xs={props.cols} sx={productStyles}>
      <Box sx={imgProductStyles}>
        <img
          style={{ width: "100%" }}
          src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
          alt=""
        />
        <div className="hover">
          <div>
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
          <div>
            <i className="fa-regular fa-heart"></i>
          </div>
          <div>
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </Box>
      <div>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <span>({props.product.numOfReviews})</span>
      </div>
      <NavLink to={`/products/${props.product.id}`}>
        <Typography color={"black"} sx={{ textTransform: "capitalize", my: 2 }}>
          {props.product.name}
        </Typography>
      </NavLink>
      <Typography variant="body1" color="gray">
        ${props.product.price / 100}
      </Typography>
    </Grid>
  );
};

export const ProductRoute = (props: any) => {
  return (
    <NavLink style={{ textDecoration: "none" }} to={`/${props.name}`}>
      <Typography
        sx={{
          opacity: "0.6",
          color: "#000",
          marginRight: "10px",
          fontSize: "12px",
          textTransform: "capitalize",
        }}
      >
        {props.name}
      </Typography>
    </NavLink>
  );
};

export const ProductRow = (props: IProductLayout) => {
  return (
    <Grid
      key={props.product.id}
      style={{ marginTop: "30px" }}
      sx={productStyles}
      container
      item
    >
      <Grid item xs={4} sx={imgProductStyles}>
        <img
          style={{ width: "100%" }}
          src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
          alt=""
        />
        <div className="hover">
          <div>
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
          <div>
            <i className="fa-regular fa-heart"></i>
          </div>
          <div>
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </Grid>
      <Grid item xs={7} sx={{ pl: 7 }}>
        <div>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <span>({props.product.numOfReviews})</span>
        </div>
        <div>
          <NavLink to={`/products/${props.product.id}`}>
            <Typography
              color={"black"}
              fontSize={27}
              sx={{ textTransform: "capitalize", my: 2 }}
            >
              {props.product.name}
            </Typography>
          </NavLink>
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

export const GridView = styled("div")({
  "&:hover": {
    Bar: { backgroundColor: "white" },
    backgroundColor: "#6e2f1b",
    borderColor: "#6e2f1b",
    i: {
      color: "white",
    },
  },

  transition: "0.3s",
  color: "gray",
  borderRadius: "50%",
  border: "1px solid #ccc",
  width: "30px",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "10px",
  cursor: "pointer",
  gap: 2,
});

export const SideComponent = (props: ISideFilter) => {
  const [isShow, setIsShow] = useState<boolean>(true);

  return (
    <Grid
      item
      xs={12}
      sx={{
        mb: 3,
        mr: 4,
        overflow: "hidden",
        height: `${
          isShow ? (props.names.length === 3 ? "150px" : "120px") : "35px"
        }`,
        transition: "1s",
      }}
    >
      <FilterSide
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        {props.filter}
        <i
          style={{ transition: "0.5s" }}
          className={`fa-solid fa-angle-down ${isShow || "fa-rotate-180"}`}
        ></i>
      </FilterSide>
      <div>
        {props.names?.map((name: string) => {
          return (
            <FilterSideItem style={{ width: "100%" }}>
              {name}
              <Box sx={borderCircleGray}>
                {
                  props.products.filter((product: IProduct) => {
                    if (
                      name === "bedroom" ||
                      name === "kitchen" ||
                      name === "office"
                    ) {
                      return product.category === name;
                    }
                    if (name === "In stock") {
                      return product.inventory !== 0;
                    }
                    if (name === "Out of stock") {
                      return product.inventory === 0;
                    }
                    if (
                      name === "ikea" ||
                      name === "marcos" ||
                      name === "liddy"
                    ) {
                      return product.company === name;
                    }
                  }).length
                }
              </Box>
            </FilterSideItem>
          );
        })}
      </div>
    </Grid>
  );
};
