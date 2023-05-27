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
import TextRating from "../Rating";

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
        products={props.products}
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
              filteredProducts={props.products}
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
                  key={product.id}
                  style={{ textDecoration: "none", color: "gray" }}
                  to={`/products/${product.id}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="flex-nowrap flex">
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
                        span: { fontSize: 14 },
                      }}
                    >
                      <Typography color={"gray"} textTransform={"capitalize"}>
                        {product.name}
                      </Typography>
                      <div>${product.price / 100}</div>
                    </Grid>
                  </div>
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
