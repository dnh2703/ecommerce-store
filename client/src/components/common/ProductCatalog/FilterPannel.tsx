import { useState } from "react";
import {
  CheckComponent,
  CheckboxProton,
  SideComponent,
  SliderProton,
} from "./ProductCatalogComponent";
import { Box, Button, Grid, Typography } from "@mui/material";
import {
  FeaturedProductItem,
  FilterSide,
  FilterSideItem,
  InputPrice,
} from "./style";
import { Link } from "react-router-dom";
import { IProduct } from "../../../interfaces/product";

interface IFilterPannelProps {
  products: IProduct[];
  selectCollection?: any;
  selectedCollection?: any;
  selectAvailability?: any;
  selectedAvailability?: any;
  filteredProducts?: IProduct[];
  inStock?: boolean;
  outOfStock?: boolean;
  names?: string[];
  setInStock?: () => void;
  setOutOfStock?: () => void;
  onclick?: any;
  checked?: boolean;
  setBrand?: any;
}

export const FilterPannel = (props: any) => {
  let [isShowPrice, setIsShowPrice] = useState<boolean>(true);
  let [isShowFProduct, setIsShowFProduct] = useState<boolean>(true);
  let [isShow, setIsShow] = useState<boolean>(true);

  return (
    <>
      <SideComponent
        onclik={props.onclick}
        names={["bedroom", "kitchen", "office"]}
        products={props.products}
        filter={"COLLECTIONS"}
        collection={props.collection}
      />
      <CheckComponent
        products={props.filteredProducts}
        names={props.availability}
        filter={"AVAILABILITY"}
        inStock={props.inStock}
        setInStock={props.setInStock}
        outOfStock={props.outOfStock}
        setOutOfStock={props.setOutOfStock}
      />

      <Grid
        item
        xs={12}
        sx={{
          mb: 3,
          mr: 4,
          overflow: "hidden",
          height: `${isShowPrice ? "100px" : "35px"}`,
          transition: "1s",
        }}
      >
        {" "}
        <FilterSide
          onClick={() => {
            setIsShowPrice(!isShowPrice);
          }}
        >
          PRICE
          <i
            style={{ transition: "0.5s" }}
            className={`fa-solid fa-angle-down ${
              isShowPrice || "fa-rotate-180"
            }`}
          ></i>
        </FilterSide>
        <Box sx={{ cursor: "default" }}>
          <SliderProton value={props.price} changePrice={props.changePrice} />
          <div className="text-sm">
            Price:{" "}
            <span className="mx-2">
              <span>${props.price[0]}</span>
              <i className="mx-1 text-xs fa-solid fa-minus"></i>
              <span>${props.price[1]}</span>
            </span>
          </div>
        </Box>
      </Grid>

      {/* <CheckBrandComponent
        names={["ikea", "marcos", "liddy"]}
        filter={"BRANDS"}
        products={props.products}
        checked={props.checked}
        onclick={props.setBrand}
      ></CheckBrandComponent> */}
      <Grid
        item
        xs={12}
        sx={{
          mb: 3,
          mr: 4,
          overflow: "hidden",
          height: `${isShow ? "175px" : "35px"}`,
          transition: "1s",
        }}
      >
        <FilterSide
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          BRANDS
          <i
            style={{ transition: "0.5s" }}
            className={`fa-solid fa-angle-down ${isShow || "fa-rotate-180"}`}
          ></i>
        </FilterSide>
        <div>
          {props.brand.map((cuisine: any) => (
            <CheckboxProton
              key={cuisine.id}
              cuisine={cuisine}
              changeChecked={props.changeChecked}
              filteredProducts={
                props.collection === "all"
                  ? props.isChangePrice
                    ? props.products
                    : props.filteredProducts
                  : props.filteredProducts
              }
            />
          ))}
        </div>
      </Grid>

      {props.isShowFilter || (
        <Grid
          item
          xs={12}
          sx={{
            mb: 3,
            mr: 4,
            overflow: "hidden",
            height: `${isShowFProduct ? "370px" : "35px"}`,
            transition: "1s",
          }}
        >
          {" "}
          <FilterSide
            onClick={() => {
              setIsShowFProduct(!isShowFProduct);
            }}
          >
            FEATURED PRODUCT
            <i
              style={{ transition: "0.5s" }}
              className={`fa-solid fa-angle-down ${
                isShowFProduct || "fa-rotate-180"
              }`}
            ></i>
          </FilterSide>
          <FeaturedProductItem>
            <div>
              {props.products?.slice(0, 2).map((product: IProduct) => (
                <Link
                  style={{ textDecoration: "none", color: "gray" }}
                  to={`/products/${product.id}`}
                >
                  <Grid
                    container
                    display={"flex"}
                    alignItems={""}
                    item
                    xs={12}
                    sx={{ my: 2, div: { my: 1 } }}
                  >
                    <Grid display={"inline-flex"} item xs={4} sx={{ mr: 2 }}>
                      <img
                        style={{
                          width: "100%",
                          objectFit: "cover",
                        }}
                        src={product.image}
                        alt=""
                      />
                    </Grid>
                    <Grid
                      item
                      xs={7}
                      sx={{
                        ml: 1,
                        i: { fontSize: 10, color: "gray", mr: 0.5 },
                        span: { fontSize: 12, color: "gray", mr: 0.5 },
                      }}
                    >
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Second star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fifth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span>({product.numOfReviews})</span>
                      </div>
                      <Typography color={"gray"} textTransform={"capitalize"}>
                        {product.name}
                      </Typography>
                      <div>${product.price / 100}</div>
                    </Grid>
                  </Grid>
                  <hr style={{ border: "1px dashed #ccc", margin: "30px 0" }} />
                </Link>
              ))}
            </div>
          </FeaturedProductItem>
        </Grid>
      )}
    </>
  );
};
